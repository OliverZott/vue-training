const app = Vue.createApp({
    data() {
        return {
            name: 'Olli',
            age: 41,
            sharkPic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzzcPg7EHMZLmFZpRwUEL2ibU-bzmZRahQbQ&s',
        };
    },
    methods: {
        rng() {
            return Math.random();
        },
        agePlusInt(offset) {
            return this.age + offset;
        },
    },
});

app.mount('#assignment');
