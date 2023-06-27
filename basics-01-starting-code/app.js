const app = Vue.createApp({
  data(){
    return {
      courseGoal: 'Finish the cousrse and learn view !',
      courseGoalB: 'Learn vue and build Awesome staff',
      vueLink:'https://vuejs.org/'
    };
  },
  methods:{
    outputGoal(){
      const randonNumber = Math.random();
      if(randonNumber < 0.5 ){
        return this.courseGoal;
      } else {
        return this.courseGoalB;
      }
    },a
  }
});

app.mount("#user-goal");