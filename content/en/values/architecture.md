---
title: "Architecture"
weight: 20
type: docs
description: We are building long-term systems and care about technical debt.
---

{{% pageinfo color="warning" %}}
<h3>Work in progress</h3><br />
Content under construction: the set of values is not accepted and not convenient for use yet. <br /><br />
{{% /pageinfo %}}

### 1. We care about API cleanness.

* All business services exposes their APIs on the Developer Portal. *[<i class="fa fa-lock"></i> internal ](https://developers.apigee.lmru.tech/)*
* We are following [API Design Principles](../../api/).
* We use REST API for synchronous and all our [API level 2](https://dsugrobov.github.io/technology/api/sync/) mature.
* We use AMQP or Kafka for asynchronous communication.
* Non compliant APIs should declared as a technical debt and to be changed.
* Services do not provide a client library. The API and its data model are expressed as REST and JSON.

#### Practices & rituals: 
*[30% rule](../../glossary/#30-rule)*

{{< alert color="danger" title="Antipattern" >}}GraphQL or GRPC endpoint exposed for external usage.{{< /alert >}}

<hr>

### 2. We use modular architecture.

* Modules are isolated and loosely coupled.
* Modules have single responsibility. 
* We can throw away existing, add on new or change sequence of modules execution safely without impact on other functionality.
* We periodically review important architecture and technical debt issues. 

#### Practices & rituals: 
*[high cohesion](../../glossary/#high-cohesion)*, *[external configuration](../../glossary/#external-configuration)*, *[orchestration/choreography](../../glossary/#orchestration-choreography)*, *[Solution Architect Review](../../glossary/#solution-architect-review)*

{{< alert color="danger" title="Antipattern" >}}Microservices with hardcoded steps and multiple entries.{{< /alert >}}

<hr>

### 3. We develop only economically sustainable products.

* We avoid duplication of systems functionality.
* Every system have single mantainer team.

#### Practices & rituals: 
*[revenue / expenses ratio](../../glossary/#revenue--expenses-ratio)*, *[KISS](../../glossary/#kiss)*

{{< alert color="danger" title="Antipattern" >}}We are using some technology only because of hype or fashion.{{< /alert >}}
