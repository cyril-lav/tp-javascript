function deserialize() {
    let newsList = JSON.parse(ALLNEWSJSON);
    newsList.forEach(article => listeArticles.push(new Article(article.titre, article.description, article.id)));
}