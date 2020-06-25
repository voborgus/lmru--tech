---
title: "Glossary"
weight: 40
type: docs
toc_hide: true
description: Practices and rituals supporting values.
---
## \#
### 30% rule
Each engineer may spend some part of his working time on R&D tasks, technical debt reduction or education. 
The percentage it is approximate number and should be determined by technical leader together with the product team.

*[← back to Architecture value](../architecture/#1-all-business-services-exposes-their-apis-on-the-developer-portal)* • *[or to Technology value](../technology/#1-all-codebase-should-be-compliant-with-innersource-requirementshttpsadeogithubioinnersource)*
## A
### Availability of the tools
We can take corporate notebooks wherever we want. All tools and environments are available on the internet or through VPN.

*[← back to value](../people/#3-we-respect-colleagues-and-their-time)*
<hr />

## B
### BORD
Once a year feedback session. Used also for yearly goals standing.

*[← back to value](../people/#4-we-give-and-request-constructive-feedback)*
<hr />

## С
### Communities

*[← back to value](../people/#1-common-goals-are-more-important-than-individual)*
<hr />

## D
### Daily Meeting
15-minute time-boxed event held each day for the team for the next 24 hours work planning. This optimizes team collaboration and performance by inspecting the work since the last Daily and forecasting upcoming work. [[scrum guide]](https://www.scrumguides.org/scrum-guide.html#events-daily)

*[← back to value](../people/#3-we-respect-colleagues-and-their-time)*

### DevOps
A friendship between developers and operations :) If seriously, I would recommend to read [this book](https://www.amazon.com/Phoenix-Project-DevOps-Helping-Business/dp/0988262592) to understand what is it.

*[← back to value](../technology/#2-we-are-automate-everything-as-much-as-possible)*

### Did something ask for feedback
Short cycles and feedback loops – an ideal picture. The sooner you get the feedback, the faster you can fix the problem.

*[← back to value](../people/#4-we-give-and-request-constructive-feedback)*
<hr />

## E
### External Configuration
A changeable configuration of applications should be stored in the environment.

*[← back to value](../architecture/#2-we-use-modular-architecture)*
<hr />

## F
### Fail fast rule

*[← back to value](../people/#2-we-accept-mistakes-and-learn-from-them)*
<hr />

## H
### High Cohesion
High cohesion is when you have a class (or module) that does a well defined job. Low cohesion is when a class does a lot of jobs that don't have much in common. [[source]](https://stackoverflow.com/questions/10830135/what-is-high-cohesion-and-how-to-use-it-make-it)

*[← back to value](../architecture/#2-we-use-modular-architecture)*
<hr />

## I
### Internal Rotation
Want to change job — ask HR for options.

*[← back to value](../people/#5-your-job-is-safe-your-role-is-not)*
<hr />

## K
### KISS
Keep It Stupid Simple. Like Occam said, «[entities should not be multiplied without necessity](https://en.wikipedia.org/wiki/Occam%27s_razor)». Adding new levels of abstraction must have a strong reason. Adding new data entities or solution components also must have strong reason. Simplification is a King and we welcome the approach to describe it as an architecture debt and rework the complex areas to make it simple. The decision is made at the level of a technical and solution architect, in controversial situations we made decisions on the [Architecture Committee](#solution-architect-review).

*[← back to value](../architecture/#3-we-develop-only-economically-sustainable-products)*
<hr />

## O
### Orchestration / Choreography
Microservices pattern for building of sequenses of execution (SAGAs). Short explanation [here](https://medium.com/ingeniouslysimple/choreography-vs-orchestration-a6f21cfaccae). Detailed [here](https://microservices.io/patterns/data/saga.html).

*[← back to value](../architecture/#2-we-use-modular-architecture)*
<hr />

## P
### Planning
Special event for planning of the work to be performed. This plan is created by the collaborative work of the entire team. [[scrum guide]](https://www.scrumguides.org/scrum-guide.html#events-planning)

*[← back to value](../people/#3-we-respect-colleagues-and-their-time)*

### Post Mortem

*[← back to value](../people/#2-we-accept-mistakes-and-learn-from-them)*
<hr />

## R
### Remote Ready
The organization modifies its process for meetings, reviews, and other collaboration to accommodate remote work. Remote-only employees have meetings that are built with them in mind.

Other points: 

* Meetings via videoconferencing by default
* Accessible, structured, and documented team meetings
* Document, document, document (aka, nothing is word-of-mouth or from memory)
* No hallway conversations (unless you document them)
* Planned together-time

More information in the [CircleCI blog](https://circleci.com/blog/how-to-successfully-work-from-home-strategies-for-remote-work/).

*[← back to value](../people/#3-we-respect-colleagues-and-their-time)*

### Required agenda in invitation
Each invitation to the meeting should have agenda and the meeting goal.

*[← back to value](../people/#3-we-respect-colleagues-and-their-time)*

### Retrospective
The Retro is the event giving an opportunity for the team to inspect itself and create a plan for improvements to be enacted next time. [[scrum guide]](https://www.scrumguides.org/scrum-guide.html#events-retro)

*[← back to value](../people/#3-we-respect-colleagues-and-their-time)*


### Revenue / Expenses ratio
An estimated amount of money earned by product or feature divided on spends on it.

*[← back to value](../architecture/#3-we-develop-only-economically-sustainable-products)*
<hr />

## S
### Solution Architect Review
Also known as Architecture Committee. Enterprise & Solution architects meeting. Held by demand. Leader – CTO.

Main tasks: 

* solution architecture problem solving
* escalation place for architecture gaps / technical debt grow
* unblocking issues with technical debt
* solution architecture consulting

*[← back to value](../architecture/#2-we-use-modular-architecture)*
<hr />

## T
### Technology Committee

#### Purpose and members of the Technology Committee
The committee is a community of enterprise architects, technical architects and technical leaders of development teams and IT infrastructure. The main goal of the committee is the selection and recommendations on the use of technologies in Leroy Merlin Russia and increasing the efficiency of use of company resources. Technologies are understood as programming languages, frameworks and libraries, software tools and approaches in the context of specific usage scenarios.

#### Discussed issues and working papers
The main stream of discussion of the committee is built around the selection of technologies that are recommended as the best choice for a specific use case. Currently used technologies are divided into sections: `trial use`, `best choice` and `not recommended for use`. The position of technologies in these sections is an urgent recommendation for choosing when creating new software components. Questions can be raised by committee members or come from outside, like product team requests. An important role of the committee is to discuss technologies for adoption in the `research` section. After discussing the results, a technology can be recommended for use.

The main document of the Committee is Technology Table. The document contains sections specified and a «Decision Records» appendix. The document is open publicly, the appendix – internally.

#### Here are the main influences to select the right technologies:

* Current and future capability to develop and support component in terms of workforce
* Maturity of a technology
* Use case (business logic, system, and middle-level software)
* Specific of using (type of load, sensitivity of data, etc.)
* Licensing policy

#### Decisions taken

Following discussions the next decisions can be made:

* Adoption of technology for research with an understanding of the resources and timing of the process. To make this decision, it is required to have more than 40% positively voted participants.
* Move technology from the research phase to the `trial` section. To make this decision, it is required to have more than 50% positively voted participants.
* Move technology from the phase of `trial` use to the` best choice` section. To make this decision, it is required to have more than 80% positively voted participants.
* Move technology from the `best choice 'section to` not recommended for use'. To make this decision, all existing software components must be analyzed for refactoring and fixing technical debt and the positive decision of more than 90% of the meeting participants.
* Other decisions on changing the composition of the participants and the rules of the Committee are made with a positive decision by more than 50% of the participants.

<abbr data-toggle="tooltip" title="Chief Technology Officer">CTO</abbr>, <abbr data-toggle="tooltip" title="Chief Information Officer">CIO</abbr>, and <abbr data-toggle="tooltip" title="Lead Enterprice Architect">LEA</abbr> have the right to veto all decisions made. All movements in the Table are logged in decision records table with the dates and causes.

#### Frequency of meetings
Meetings are held at least once a month.

*[← back to value](../technology/#3-choice-of-technology-should-be-aligned-with-technology-tablestack)*
