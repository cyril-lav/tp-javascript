const articleTemplate = `<article>
			              <h3 class="title">{{ article.title }}</h3>
			              <button @click="log(article.desc)">View detail</button>
		              </article>`;

const articleComponent = {
    props: ['article'],
    template: articleTemplate,
    methods: {
        log: logMessageWithDate
    }
};
