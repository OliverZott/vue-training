const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            confirmedName: '',
        };
    },
    methods: {
        increment(val) {
            this.counter = this.counter + val;
        },
        decrement(val) {
            this.counter = this.counter - val;
        },
        setName(event, lastName) {
            this.name = event.target.value + ' ' + lastName;
        },
        submitForm(event) {
            // event.preventDefault();
            alert("Submitted");
        },
        confirmInput() {
            this.confirmedName = this.name;
        }
    }
});

app.mount('#events');
