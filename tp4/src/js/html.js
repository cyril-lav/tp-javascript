function bindButton(button){
	button.onclick = function(e){
		e.preventDefault();
    	let champ = document.querySelector('input[name="titleToAdd"]');
		addArticle(champ.value);

		return false;
	}
}