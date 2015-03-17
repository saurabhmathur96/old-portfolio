toggle = function(eId, eClass){
	var elem = document.getElementById(eId);
	elem.classList.toggle(eClass);
};


window.onload = function(){
    
	document.getElementById("nav-toggle").addEventListener("click", function(){
		toggle('main-nav', 'closed'); toggle('nav-toggle', 'active');
	});

	document.getElementById("a").addEventListener("click", function(){
		toggle('main-nav', 'closed'); toggle('nav-toggle', 'active'); 
	});
	document.getElementById("p").addEventListener("click", function(){
		toggle('main-nav', 'closed'); toggle('nav-toggle', 'active');
	});
	document.getElementById("c").addEventListener("click", function(){
		toggle('main-nav', 'closed'); toggle('nav-toggle', 'active');
	});
}
