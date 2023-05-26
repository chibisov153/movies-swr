document.addEventListener("DOMContentLoaded", function() {

	const $bodyWrap = document.querySelector('.body-wrap');
	const root = document.documentElement;

	function sizeBody(){
		let W_Height = outerHeight;
		let W_Width = outerWidth;
		let n = W_Width/W_Height;
		// let VW = $bodyWrap.getBoundingClientRect().width;
		//
		// root.style.setProperty('--vw', `${VW/100}px`);

		if (W_Width > W_Height && n > 1.78) {
			let vw = Math.floor(W_Height * 1.777777777777778);
			$bodyWrap.style.setProperty('width', `${vw}px`);
		} else {
			$bodyWrap.style.setProperty('width', '100%');
		}
	}
	sizeBody();
	window.addEventListener('resize',sizeBody);

//=============== Slider ========================//

	const button = document.querySelector('.button');
	const boxOne = document.querySelector('.box-one');
	const boxTwo = document.querySelector('.box-two');
	const itemsOne = [...boxOne.querySelectorAll('.item')];

	let tags = [];

	itemsOne.forEach(el=>tags.push(el.outerHTML));
	tags.push(tags.shift());
	tags.map((el)=>boxTwo.insertAdjacentHTML('beforeend',el));
	boxTwo.insertAdjacentHTML('beforeend','<div class="spacer"></div>');

	const itemsTwo = [...boxTwo.querySelectorAll('.item')];

	[itemsOne[0],itemsTwo[0]].forEach(el=>gsap.set(el,{x: 0,scale: 1}))

	function moveItems() {
		const tl = gsap.timeline();

		tl.set([itemsOne[0],itemsTwo[0]],{zIndex: 1})
			.set([itemsOne[1],itemsTwo[1]],{zIndex: 100})
			.to([itemsOne[0],itemsTwo[0]],{duration: 1, x: '-55%',scale: 1.2},'one')
			.to([itemsOne[1],itemsTwo[1]],{duration: 1, x: 0,scale: 1},'one')
			.set([itemsOne[0],itemsTwo[0]],{x: '110%',scale: 1.2})
			.then(()=>[itemsOne,itemsTwo].forEach(el=>el.push(el.shift())))
			//.then(()=> gsap.delayedCall(0.6, moveItems))
	}
	//gsap.delayedCall(0.6, moveItems);

	button.addEventListener('click', moveItems);

});
