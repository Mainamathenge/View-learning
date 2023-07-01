const app = Vue.createApp({
  data() {
    return {
      detailsarevisible: false,
      friends: [
        {
          id: "Manuel",
          name: "Manuel Rodriges",
          phone: "0334736493299",
          email: "manuel@localhos.com",
        },
        {
          id: "Julie",
          name: "Julie Jones",
          phone: "0334736493299",
          email: "Julie@localhos.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
          <li v-for="friend in friends" :key="friend.id">
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails()">{{detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
          <ul>
            <li><strong>Phone:</strong> {{friend.Phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
        </li>
  `,
  data() {
    return {
      detailsarevisible: false,
      friend: {
        id: "Julie",
        name: "Julie Jones",
        phone: "0334736493299",
        email: "Julie@localhos.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsarevisible = !this.detailsarevisible;
    },
  },
});

app.mount("#app");
