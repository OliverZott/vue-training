const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            lastName: '',
            fullNameData: '',
        };
    },
    methods: {
        setName(event, lastName) {
            this.name = event.target.value;
        },
        // Functions for outputs not recommanded, because might get called a lot if other data property changes!
        resetName() {
            this.name = '';
        },
        outputFullName() {
            console.log("wtf fullname function");
            if (this.name === '') return '';
            return this.name + ' ' + "Zott";
        },
        add(num) {
            console.log("wtf add");
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
            // this.counter--;
        }
    },
    // Technically these are methods, but it's used like data properties
    computed: {
        fullName() {
            console.log("wtf fullname property");
            if (this.name === '' || this.lastName === '') return '';
            return this.name + ' ' + this.lastName;
        },

        // bad use of computed property (even naming is stupid)
        resettedCounter() {
            if (this.counter > 20) {
                this.counter = 0;
            }
            return this.counter;
        }
    },
    watch: {
        // whenever name data property above changes, this watcher is called

        // bad use of watcher: (see computed property version)
        name(value) {  // value is always the last value of the watched object!!
            console.log("wtf name watcher");
            if (value === '') return '';
            this.fullNameData = value + ' ' + this.lastName;
        },
        lastName(value) {  // value is always the last value of the watched object!!
            console.log("wtf fullname watcher");
            if (value === '') return '';
            this.fullNameData = this.name + ' ' + value;
        },

        // good use of watcher
        counter(value) {
            if (value > 50) {
                this.counter = 0;
            };
        }
    },
});

app.mount('#events');
