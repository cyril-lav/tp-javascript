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

/* JS equivalent
h1 = document.querySelector('h1');
console.log(h1.innerHTML); //pour chercher son équivalent en JQuery innerhtml jquery equivalent api.jquery.com
*/

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
//let element = document.createElement('span');
//$(element).html('test').attr('data-test', true);
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

/*
$.get({ url: "https://httpbin.org/get" })
.done(function(data, textStatus, xhr) {
	console.log(xhr.status);
	console.log(textStatus);
	console.log(data.headers); //JSON
})
.fail(function(xhr, textStatus, error) {
	console.log(xhr.status);
	console.log(textStatus);
	console.log(error);
});
*/

/* //Cours 3
console.log(articlesJson);

let articles = JSON.parse(articlesJson); //converti une chaine de caractères en objet (Object)
console.log(articles);

articles.forEach(element => console.log(element.desc)); //on accède aux clé comme des propriétés

let articlesString = JSON.stringify(articles); //converti un objet en chaine de caractères
console.log(articlesString);

let human = new Human('Alex');
human.talk().howHold(); //grâce aux méthodes fluent on peut enchainer les appels de méthodes
console.log(human);

let humanString = JSON.stringify(human);
console.log(humanString);
*/

/* //Cours 2
iterate();

let h1 = document.querySelector('h1');
logMessageWithDate(h1.innerHTML);

let titleNews = document.querySelector('#titleNews');
logMessageWithDate(titleNews.innerHTML);

let titles = document.querySelectorAll('.title');
titles.forEach(element => logMessageWithDate(element.innerHTML));

let button = document.querySelector('input[name="addNewsBtn"]');
bindButton(button);
*/