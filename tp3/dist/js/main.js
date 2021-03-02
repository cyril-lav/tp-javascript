iterate();

let h1 = document.querySelector('h1');
logMessageWithDate(h1.innerHTML);

let titleNews = document.querySelector('#titleNews');
logMessageWithDate(titleNews.innerHTML);

let titles = document.querySelectorAll('.title');
titles.forEach(element => logMessageWithDate(element.innerHTML));

let button = document.querySelector('input[name="addNewsBtn"]');
bindButton(button);

let buttons = document.querySelectorAll('article button');
buttons.forEach(function(element){
	element.onclick = viewdetailClick;
});

let articles = JSON.parse(ALLNEWSJSON);
articles.forEach(function(element){
	console.log(element);

	let a = new Article(element.id, element.title, element.description);
	a.addArticle();
});