function dirver(){
	let cnt = 10;
	function countdown(){
		
		var timer = setTimeout(countdown, 1000)
		console.log(--cnt);
		if(cnt === 0){
			clearTimeout(timer);
		}
	}

	countdown();
}


function intervalDriver(cnt){
	let cntDown = cnt + 1;
	function countdown(){
		console.log(--cntDown);
		if(cntDown === 0){
			clearInterval(timer);
		}
	}
	let timer = setInterval(countdown, 1000);
}

function superDriver(cnt, fn){
	let cntDown = cnt;
	function countdown(fn){
		fn();
		if(cntDown-- === 1 ){
			clearInterval(timer);
		}
	}
	let timer = setInterval(countdown, 1000,fn);
}