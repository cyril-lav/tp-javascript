iterate();

let h1 = document.querySelector('h1');
logMessageWithDate(h1.innerHTML);

let titleNews = document.querySelector('#titleNews');
logMessageWithDate(titleNews.innerHTML);

let titles = document.querySelectorAll('.title');
titles.forEach(element => logMessageWithDate(element.innerHTML));

let button = document.querySelector('input[name="addNewsBtn"]');
bindButton(button);

// Pour chaque bouton associé à un article il faut, au clic, récupérer la description de l'article et le log
let viewDetailButtons = document.querySelectorAll('button > label');
viewDetailButtons.forEach(button => bindViewDetailButton(button));

var listeArticles = [];
deserialize();

listeArticles.forEach(article => article.createArticleHtml());