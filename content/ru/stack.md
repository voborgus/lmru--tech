---
title: "Стек технологий"
linkTitle: "Стек технологий"

type: docs
weight: 25
menu:
  main:
    weight: 25
---

Мы не используем подход с моностеком. Благодаря обширному стеку технологий мы выбираем подходящий инструмент для конкретной задачи, не застываем в прошлом, наращиваем экспертизу и не привязываемся к определённому вендору или технологии.

### Что влияет на выбор

* Текущий и потенциальный рынок специалистов
* Зрелость технологии
* Тип компонента (бизнес логика, система, миддл)
* Архитектурные паттерны
* Паттерны разработки
* Специфика использования (характер нагрузки, параметры безопасности, и т.д.)
* Политика лицензирования


### Жизненный цикл стека
Мы периодически обновляем таблицу технологий на собраниях под названием «Technology Committee», выбираем технологии, которые будем пробовать. Если всё идёт пучком, то технология рано или поздно перейдёт в колонку `best choice`.

### История изменений
<iframe width="100%" height="300" style="border: 0" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTeRBTa00sImYA3UEP1nepoMnhvTuOzj688vDl4940l5U6EIQIkGpYB-ere2EKs4z6B9CfETZjVeyCd/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>

### Таблица технологий
Для облегчения выбора предлагается таблица, в которой есть колонки `area` — сфера применения и `use case` — как именно используем. Например, выставляем CRUD API, выбираем [BFF](https://developer.ibm.com/technologies/microservices/patterns/create-backend-for-frontend-application-architecture/) или запиливаем оркестратор. Для каждого кейса использования подобрана технология – язык, фреймворк или продукт, и наше отношение к ней: 

* `best choice` — круто, надо брать
* `trial stage` – обкатывается в лимитированной версии на проде
* `research` – пробуем играться, пока не понятно
* `hold` — пробовали, наигрались, хватит

<iframe width="100%" height="800" style="border: 0" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTu7RaWazV0jjyiGpdBzIFo-QlCrYRUi4gPOA07NfT3sWzabiZm7Svy5NbQ7erwOJGaMrz1hVTSZx6d/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>