<template>
  <header><h1>My friends</h1></header>
  <ul>
    <friend-contact></friend-contact>
    <friend-contact></friend-contact>
  </ul>
</template>
<script>
import FriendContact from './components/FriendContact.vue';
export default {
  components: { FriendContact },
  data() {
    return {
          friends: [
      {
        id: "Manuel",
        name: "Manuel Lorenz",
        phone: "097369379",
        email: "manuel@localost.com",
      },
      {
        id: "Joelin",
        name: "joelin Wangai",
        phone: "097369379",
        email: "joelin@localost.com",
      },
    ],
    }

  },
};
</script>
