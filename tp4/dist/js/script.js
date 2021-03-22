class Human {
  name = 'toto';
  age = 18;

  constructor(name) {
    this.name = name;
  }

  talk(){
    console.log('My name is ' + this.name);

    return this;
  }

  howHold(){
    console.log('My age is ' + this.age);

    return this;
  }
}
class Article {
    id;
    title;
    description;

    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }

    createArticleHtml() {
        let newArticle = $('<article></article>');
        let h3 = $('<h3></h3>');
        let p = $('<p></p>');
        let button = $('<button></button>');
        let news = $('#news');

        h3.html(this.title);
        p.html(this.description);
        button.html('View detail');
        this.bindButtonViewdetail(button, viewdetailClick);
        h3.addClass('title');
        newArticle.attr('id', this.id);

        newArticle.append(h3);
        newArticle.append(p);
        newArticle.append(button);
        news.append(newArticle);
    }

    checkArticleUnicity() {
        let h3s = $('.title');

        for (let i = 0; i < h3s.length; i++) {
            if ($(h3s[i]).html().toLowerCase().trim() === this.title.toLowerCase().trim()) {
                throw new Error('Erreur article deja existant');
            }
        }
    }

    checkValue() {
        if (this.title === '') {
            throw new Error('Title vide');
        }

        if (this.description === '') {
            throw new Error('Description vide');
        }
    }

    addArticle() {
        clearErrors();

        try {
            this.checkValue();
            this.checkArticleUnicity()
        } catch (error) {
            addError(error.message, $('#addNewsForm'));
            return false;
        }

        this.createArticleHtml();
        return true;
    }

    bindButtonViewdetail(button, callback) {
        button.click(callback);
    }

    static getNextId() {
        let article = $('article:last');

        if (article.length == 0)
            return 1;

        return article.attr('id') + 1;
    }
}
const ROUGE = '#FF0000';
const BLEU = '#0000FF';
const VERT = '#008000';

const articlesJson = `[ 
						{"title": "News 1", "desc": "Super news 1"},
						{"title": "News 2", "desc": "Super news 2"}
				     ]`;


function bindButton(button){
	button.onclick = function(e){
		e.preventDefault();
    	let champ = document.querySelector('input[name="titleToAdd"]');
		addArticle(champ.value);

		return false;
	}
}
function logMessageWithDate(message){
	let today = new Date();
	console.log(today.toLocaleString() + ' : ' + message );
}
let h1 = $('h1');

if(h1 === undefined || h1.length === 0)
{
	throw new Error('Nombre de H1 trouvés faux !');
}

if( h1.length > 1)
{
	let lastH1 = $('h1:last');
	lastH1.remove();
}

console.log(h1);
console.log(h1.html());

console.log(h1.attr('class')); //get
console.log(h1.attr('data-test')); //get --> h1.data('test')

console.log(h1.attr('class', 'update').attr('data-test', 'false').html('TP4 JS')); //set

console.log(h1.attr('class')); //get
console.log(h1.attr('data-test')); //get

let input = $('input[name="titleToAdd"]');
console.log(input.attr('value')); //get
console.log(input.val()); //get

let element = $('<span></span>');
element.html('test');

h1.append(element);

$.ajax({ 
	url: "https://httpbin.org/get",
	method: 'GET'
})
.done(function(data, textStatus, xhr) {
	if(xhr.status >= 300 && xhr.status < 400)
		console.log('Attention redirection');

	console.log(xhr);
	console.log(xhr.status);
	console.log(textStatus);
	console.log(data); //JSON
	console.log(data.headers); //JSON
})
.fail(function(xhr, textStatus, error) {
	console.log(xhr.status);
	console.log(textStatus);
	throw new Error(error);
});
function iterate(){
	for (let i = 0; i < 5; i++) {
		logMessageWithDate(i);
		
		if (i === 0) 
			logMessageWithDate(vert); 
		else if (i % 2 === 0) 
			logMessageWithDate(rouge); 
		else 
			logMessageWithDate(bleu); 
	}
}
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

const News = {
    data() {
        let articles = JSON.parse(articlesJson);

        return {
            articles: articles,
        };
    }
};

Vue.createApp(News).component('article-news', articleComponent).mount('#news');
