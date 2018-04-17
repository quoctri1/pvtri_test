/**
 * 
 */

function change(select){
	var index1=select.selectedIndex;
	var value1=select.options[index1].text;
	var output=document.getElementById("output");
	
	if(value1 == 'Ngay'){
		output.innerHTML='<div class="table1">'+
		'<table class="table">'+
			'<thead>'+
				'<tr>'+
					'<th>STT</th>'+
					'<th>Ho Ten</th>'+
					'<th>Ca 1</th>'+
					'<th>Ca 2</th>'+
					'<th>Ca 3</th>'+
					'<th>Ca 4</th>'+
				'</tr>'+
			'</thead>'+
			'<tbody>'+
				'<tr>'+
					'<th>1</th>'+
					'<th>Phan Quoc Tri</th>'+
					'<th>X</th>'+
					'<th></th>'+
					'<th>X</th>'+
					'<th></th>'+
				'</tr>'+
				'<tr>'+
					'<th>2</th>'+
					'<th>Danh Khuong Duy</th>'+
					'<th></th>'+
					'<th>X</th>'+
					'<th>X</th>'+
					'<th></th>'+
				'</tr>'+
				'<tr>'+
					'<th>3</th>'+
					'<th>Nguyen Nhut Tan</th>'+
					'<th></th>'+
					'<th></th>'+
					'<th>X</th>'+
					'<th>X</th>'+
				'</tr>'+
			'</tbody>'+
		'</table>'+
	'</div>';
	}
	if(value1 == 'Tuan'){
		output.innerHTML='<div class="table1">'+
		'<table class="table">'+
			'<thead>'+
				'<tr>'+
					'<th>STT</th>'+
					'<th>Ho Ten</th>'+
					'<th>Thu 2</th>'+
					'<th>Thu 3</th>'+
					'<th>Thu 4</th>'+
					'<th>Thu 5</th>'+
					'<th>Thu 6</th>'+
					'<th>Thu 7</th>'+
					'<th>Chu Nhat</th>'+
				'</tr>'+
			'</thead>'+
			'<tbody>'+
				'<tr>'+
					'<th>1</th>'+
					'<th>Phan Quoc Tri</th>'+
					'<th>X</th>'+
					'<th>X</th>'+
					'<th>X</th>'+
					'<th>X</th>'+
					'<th>X</th>'+
					'<th>X</th>'+
					'<th></th>'+
				'</tr>'+
				'<tr>'+
					'<th>2</th>'+
					'<th>Danh Khuong Duy</th>'+
					'<th>X</th>'+
					'<th>X</th>'+
					'<th></th>'+
					'<th></th>'+
					'<th>X</th>'+
					'<th>X</th>'+
					'<th>X</th>'+
				'</tr>'+
				'<tr>'+
					'<th>3</th>'+
					'<th>Nguyen Nhut Tan</th>'+
					'<th></th>'+
					'<th>X</th>'+
					'<th></th>'+
					'<th>X</th>'+
					'<th></th>'+
					'<th>X</th>'+
					'<th>X</th>'+
				'</tr>'+
			'</tbody>'+
		'</table>'+
	'</div>';
	}
}
