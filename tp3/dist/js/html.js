function bindButton(button){
	button.onclick = function(event){
		event.preventDefault();
        // JS classique
    	// let title = document.querySelector('input[name="titleToAdd"]');
        // let description = document.querySelector('textarea[name="descriptionToAdd"]');
		
        // JS Jquery
        let title = $('input[name="titleToAdd"]');
        let description = $('textarea[name="descriptionToAdd"]');

        let article = new Article(0, title.value, description.value);
		if(article.addArticle()){
			// JS classique
            // title.value = '';
            // description.value = '';

            // JS Jquery
            title.val('');
            description.val('');
        }

		return false;
	};
}

function clearErrors(){
    // JS classique
	// let errors = document.querySelectorAll('.error');

    // JS Jquery
    let errors = $('.error');

    if(errors){
        while(errors.length > 0 && errors[0].parentNode != null){
            errors[0].parentNode.removeChild(errors[0]);
        }        
    }
}

function addError(message, parent){
    // JS classique
	// let error = document.createElement('p');
    // error.innerHTML = message;
    // error.style.color = ROUGE;
    // error.classList.add('error');

    // JS Jquery
    let error = $('<p></p>')
    error.html(message);
    error.css('color', ROUGE);
    error.addClass('error');

    parent.prepend(error);
}

function viewdetailClick(){
    // let p = this.parentNode.querySelector('p');
    // logMessageWithDate(p.innerHTML);
    // let p = $(this);
    // logMessageWithDate(p.text());
    console.log($(this).parent().find('p').html());
}