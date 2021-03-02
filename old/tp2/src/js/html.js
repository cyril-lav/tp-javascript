function bindButton(button){
	button.onclick = function(event){
		event.preventDefault();
    	let champ = document.querySelector('input[name="titleToAdd"]');
        let description = document.querySelector('input[name="descriptionToAdd"]');
		if(addArticle(champ.value, description.value))
			champ.value = '';

		return false;
	}
}

function clearErrors(){
	let errors = document.querySelectorAll('.error');

    if(errors){
        while(errors.length > 0 && errors[0].parentNode != null){
            errors[0].parentNode.removeChild(errors[0]);
        }        
    }
}

function addError(message, parent){
	let error = document.createElement('p');
    error.innerHTML = message;
    error.style.color = ROUGE;
    error.classList.add('error');

    parent.prepend(error);
}

function bindViewDetailButton(button)
{
    button.onclick = viewDetailButtonClic;
}

function viewDetailButtonClic() {
    let description = this.parentElement.parentElement.querySelector('p');
    console.log(description.innerHTML);
}