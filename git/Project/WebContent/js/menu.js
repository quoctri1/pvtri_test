/**
 * 
 */

function clickTrangchu (){
	window.location = "index.html"
}

function clickButton (){
	window.location = "menu.html"
}

$(document).ready(function(){
	$("#thucuong").click(function(){
		$("#first,.khaivi,.lau,.ca,.oc,.bo,.ech,.de,.heo,.ga").remove();
		var div= document.createElement("div");
		div.innerHTML =
		'<div class="thucuong">'+
			'<div class="row">'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/thucuong/cocacola.png">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/thucuong/heineken.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/thucuong/pepsi.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
			'</div>'+
			'<br><br'+
			'<div class="row">'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/thucuong/stella.jpeg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/thucuong/sting.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/thucuong/tiger.png">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
			'</div>'
		'</div>'
		document.body.appendChild(div);
	});
});


$(document).ready(function(){
	$("#khaivi").click(function(){
		$("#first,.thucuong,.lau,.ca,.oc,.bo,.ech,.de,.heo,.ga").remove();
		var div= document.createElement("div");
		div.innerHTML =
		'<div class="khaivi">'+
			'<div class="row">'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/duduthichga.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/gacuon.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/goithapcam.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
			'</div>'+
			'<br><br'+
			'<div class="row">'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/nom.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/tomtronbo.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/trungmimosa.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
			'</div>'
		'</div>'
		document.body.appendChild(div);
	});
});


$(document).ready(function(){
	$("#lau").click(function(){
		$("#first,.thucuong,.khaivi,.ca,.oc,.bo,.ech,.de,.heo,.ga").remove();
		var div= document.createElement("div");
		div.innerHTML =
		'<div class="lau">'+
			'<div class="row">'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/lau/laucaduoi.png">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/lau/laucakhoai.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/lau/laude.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
			'</div>'+
			'<br><br'+
			'<div class="row">'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/lau/lauhaisan.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/lau/lauheorung.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/lau/laukimchi.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
			'</div>'
		'</div>'
		document.body.appendChild(div);
	});
});

$(document).ready(function(){
	$("#ca").click(function(){
		$("#first,.thucuong,.khaivi,.lau,.oc,.bo,.ech,.de,.heo,.ga").remove();
		var div= document.createElement("div");
		div.innerHTML =
		'<div class="ca">'+
			'<div class="row">'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/duduthichga.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/gacuon.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/goithapcam.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
			'</div>'+
			'<br><br'+
			'<div class="row">'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/nom.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/tomtronbo.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/trungmimosa.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
			'</div>'
		'</div>'
		document.body.appendChild(div);
	});
});

$(document).ready(function(){
	$("#oc").click(function(){
		$("#first,.thucuong,.khaivi,.lau,.ca,.bo,.ech,.de,.heo,.ga").remove();
		var div= document.createElement("div");
		div.innerHTML =
		'<div class="oc">'+
			'<div class="row">'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/duduthichga.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/gacuon.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/goithapcam.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
			'</div>'+
			'<br><br'+
			'<div class="row">'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/nom.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/tomtronbo.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/trungmimosa.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
			'</div>'
		'</div>'
		document.body.appendChild(div);
	});
});

$(document).ready(function(){
	$("#bo").click(function(){
		$("#first,.thucuong,.khaivi,.lau,.ca,.oc,.ech,.de,.heo,.ga").remove();
		var div= document.createElement("div");
		div.innerHTML =
		'<div class="bo">'+
			'<div class="row">'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/duduthichga.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/gacuon.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/goithapcam.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
			'</div>'+
			'<br><br'+
			'<div class="row">'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/nom.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/tomtronbo.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/trungmimosa.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
			'</div>'
		'</div>'
		document.body.appendChild(div);
	});
});

$(document).ready(function(){
	$("#ech").click(function(){
		$("#first,.thucuong,.khaivi,.lau,.ca,.oc,.bo,.de,.heo,.ga").remove();
		var div= document.createElement("div");
		div.innerHTML =
		'<div class="ech">'+
			'<div class="row">'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/duduthichga.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/gacuon.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/goithapcam.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
			'</div>'+
			'<br><br'+
			'<div class="row">'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/nom.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/tomtronbo.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/trungmimosa.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
			'</div>'
		'</div>'
		document.body.appendChild(div);
	});
});

$(document).ready(function(){
	$("#de").click(function(){
		$("#first,.thucuong,.khaivi,.lau,.ca,.oc,.bo,.ech,.heo,.ga").remove();
		var div= document.createElement("div");
		div.innerHTML =
		'<div class="de">'+
			'<div class="row">'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/duduthichga.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/gacuon.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/goithapcam.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
			'</div>'+
			'<br><br'+
			'<div class="row">'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/nom.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/tomtronbo.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/trungmimosa.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
			'</div>'
		'</div>'
		document.body.appendChild(div);
	});
});

$(document).ready(function(){
	$("#heo").click(function(){
		$("#first,.thucuong,.khaivi,.lau,.ca,.oc,.bo,.ech,.de,.ga").remove();
		var div= document.createElement("div");
		div.innerHTML =
		'<div class="heo">'+
			'<div class="row">'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/duduthichga.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/gacuon.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/goithapcam.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
			'</div>'+
			'<br><br'+
			'<div class="row">'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/nom.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/tomtronbo.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/trungmimosa.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
			'</div>'
		'</div>'
		document.body.appendChild(div);
	});
});

$(document).ready(function(){
	$("#ga").click(function(){
		$("#first,.thucuong,.khaivi,.lau,.ca,.oc,.bo,.ech,.de,.heo,.ga").remove();
		var div= document.createElement("div");
		div.innerHTML =
		'<div class="ga">'+
			'<div class="row">'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/duduthichga.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/gacuon.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/goithapcam.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
			'</div>'+
			'<br><br'+
			'<div class="row">'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/nom.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/tomtronbo.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
				'<div class="col-sm-4">'+
					'<a href="#">'+
						'<img class="img" src="img/khaivi/trungmimosa.jpg">'+
						'<figcaption class="figure-caption">A caption for the above image.</figcaption>'+
					'</a>'+
				'</div>'+
			'</div>'
		'</div>'
		document.body.appendChild(div);
	});
});