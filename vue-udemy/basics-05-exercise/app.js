const app = Vue.createApp({
    data() {
        return {
            temp: 0,      // const temp = ref(0)
        }
    },
    methods: {
        addNumber(val) {
            this.temp = this.temp + val;
        },
    },
    computed: {
        result() {              // const result = computed(() => {...}
            if (this.temp < 37) {
                return "Not there yet";
            } else if (this.temp > 37) {
                return "Too much";
            } else {
                return this.temp;
            }
        }
    },
    watch: {                    // watch(temp, (v) => {...})
        result(value) {

            // setTimeout(() => this.temp = 0, 5000);  // function declaration uses global scope, not my vue scope

            const that = this;
            setTimeout(function () {
                console.log("inside setTimeout")
                that.temp = 20;
            }, 5000)
        }
    }
});

app.mount('#assignment')