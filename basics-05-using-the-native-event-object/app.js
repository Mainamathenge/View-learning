const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      //fullname: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this
        setTimeout(function () {
          this.counter = 0;
        },2000);
      }
    },
    // name(value) {
    //   this.fullname = value;
    //   if (this.name === "") {
    //     return (this.fullname = "");
    //   }
    //   return (this.fullname = value + " " + "Maina");
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = this.name + " " + value;
    //   }
    // },
  },
  computed: {
    fullname() {
      console.log("Executed Once!!");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    // outputFullname() {
    //   console.lo;
    //   if (this.name === "") {
    //     return "";
    //   }
    //   return this.name + " " + "Maina";
    // },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = "";
      this.lastName = "";
    },
  },
});

app.mount("#events");
