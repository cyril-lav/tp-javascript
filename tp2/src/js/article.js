class Article {
    id;
    titre;
    description;

    /* constructor(titre, description) {
        let nbArticle = document.querySelectorAll('article').length;
        this.id = 'article' + nbArticle + 1;
        this.titre = (titre);
        this.description = (description);
    } */

    constructor(titre, description, id) {
        this.id = id
        this.titre = (titre);
        this.description = (description);
    }

    createArticleHtml() {
        let newArticle = document.createElement('article');

        // compléter article avec un id numérique unique :
        newArticle.id = this.id;

        let h3 = document.createElement('h3');
        h3.innerHTML = this.titre;
        h3.classList.add('title');
        newArticle.append(h3);

        let p = document.createElement('p');
        p.innerHTML = this.description;
        newArticle.append(p);

        let detailButton = document.createElement('button');
        let detailButtonLabel = document.createElement('label');
        detailButtonLabel.innerHTML = 'View detail';
        detailButton.append(detailButtonLabel);
        bindViewDetailButton(detailButtonLabel);
        newArticle.append(detailButton);

        let news = document.querySelector('#news');
        news.append(newArticle);
    }

}

function addArticle(titre, description) {
    clearErrors();

    if (!checkArticleUnicity(titre)) {
        return false;
    }

    let nbArticle = document.querySelectorAll('article').length;
    let idArticle = 'article' + nbArticle + 1;
    listeArticles.push(new Article(titre, description, idArticle));
    listeArticles[listeArticles.length - 1].createArticleHtml();
    return true;
}

function checkArticleUnicity(titre) {
    let h3s = document.querySelectorAll('.title');

    for (let i = 0; i < h3s.length; i++) {
        if (h3s[i].innerHTML.toLowerCase().trim() === titre.toLowerCase().trim()) {
            let form = document.querySelector('#addNewsForm');
            addError('Erreur article deja existant', form);

            return false;
        }
    }

    return true;
}


