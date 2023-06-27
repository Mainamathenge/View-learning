Vue.createApp({
  data(){
    return {
      goals:[],
      enteredvalue:''
    };
  },
  methods : {
    addGoal(){
      this.goals.push(this.enteredvalue);
      this.enteredvalue = '';
    }
  }
}).mount('#app');

// const buttonEl = document.querySelector('button');
// const inputEL = document.querySelector('input');
// const listEL = document.querySelector('ul');

// function addGoal(){
//   const enteredValue = inputEL.value;
//   const litsItemEl = document.createElement('li');
//   litsItemEl.textContent = enteredValue;
//   listEL.appendChild(litsItemEl);
//   inputEL.value = '';
// }

// buttonEl.addEventListener('click',addGoal);