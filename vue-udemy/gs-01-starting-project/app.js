/* Vue: Declerative approach... declare result instead of steps gettting there */

Vue.createApp({
    // we passing an object to createApp (indicated by the  {})
    data() {
        // property named data that has a function as a value. Same as data: function() {}
        return {
            goals: [],
            enteredValue: '',
        };
    },
    methods: {
        // in the value-objectb we can define funcritons, available in htmSl
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        },
    },
}).mount('#app');

/* Vanilla js: imperative aproach - step by step appreach  */

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// buttonEl.addEventListener('click', addGoal)  // only point top function, its executed on click

// function addGoal() {
//     const enteredValue = inputEl.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = enteredValue;

//     listEl.appendChild(listItemEl);
//     inputEl.value = '';
// }
