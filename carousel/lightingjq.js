
function slide(direction){
			
	let currEle = $('.carousel-inner .active');
	let items = currEle.parent().children('.item');
	let activeIndex = items.index(currEle);
	let delta = direction === 'next' ? 1 : -1;
	let nextItemIndex = (activeIndex + delta) % items.length;
	let eleToMove = items.eq(nextItemIndex);

	let nextItemClassName = direction === 'next' ? 'hide-in-right' : 'hide-in-left';
	eleToMove.addClass(nextItemClassName);
	eleToMove[0].offsetWidth;//force reflow

	let currEleItemClassName = direction === 'next' ? 'hide-in-left' : 'hide-in-right';
	currEle.addClass(currEleItemClassName);

	//remove nextItemClassname很重要，因为active 无法覆盖 css表中位于其后的属性
	eleToMove.addClass('active').removeClass(nextItemClassName);
	currEle.on('transitionend webkitTransitionEnd oTransitionEnd', function(){
		$(this).removeClass();
		$(this).addClass('item');
	});
	eleToMove.on('transitionend webkitTransitionEnd oTransitionEnd', function(){
		$(this).removeClass();
		$(this).addClass('item active');
	});
	
}

function throttle(fn, duration){
	let bingo = true;
	return function(){
		if(bingo){
			let ret = fn.apply(this, arguments);
			bingo = false;
			setTimeout(()=>{bingo = true}, duration);
			return ret;
		}
	}

}