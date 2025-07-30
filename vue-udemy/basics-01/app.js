const app = Vue.createApp({
    // property named data that has a function as a value. Same as data: function() {} ...  This functions returns an object!
    data() {
        return {
            // returned properties are available in html (vue scans html for specific syntax)
            courseGoal: 'Finish the course to...',
            courseGoalA: '... Learn Vue :)',
            courseGoalB: '... <u>Master</u> Vue =)',
            vueLink: 'https://vuejs.org/guide/introduction.html#pick-your-learning-path',
        };
    },
    // methods allow to define functions. data itself was a function, but methods takes an object, thats full of methods
    methods: {
        // classic function definition instead of shorthand from above
        outputGoal: function () {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 'Learn Vue :)';
            } else {
                return this.courseGoalB;
            }
        },
        outputGoalNew() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA; // data from above is put in global js property
            } else {
                return this.courseGoalB;
            }
        },
        isFalsy(input) {
            return input ? 'not Falsy' : 'Falsy';
        },
    },
});

app.mount('#user-goal');
