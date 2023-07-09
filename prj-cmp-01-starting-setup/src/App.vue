<template>
  <ul>
    <the-header title="My Vue Project"></the-header>
    <the-resource></the-resource>
  </ul>
</template>

<script>
//import LearningResources from './components/learning-resources/LearningResourceItem.vue';
//import StoredResources from './components/learning-resources/StoredResources.vue'
import TheHeader from './components/Layouts/TheHeader.vue';
import TheResource from './components/learning-resources/TheResource.vue';
export default {
  components: {
    TheResource,
    TheHeader,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
