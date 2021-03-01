# klickpages-header

A Vue component for klick applications to get the klickpages header.

## Install

``` npm install @klicksite/klickpages-header ```

>In this library we use npm to install depencies and build the package. Don't use yarn.

## Example

Klickpages-header component depends on your application having a configured vuex store.

```js 
//main.js

import Vue from 'vue';
import App from './App.vue';
import KlickpagesHeader from 'klickpages-header';
import store from './store';

Vue.use(KlickpagesHeader, { store });

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');

```

```html
<!-- App.vue -->

<template>
  <div>
    <klickpages-header :klickartUrl=""/>
    <router-view />
  </div>
</template>

<script>

export default {};
</script>

```

## Documentation

| prop        | description                                 | required | default |
|-------------|-------------------------------------------  |----------|---------|
| klickartURL | klickart url according to the environment   | yes      | null    |
| jwtSecret   | secret shared with klickart                 | yes      | null    |
| hotmartURL  | hotmart-pro url according to the environment| yes      | url*    |

* url hotmart for development/staging/test & production must be provided by hotmart.

## Guide for developers

Acess the developer-guide:
 [Developer-guide](./developer-guide.md)
