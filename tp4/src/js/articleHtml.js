function createArticle(title) {
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
            let error = document.createElement('p');
            error.innerHTML = 'Erreur article deja existant';
            error.style.color = rouge;
            error.classList.add('error');

            let form = document.querySelector('#addNewsForm');
            form.prepend(error);

            return false;
        }  
    }

    return true;
}

function addArticle(title) {
    let errors = document.querySelectorAll('.error');

    if(errors){
        while(errors.length > 0){
            errors[0].parentNode.removeChild(errors[0]);
        }        
    }

    if (!checkArticleUnicity(title)) {
        return;
    }
    
    createArticle(title);
}