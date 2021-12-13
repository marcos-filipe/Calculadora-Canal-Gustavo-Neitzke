function insert(n){
	var add = document.getElementById('display-r').innerHTML;
	document.getElementById('display-r').innerHTML = add + n;

}

function clean(){
	document.getElementById('display-r').innerHTML = '';
}

function back(){
	var del = document.getElementById('display-r').innerHTML;
	document.getElementById('display-r').innerHTML = del.substring(0, del.length -1);
}


function calc(){
	var result = document.getElementById('display-r').innerHTML;

	if(result){
		document.getElementById('display-r').innerHTML = eval(result);

	}else{
		document.getElementById('display-r').innerHTML = 'Ops, tente de novo...';
	}
}