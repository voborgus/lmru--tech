---
title: "Technology Stack"
linkTitle: "Stack"

type: docs
weight: 25
menu:
  main:
    weight: 25
---

We don't use a mono stack approach. Our wide stack gives us the possibility to use the best tools for each use case, helps to model tech future, to develop skills and avoid tech and vendor lock-in.

#### Here are the main influences to select the right technologies:
* Current and future capability to develop and support component in terms of workforce
* Maturity of a technology
* Way of use (business logic, system, and middle-level software)
* Specific of using (type of load, sensitivity of data, etc.)
* Licensing policy

### How to start to use new technology
Each technology should pass through lifecycle specified in the [Technology Committee](../values/glossary/#technology-committee) glossary.

### Technology table
Here is the second version of the way of displaying of a tech stack. Previously we had Technology Radar, however, this could not be used.

To make the process of choosing technology more clear and simple we going to have a table, where we have an <abbr data-toggle="tooltip" title="DB, Frontend, backend, etc">area</abbr> and <abbr data-toggle="tooltip" title="CRUD API, BFF, Process orchestration and so on">use cases</abbr>. For each use case, we have the <abbr data-toggle="tooltip" title="programming language, framework, product">technology</abbr> and our attitude to this. Attitude shows: is it the `best choice`, on `research` or on the `trial stage`. We have the `hold` section where located unaccepted or ancient technologies. Our attitude to each technology has an explanation of why.

|Area                                     |Patterns/cases                  |Research (Non production)      |Trial (Production)                                                         |Best choice for new components (Production)             |Hold (Legacy in production and unaccepted or ancient technologies)|
|-----------------------------------------|--------------------------------|-------------------------------|---------------------------------------------------------------------------|--------------------------------------------------------|------------------------------------------------------------------|
|Machine Learning                         |Libraries                       |Pytorch                        |                                                                           |LightGBM  Catboost  Scikit-learn  Matplotlib  Pandas  Plotly  OpenCV  TensorFlow (Keras)  Seaborn|                                                                  |
|                                         |MLOps                           |DVC  Kubeflow  MLFlow          |                                                                           |                                                        |                                                                  |
|                                         |Tools                           |                               |                                                                           |Jupyter Notebook                                        |JupyterHub                                                        |
|                                         |Analysis                        |                               |                                                                           |Python 3                                                |                                                                  |
|Data                                     |Data Platform backend﻿          |                               |                                                                           |GO  JAVA  Django                                        |                                                                  |
|                                         |Data Platform frontend          |                               |                                                                           |Next.js                                                 |                                                                  |
|                                         |Data Product backend            |                               |                                                                           |Flask  AsyncIO  Python                                  |                                                                  |
|                                         |Data Product frontend           |                               |                                                                           |React                                                   |                                                                  |
|                                         |Data Visualization  (BI tools)  |                               |                                                                           |Power BI  Tableau                                       |QlikView  SQL Server Reporting Services  SAP BusinessObjects      |
|                                         |Data Processing                 |                               |Spark  Scala                                                               |                                                        |                                                                  |
|                                         |DWH                             |                               |                                                                           |Greenplum                                               |                                                                  |
|                                         |Dataload                        |                               |                                                                           |Kafka  Yandex Object Storage S3                         |Hadoop  MinIO                                                     |
|                                         |ETL  Task scheduler             |                               |                                                                           |NiFi  ESB Stambya                                       |Talend                                                            |
|                                         |                                |Airflow                        |                                                                           |                                                        |                                                                  |
|Business applications backend            |CRUD                            |Platformeco                    |Springboot  GO  NEST JS  Typescript  Python                                |NodeJS  Kotlin  Java  Typescript                        |C# ASP.Net                                                        |
|                                         |BFF                             |                               |NodeJS  Java                                                               |Platformeco                                             |Python                                                            |
|                                         |SAGA                            |                               |NodeJS                                                                     |Kotlin  Java                                            |                                                                  |
|                                         |Complex BL, Process orchestration|                               |Kotlin                                                                     |Camunda                                                 |                                                                  |
|                                         |Data storage                    |Ignite  Tarantool              |Maria DB  Cassandra  Redis                                                 |MongoDB  ClickHouse  PostgeSQL  S3                      |Oracle  MS SQL  FTPS /SFTP  My SQL                                |
|Frontends                                |                                |WASM                           |TypeScript  React  Redux  Vue  Svelte  WebComponents  Angular              |JavaScript                                              |php                                                               |
|QA                                       |                                |                               |                                                                           |                                                        |                                                                  |
|API management                           |Protocols & integration agreements  HTTP2  HTTP3  GraphQL|                               |GRPC                                                                       |REST API &#124; KeepAlive  HTTP RPC (Experience API)  WebSocket|SOAP  File Transfer  DB link  Batch transfer  FTPS /SFTP          |
|                                         |Gatways & mediation  KONG  ISTIO|                               |                                                                           |APIGEE                                                  |ESB  File transfer  Direct Integration                            |
|                                         |Messaging & Streaming - Async   |Pulsar  NATS/streaming         |                                                                           |AMQP (RabbitMQ)  Kafka                                  |JMS  ActiveMQ                                                     |
|Observability                            |Monitoring                      |                               |Prometheus                                                                 |Prometheus  Zabbix  Dynatrace                           |Pingdom  ELK                                                      |
|                                         |Alerting                        |Statuspage                     |                                                                           |Opsgenie  Slack                                         |Telegram  Grafana                                                 |
|                                         |Tracing  Visualize              |Open Telemetry                 |                                                                           |Dynatrace  Zipkin  Jaeger                               |                                                                  |
|                                         |                                |Statuspage  Clickhouse         |Platformeco  Kibana                                                        |Power BI  Grafana  Dynatrace                            |Zabbix  Kibana                                                    |
|CICD                                     |CI tool                         |Github Actions                 |Jenkins                                                                    |Jenkins                                                 |Gitlab CI/CD                                                      |
|                                         |Code storage                    |                               |Gitlab  Github                                                             |Github                                                  |Gitlab                                                            |
|                                         |Artifacts Storage               |                               |                                                                           |Artifactory                                             |Nexus                                                             |
|                                         |Code Quality Analisys           |                               |                                                                           |Sonarqube                                               |                                                                  |
|                                         |Valnurabilites Scanning         |Github Valnuarabilities scanner|Jfrog Xray  Checkmarx                                                      |                                                        |                                                                  |
|                                         |CD tool/framework               |                               |                                                                           |Ansible  Helm                                           |                                                                  |
|                                         |Containerization                |                               |                                                                           |Kubernetes  Docker                                      |Openshift                                                         |
|                                         |Secrets Storage                 |                               |                                                                           |Hashicorp Vault                                         |Git                                                               |
|                                         |Logging                         |Grafana Loki                   |                                                                           |Opendistro (ELK)                                        |                                                                  |
|                                         |Monitoring                      |                               |                                                                           |Prometheus                                              |Zabbix                                                            |
|Infrastructure                           |Infrastructure as code          |Saltstack  Puppet              |Terraform                                                                  |                                                        |                                                                  |
|                                         |Cloud                           |                               |                                                                           |                                                        |                                                                  |
|                                         |File Storage\Data Storage       |                               |                                                                           |                                                        |                                                                  |
|                                         |Database                        |Victoriametrics                |PostgreSQL  MongoDB  Elasticsearch  Redis  MSsql  ClickHouse  Prometeus  Cassandra|                                                        |Oracle                                                            |
|                                         |PaaS databases and PaaS message brokers|Apache Pulsar  NATS/streaming  |RabbitMQ  Kafka                                                            |                                                        |                                                                  |
|                                         |Load Balancer                   |Nginx  HA Proxy                |Citrix NetScaler  Kemp                                                     |                                                        |                                                                  |
|                                         |Virtualization                  |OpenStack                      |VMware                                                                     |                                                        |                                                                  |
|                                         |Server OS                       |                               |Windows server 2019  Centos  7  Ubuntu  18.04                              |                                                        |                                                                  |
|                                         |Mailing                         |                               |MS exchange  Office 365                                                    |                                                        |                                                                  |
|                                         |Patch management                |                               |SCCM                                                                       |                                                        |                                                                  |
|Licensing                                |                                |                               |                                                                           |OpenSource                                              |                                                                  |


### Other tools

| Scope | Tool |
| ------ | ------ |
| Messenger for communications with IT | [`Slack`](https://adeo-tech-community.slack.com), [`Telegram`](https://telegram.org/) |
| Messenger for corporate communications | [`Workplace`](https://workplace.facebook.com) |
| Official correspondence | [`Email`](https://owa.leroymerlin.ru/) |
| Social Network | [`Workplace`](https://workplace.facebook.com) |
| Knowledge Base | [`Confluence`](https://confluence.lmru.tech), [`GitHub`](https://github.com/adeo/) |
| Task Tracker | [`Jira`](https://jira.lmru.tech) |
| Video Conferencing | [`Zoom`](https://leroymerlin.zoom.us) |
| Incident Management | [`BPM Online`](http://itsm.leroymerlin.ru/) |
| Endless Boards | [`Miro`](https://miro.com/) |