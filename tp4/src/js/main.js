let h1 = $('h1');

if(h1 === undefined || h1.length === 0)
{
	throw new Error('Nombre de H1 trouvés faux !');
}

if( h1.length > 1)
{
	let lastH1 = $('h1:last');
	lastH1.remove();
}

console.log(h1);
console.log(h1.html());

console.log(h1.attr('class')); //get
console.log(h1.attr('data-test')); //get --> h1.data('test')

console.log(h1.attr('class', 'update').attr('data-test', 'false').html('TP4 JS')); //set

console.log(h1.attr('class')); //get
console.log(h1.attr('data-test')); //get

let input = $('input[name="titleToAdd"]');
console.log(input.attr('value')); //get
console.log(input.val()); //get

let element = $('<span></span>');
element.html('test');

h1.append(element);

$.ajax({ 
	url: "https://httpbin.org/get",
	method: 'GET'
})
.done(function(data, textStatus, xhr) {
	if(xhr.status >= 300 && xhr.status < 400)
		console.log('Attention redirection');

	console.log(xhr);
	console.log(xhr.status);
	console.log(textStatus);
	console.log(data); //JSON
	console.log(data.headers); //JSON
})
.fail(function(xhr, textStatus, error) {
	console.log(xhr.status);
	console.log(textStatus);
	throw new Error(error);
});