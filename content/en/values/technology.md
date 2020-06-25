---
title: "Technology"
weight: 30
type: docs
description: Сonstantly challenging selection of tools.
---

{{% pageinfo color="warning" %}}
<h3>Work in progress</h3><br />
Content under construction: the set of values is not accepted and not convenient for use yet. <br /><br />
{{% /pageinfo %}}


### 1. All codebase should be compliant with [InnerSource requirements](https://adeo.github.io/innersource/).

* Codebase should be accessible for every employee and stored in GitHub.
* Non compliant repositories should declared as a technical debt and should be fixed.
* Code review is mandatory.

#### Practices & rituals: 
*[30% rule](../glossary/#30-rule)*

{{< alert color="warning" title="Antipattern" >}}Closed repository without readme and maintainers working in production.{{< /alert >}}

<hr>

### 2. We are automate everything as much as possible.

* We prefer automated tests rather than manual testing.
* Build & Deploy should be done by CI tool.

#### Practices & rituals: 
*[DevOps](../glossary/#devops)*

{{< alert color="warning" title="Antipattern" >}}It is scary to make release because of plenty of manual work and rare occasion.{{< /alert >}}

<hr>

### 3. Choice of technology should be aligned with [Technology Table](../../stack/).

* Table is kept up-to-date by technology committee.
* All movements in the table are  logged in decision records table.
* We support iniciatives to try new technology or approach after notice of technology committee.

#### Practices & rituals: 
*[Technology Committee](../glossary/#technology-committee)*

{{< alert color="warning" title="Antipattern" >}}Manager orders an external company to write a non-maintainable black-box application on 1C.{{< /alert >}}

<hr>

### 4. Front applications follow [design system](https://zeroheight.com/1165fb04f/).

* All business settings should be configurable through UI.

{{< alert color="warning" title="Antipattern" >}}Built in store application uses Comic Sans.{{< /alert >}}

<hr>

### 5. We build cloud native applications. 

* When possible applications runs inside containers using container orchestrator.
* We prefer stateless applications
* Applications exposes telemetry for analysis and monitoring.
* Requests are traceable.
* Applications and databases are replicated and can be sharded.
* Configuration of applications should be done in environment and not locked in application.

#### Practices & rituals: 
distributed tracing, RBAC, encryption, valet

{{< alert color="warning" title="Antipattern" >}}Monolith uses stored procedures in the database and run in plain hardware.{{< /alert >}}

<hr>

### 6. We build robust applications and infrastructure.

* We response accurately and correctly handle wrong inputs.
* Services provides <abbr data-toggle="tooltip" title="Service Level Objective is a goal that service provider wants to reach. Google it for details.">SLO</abbr> and controls them.
* We handle partial outages.
* Infrastructure for key systems allows to have master-master replication.

#### Practices & rituals: 
cache answers, degraded mode, retry, timeout, circuit breaker, tolerant reader

{{< alert color="warning" title="Antipattern" >}}Client can't order because email system is broken.{{< /alert >}}
