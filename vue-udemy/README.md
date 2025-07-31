# Remarks

## Basics 1

- generate Vue object to control id-selected parts of html
- interpolation syntax: `{{ variable }}`
- vue drectives:
  - `v-bind:attribute="variable"` (binds variable to attribute) or `:attribute=`
  - `v-html="outputGoalNew()"` (binds variable to html content)
- [Summary #1](https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463156#overview)

## Basics 3 - events

- events:
  - `event.target.value`
  - `v-on:input="setName($event, 'Doe')`
- event modifier
  - `event.preventDefault()` ...to prevent reloading in form submitting e.g.
  - `v-on:submit.prevent` or `@submit`
  - `v-on:click.right` or `@click`
  - `v-on:keyup.enter` or `@keyup`

## Basics 5 - native event object / computed properties

- Two-way binding: `v-model="name"` is shortcut for `v-bind:value="name" v-on:input="setName"`
- **Computed Properties**
  - used if: calculate output value dynamically
  - dont use methods for output (see consoloe output) because methods in outputs are always called, if ANYTHING changes
  - `computed: { myProp() {...} }` and use like `{{ myProp }}` dont call!
  - good use if finding name is easy (e.g. FullName)
- **watchers**
  - used if: want to execute code, if something changes!
  - e.g. good for http requests if data changes
- [Summary watchers-methods-computedProperties](https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463202#overview)
