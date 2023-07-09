<template>
  <ul>
    <learning-resources
      v-for="res in storedResources"
      :key="res.id"
      :title="res.id"
      :description="res.description"
      :link="res.link"
    ></learning-resources>
  </ul>
</template>

<script>
import LearningResources from './components/learning-resources/LearningResourceItem.vue';

export default {
  components: {
    LearningResources,
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'learning - vue JS',
          description: 'the official docmunentation',
          link: 'http://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'learn to google',
          link: 'https://google.com',
        },
      ],
    };
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
