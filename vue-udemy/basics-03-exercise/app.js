const app = Vue.createApp({
    data() {
        return {
            myInput: '',
            confirmedInput: '',
        }
    },
    methods: {
        showAlert() {
            alert("Hello from alert :)")
        },
        setInput(event) {
            this.myInput = event.target.value;
        },
        confirmInput(event) {
            this.confirmedInput = event.target.value;
        },
    }
});

app.mount('#assignment');