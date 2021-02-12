function createArticleHtml(title) {
    let newArticle = document.createElement('article');
    let h3 = document.createElement('h3');
    let news = document.querySelector('#news');
    h3.innerHTML = title;
    h3.classList.add('title');
    newArticle.append(h3);
    news.append(newArticle);
}

function checkArticleUnicity(title) {
    let h3s = document.querySelectorAll('.title');

    for (let i = 0; i < h3s.length; i++) {
        if (h3s[i].innerHTML.toLowerCase().trim() === title.toLowerCase().trim()) {
            let form = document.querySelector('#addNewsForm');
            addError('Erreur article deja existant', form);

            return false;
        }  
    }

    return true;
}

function addArticle(title) {
    clearErrors();

    if (!checkArticleUnicity(title)) {
        return false;
    }
    
    createArticleHtml(title);
    return true;
}