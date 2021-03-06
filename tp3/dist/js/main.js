iterate();

// JS classique
/* let h1 = document.querySelector('h1');
logMessageWithDate(h1.innerHTML); */

// JS Jquery
let h1 = $('h1');
logMessageWithDate(h1.html());

// JS classique
/* let titleNews = document.querySelector('#titleNews');
logMessageWithDate(titleNews.innerHTML); */

// JS Jquery
let titleNews = $('#titleNews');
logMessageWithDate(titleNews.html());

// JS classique
/* let titles = document.querySelectorAll('.title');
titles.forEach(element => logMessageWithDate(element.innerHTML)); */




// JS Jquery
let titles = $('.title');
titles.each(function () {
	logMessageWithDate($(this).html());
});



// JS classique
/* let button = document.querySelector('input[name="addNewsBtn"]');
bindButton(button); */

// JS Jquery
let button = $('input[name="addNewsBtn"]');
bindButton(button);

// JS classique
/* let buttons = document.querySelectorAll('article button');
buttons.forEach(function(element){
	element.onclick = viewdetailClick;
}); */

// JS Jquery
let buttons = $('article button');
buttons.each(function () {
	$(this).click(function () {
		// viewdetailClick(); // ne fonctionne pas, remplacé par la ligne en dessous
		console.log($(this).parent().find('p').html());
	});
});


let articles = JSON.parse(ALLNEWSJSON);
articles.forEach(function (element) {
	console.log(element);

	let a = new Article(element.id, element.title, element.description);
	a.addArticle();
});

/* // Appel AJAX
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = yyyy + '-' + dd + '-' + mm;

var url = 'http://newsapi.org/v2/everything?q=minecraft&from=' + today + '&sortBy=publishedAt&apiKey=9b4e42c6404c48cab0f04cb200654d6c&pageSize=5';
$.ajax({
	url: url,
	method: 'GET',
	dataType: 'json',
	cors: true,
	contentType: 'application/json',
	secure: true,
	headers: {
		'Access-Control-Allow-Origin': '*',
	},
	beforeSend: function (xhr){
		xhr.setRequestHeader ("Authorization", "Basic" + btoa(""));
	}
})
	.done(function (data, textStatus, xhr) {
		if (xhr.status >= 300 && xhr.status < 400)
			console.log('Attention redirection');

		// log la réponse
		console.log(data);
		console.log(data.headers);
		// pour chaque article contenu dans la réponse AJAX, ajouter un article dans la section #new
		let articles = JSON.parse(data);
		articles.forEach(article => {
			let art = new Article(article.id, article.title, article.description);
			art.createArticleHtml;
		})
	})
	.fail(function (xhr, textStatus, error) {
		console.log(xhr.status);
		console.log(textStatus);
		throw new Error(error);
	}); */