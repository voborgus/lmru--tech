---
title: "Asynchronous Design Principles"
weight: 30
type: docs
---

There are two technologies are supported in the company for cross-product async communication.

<div class="row mb-2 mt-4">
	<div class="offset-2 col-5 text-center">
    <img src="../kafka.png" alt="Kafka logo" style="height: 100px;"/>
    <h3 class="h3 mt-3">Kafka</h4>
  </div>
  <div class="col-5 text-center">
    <img src="../rabbitmq.png" alt="RabbitMQ logo" style="height: 100px;"/>
    <h3 class="h3 mt-3">RabbitMQ</h4>
  </div>
</div>

<div class="row mb-4 mt-2">
	<div class="col-2 text-right">
    <p><b class="text-nowrap">Comfort speed</b></p>
    <p><b class="text-nowrap">Acknowledgment</b></p>   
    <p><b class="text-nowrap">Multiple read</b></p>
    <p><b class="text-nowrap">Routing</b></p>
    <p><b class="text-nowrap">Message priority</b></p>
    <p><b class="text-nowrap">Model</b></p>
    <p><b class="text-nowrap">Broker scaling</b></p>
    <p><b class="text-nowrap">Client scaling</b></p>
  </div>
  <div class="col-5 text-center">
    <p>100 rps</p>
    <p><i class="fa fa-check"></i></p>
    <p><i class="fa fa-check"></i></p>
    <p><i class="fa fa-minus"></i></p>
    <p><i class="fa fa-minus"></i></p>
    <p><abbr data-toggle="tooltip" title="Consumers request batches of messages from a given offset.">Pull</abbr></p>
    <p>Horizontal</p>
    <p>Scale the number of topic partitions</p>
  </div>
  <div class="col-5 text-center">
    <p>20 rps</p>
    <p><i class="fa fa-check"></i></p>
    <p><i class="fa fa-minus"></i></p>
    <p><i class="fa fa-check"></i></p>
    <p><i class="fa fa-check"></i></p>
    <p><abbr data-toggle="tooltip" title="Messages are pushed from RabbitMQ to the consumer.">Push</abbr></p>
    <p>Vertical <sup><abbr data-toggle="tooltip" title="Yes, all our RabbitMQ clusters scalled horizontally. However, rabbit uses a lot of resources for coordination and further scaling will be more efficient through increasing resources on nodes.">but why?</abbr></sup></p>
    <p>Scale the number of consumers</p>
  </div>
</div>

<div class="row mb-4 mt-2">
	<div class="col-2 text-right">
    <p><b class="text-nowrap">Use cases</b></p>
  </div>
  <div class="col-5">
    <ul>
      <li>Data analysis: tracking, ingestion, logging, security.</li>
      <li>Real-time processing: many producers with a small number of consumers.</li>
      <li>Event Sourcing: modeling changes to a system as a sequence of events.</li>
    </ul>
  </div>
  <div class="col-5">
    <ul>
      <li>Complex routing to consumers.</li>
      <li>Communication between microservices.</li>
      <li>Application supports only legacy protocols such as STOMP, MQTT and others.</li>
    </ul>
  </div>
</div>

## General rules

Each product team have their own instance of message broker.
The system that publishes data is responsible for this instance.

All data needed for several systems should be sent through <abbr data-toggle="tooltip" title="Agnostic for business processes & consumption and minimalistic APIs created for multiple consumers.">canonical</abbr> topics or exchanges. Each canonical topics, exchanges and queues must be tied to the domain by specifying the <abbr data-toggle="tooltip" title="products, services, stocks, prices, offers, orders, customers, partners, company, locations, finance or technical">canonical domain</abbr> in the name.

Sending directly to the RabbitMQ queue prohibited: use exchange instead.

## Naming conventions

Use *camelCase* for all fields.

### Kafka Topic

```
[app]-[type]-[int/ext]-[domain]-[object]-[version]
```

* `app` the name of the application that publishes
* `type`
  * `system` an internal topic for the product team/application
  * `init` a topic for the full extraction data and not used for the daily integration <sup><abbr data-toggle="tooltip" title="Upload data to the new application or restore historical data for an application that crashed.">examples</abbr></sup>
  * `canonical` a topic for the publication <abbr data-toggle="tooltip" title="Agnostic for business processes & consumption and minimalistic APIs created for multiple consumers.">canonical</abbr> data
* `int/ext` *int* topic is used internally, *ext* topic is used to publish on the Internet
* `domain` <abbr data-toggle="tooltip" title="products, services, stocks, prices, offers, orders, customers, partners, company, locations, finance or technical">canonical domain</abbr>
* `object` data transmitted through this topic <sup><abbr data-toggle="tooltip" title="fulfillmentTask, shipment, paymentTask">examples</abbr></sup>
* `version` version of the topic

{{% alert color="success" title="Example" %}}
`crm-canonical-int-customers-organization-v9`
{{% /alert %}}

### RabbitMQ Exchange

```
[app]-[type]-x-[domain]-[object]-[version]
```

* `app` name of the application that publishes
* `type`
  * `tx` topic exchange.
  * `fx` fanout exchange.
  * `dx` direct exchange.
  * `hx` headers exchange
* `x` exchange 
* `domain` <abbr data-toggle="tooltip" title="products, services, stocks, prices, offers, orders, customers, partners, company, locations, finance or technical">canonical domain</abbr>
* `object` data transmitted through this exchange <sup><abbr data-toggle="tooltip" title="fulfillmentTask, shipment, paymentTask">examples</abbr></sup>
* `version` version of the exchange

{{% alert color="success" title="Example" %}}
`paymentGateway-tx-x-orders-paymentTask-v1`
{{% /alert %}}

### RabbitMQ Queue

```
[app]-[type]-q-[domain]-[object]-[filter]-[version]
```

* `app` name of the application that subscribes
* `type`
  * `tx` topic exchange.
  * `fx` fanout exchange.
  * `dx` direct exchange.
  * `hx` headers exchange
* `q` queue 
* `domain` <abbr data-toggle="tooltip" title="products, services, stocks, prices, offers, orders, customers, partners, company, locations, finance or technical">canonical domain</abbr>
* `object` data transmitted through this queue <sup><abbr data-toggle="tooltip" title="fulfillmentTask, shipment, paymentTask">examples</abbr></sup>
* `filter` description of the filter for type: `tx`, `dx`, `hx` <sup><abbr data-toggle="tooltip" title="created, updatedStatus, updatedStatusPaid">examples</abbr></sup>
* `version` version of the queue

{{% alert color="success" title="Example" %}}
`solution-tx-q-orders-paymentTask-created-v2`
{{% /alert %}}