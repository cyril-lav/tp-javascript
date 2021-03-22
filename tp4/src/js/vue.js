const News = {
    data() {
        let articles = JSON.parse(articlesJson);

        return {
            articles: articles,
        };
    }
};

Vue.createApp(News).component('article-news', articleComponent).mount('#news');
