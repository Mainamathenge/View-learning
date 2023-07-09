<template>
  <div>
    <the-header></the-header>
    <!-- <TheHeader /> -->
    <button @click="setSelectedComponents('active-goals')">Active Goals</button>
    <button @click="setSelectedComponents('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selectedComponents === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponents === 'manage-goals'"></manage-goals> -->
    <component :is="selectedComponent"></component>

  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
// import CourseGoals from "./components/CourseGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue"

export default {
  components: {
    TheHeader,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComponent:'active-goals',
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods:{
    setSelectedComponents(cmp){
      this.selectedComponent = cmp ;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
