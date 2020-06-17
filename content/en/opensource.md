---
title: "Open Source"
linkTitle: "Open Source"

simple_list: true
type: docs
weight: 27
menu:
  main:
    weight: 27
---

We actively use open source solutions created and supported by enthusiasts from around the world.
We want to not only use but to return the contribution and participate in the development
of Open source products and the community. 

Here is the instruction for the teams what to do in order to open up the project.

## Three steps to Open source your code

{{< blocks/section color="white" >}}
{{% blocks/feature icon="fa-dice-one" title="Step 1" %}}
Check compliance of attribution and license information
{{% /blocks/feature %}}

{{% blocks/feature icon="fa-dice-two" title="Step 2" %}}
Check the project originality
{{% /blocks/feature %}}

{{% blocks/feature icon="fa-dice-three" title="Step 3" %}}
Check compatibility of third-party dependencies
{{% /blocks/feature %}}
{{< /blocks/section >}}

### Step 1. Check compliance of attribution and license information.

The project should have a list of members for the project. Each member should have:

* Identity – Pavel Griboedov
* Company — Leroy Merlin
* Contact email – pavel.griboedov@leroymerlin.ru

Involving trainee or temp workers in the open sourcing internal projects or 
in contributing to third-party projects is strictly prohibited.

When an external company writes code for us then this fact should be mentioned and we should have a proper contract. 

#### License information
* Each code file should have copyright notice on the top.

```
/*
 * Copyright 2020 LLC Leroy Merlin Vostok.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package ru.leroymerlin.delivery.tariff.convert;
```

* `README.md` should mention the license used.

```
## License

This repository is released under version 2.0 of the 
[Apache License](https://www.apache.org/licenses/LICENSE-2.0).
```

* `LICENSE.md` in the root should have [complete text](https://www.apache.org/licenses/LICENSE-2.0.txt) of the license.

### Step 2. Check the project originality.

Originality is an important legal concept. We can enforce legal rights only if the code is *original*. 
In practice, originality stems from the ability to identify *design decisions* in the source code.

{{< alert color="success" title="Design Decision" >}}
Personal intellectual contribution of the developer demonstrating that another developer would have solved
the technical issue in a different manner.

![Design Decision Example](../images/design_decision.jpg)
{{< /alert >}}

{{< alert color="danger" title="Not a Design Decision" >}}
Automatically generated code or the code which can only be written in a single manner.

![Not A Design Decision Example](../images/not_design_decision.jpg)
{{< /alert >}}

### Step 3. Check compatibility of third-party dependencies.

Third-party component licenses may force to use a particular license for the whole project.
It is mandatory to check license compatibility between components and between component and project license.

| Third Party License Type                                                         | Examples             | Actions Required                                                            |
|----------------------------------------------------------------------------------|----------------------|-----------------------------------------------------------------------------|
| **Permissive**                                                                   | `Apache` `BSD` `MIT` | None                                                                        |
| **Copyleft**                                                                     | `GPL` `LGPL`         | <abbr data-toggle="tooltip" title="Ensure that its intial license allows its redistribution under the licence selected by the project or alongside the other third-party components governed by a possibly different license.">Check compatibility</abbr>|
| **Unidentified**                                                                 |                      | Delete or replace component                                                 |
| **Proprietary**                                                                  | `Commercial`         | Delete or replace component                                                 |
| **Requires accepting another agreement**<br /> alongside the open source license | `CLA` `CAA`          | Accept the agreement <br />or delete or replace component |


## All Steps Have Been Passed
Congratulations! You may open source the project. <i class="fa fa-glass-cheers"></i>

For doing that you need to announce your willing at the CI/CD slack channel 
and let your colleagues add the repository to the allowlist of `prevent-public-repos` script.

After that, you can make repository public in the settings of the repository.