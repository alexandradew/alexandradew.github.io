document.getElementById("menu").addEventListener("click", function () {
	var nav = document.getElementById("nav-responsive");
	var menu = document.getElementById("menu-hamburguer");
	nav.classList.toggle("hide");

	if(menu.classList.value.includes('fa-bars')){
		menu.classList.remove('fa-bars');
		menu.classList.add('fa-times');
	}else{
		menu.classList.remove('fa-times')
		menu.classList.add('fa-bars');
	}
	
	//console.log(menu.classList.value);
	
});

