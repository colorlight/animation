function slideBar(){

	let scrollbarTop = 0;
	let scrollContentTop = 0;
	let $scrollbar = $('.scrollbar');
	let $content = $('.content');
	let $contentWrapper = $('.content-wrapper');

	let myDef = {
		get contentWrapperHeight(){
			return $contentWrapper.height();
		},

		get scrollbarHeight(){
			return this.contentWrapperHeight ** 2 / this.contentHeight;
		},

		get contentHeight(){
			return $content.height();	
		}

	}

	renderScrollbarSize();

	function renderScrollbarSize(){
		console.log(myDef.scrollbarHeight);
		$scrollbar.height(myDef.scrollbarHeight);
		renderPosition();
	}


	function renderPosition(){

		if(scrollbarTop < 0){
			scrollbarTop = 0;
		}

		if( scrollbarTop > myDef.contentWrapperHeight - myDef.scrollbarHeight){
			scrollbarTop = myDef.contentWrapperHeight - myDef.scrollbarHeight;
		}

		scrollContentTop = myDef.contentHeight / myDef.contentWrapperHeight * scrollbarTop;

		$scrollbar.css('top', scrollbarTop);
		$content.css('top', -scrollContentTop);

	}

	function scroll(event){
		console.log(event.originalEvent.deltaY);

		scrollbarTop += event.originalEvent.deltaY;

		renderPosition();
	}

	function drag(event){
		let startPosY = event.pageY;

		$('body').on('mousemove', function(event){
			 
			let offsetY = event.pageY - startPosY;
			startPosY = event.pageY;

			event.preventDefault();
			event.stopPropagation();

			scrollbarTop += offsetY;
			renderPosition();
		})

		$('body').on('mouseup', function(){
			$('body').off();
		})
	}

	$scrollbar.on('mousedown', drag);
	$('.content-wrapper').on('wheel', scroll);
	$(window).resize(renderScrollbarSize);
}