document.addEventListener("DOMContentLoaded", function() {

	const $bodyWrap = document.querySelector('.body-wrap');

	function sizeBody(){
		let W_Height = outerHeight;
		let W_Width = outerWidth;
		let n = W_Width/W_Height;

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

	[itemsOne[0],itemsTwo[0]].forEach(el=> {
		gsap.set(el, {x: 0})
		gsap.set(el.children[0],{x: 0, scale: 1})
	})

	function moveItems() {
		const tl = gsap.timeline();

		tl.set([itemsOne[0],itemsTwo[0]],{zIndex: 1})
			.set([itemsOne[1],itemsTwo[1]],{zIndex: 100})
			.to([itemsOne[0],itemsTwo[0]],{duration: 1.4, x: '-50%'},'one')
			.to([itemsOne[0].children[0],itemsTwo[0].children[0]],
				{duration: 1.4, scale: 1.2},'one')
			.to([itemsOne[1],itemsTwo[1]],{duration: 1.4, x: 0},'one')
			.to([itemsOne[1].children[0],itemsTwo[1].children[0]],
				{duration: 1.4, x: 0, scale: 1},'one')
			.set([itemsOne[0],itemsTwo[0]],{x: '100%'})
			.set([itemsOne[0].children[0],itemsTwo[0].children[0]]
				,{x: '-25%'})
			.then(()=>[itemsOne,itemsTwo].forEach(el=>el.push(el.shift())))
			.then(()=> gsap.delayedCall(0.6, moveItems))
	}
	gsap.delayedCall(0.6, moveItems);

	button.addEventListener('click', moveItems);

});
