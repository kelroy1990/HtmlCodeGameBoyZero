function renderPage(){
	renderNav();
	renderArticles();
	$('.carousel').carousel()
}

function renderNav(){
	var nav = $('<nav class="navbar navbar-expand-lg navbar-light bg-light" />');
	nav.append($('<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">')
		.append('<span class="navbar-toggler-icon"></span>'));
	var menu = $('<div class="collapse navbar-collapse" id="navbarSupportedContent">');
	var ul = $('<ul class="navbar-nav mr-auto" />');
	ul.append($('<li class="nav-item active" />')
		.append('<a class="nav-link" href="//keltech.es">Home <span class="sr-only">(current)</span></a>'));
	ul.append($('<li class="nav-item" />')
		.append('<a class="nav-link" href="//portal.keltech.es/admin">Admin</a>'));
	ul.append($('<li class="nav-item dropdown" />')
		.append('<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Secciones</a>')
		.append($('<div class="dropdown-menu" aria-labelledby="navbarDropdown" />')
			.append('<a class="dropdown-item" href="//foro.keltech.es">Foro</a>')
			.append('<a class="dropdown-item" href="//wiki.keltech.es">Wiki</a>')
			.append('<div class="dropdown-divider"></div>')
			.append('<a class="dropdown-item" href="https://t.me/GameBoyZero_esp">Grupo de Telegram</a>')
		)
	);
	menu.append(ul);
	var form = $('<form class="form-inline my-2 my-lg-0" />');
	form.append('<input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Buscar"></input>');
	form.append('<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>');
	//menu.append(form);
	nav.append(menu);
	nav.append(form);
	$("div#navigation").append(nav);
}

function renderArticles(){
	var row = $('<div class="row" />');
	for(var i=0;i<10;i++){
		var content = [];
		content.push('Todo el contenido que se puede generar en esta página va aquí');
		content.push('Pronto todo será generado gracias al poder del opensource');
		row.append(getArticle('Ejemplo '+i,content));
	}
	$("div#container").append(row);
}

function getArticle(title,content){
	var article = $('<div class="col-sm-4" />');
	article.append('<h3>'+title+'</h3>')
	for(var i=0;i<content.length;i++){
		article.append('<p>'+content[i]+'</p>');
	}
	return article;
}
