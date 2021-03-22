const News = {
    data() {
        let articles = JSON.parse(articlesJson);

        return {
            articles: articles,
        };
    }
};

Vue.createApp(News).component('article-news', articleComponent).mount('#news');

const Click = {
    data() {
        return {
            counter: 0
        };
    },
    methods: {
        increment() {
            this.counter++;
            console.log(this.counter);
        }
    }
};
Vue.createApp(Click).mount('#click');