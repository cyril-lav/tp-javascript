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