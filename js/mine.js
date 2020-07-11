$(function(){
	'use strict';
	//First App
	//collect variables
	var myImages= Array.from(document.querySelectorAll('.img-fluid'));
	var lightboxContainer=document.querySelector('.lightbox-container');
	var close= document.querySelector('#close');
	var next= document.querySelector('#next');
	var prev= document.querySelector('#prev');
	var currentImgIndx =0;
	//event of show lightboxContainer when click on img
	for (var i = 0; i < myImages.length; i++) {
		myImages[i].addEventListener('click', function(e){
			e.preventDefault;
			lightboxContainer.style.transform='scale(1,1)';
			lightboxContainer.firstElementChild.style.transform='scale(1,1)';
			var imgSrc=e.target.src;
			currentImgIndx= myImages.indexOf(e.target);
			lightboxContainer.firstElementChild.style.backgroundImage='url('+imgSrc+')';
		});
		
	};//End Event when click on img

	//event when click on close
	close.addEventListener('click', hideLightbox);
	function hideLightbox(){
		lightboxContainer.style.transform='scale(0,0)';
		lightboxContainer.firstElementChild.style.transform='scale(0,0)';
	};
	//event when click next
	next.addEventListener('click', nextShow);
	function nextShow(){
		currentImgIndx++;
		if (currentImgIndx == myImages.length) {
			currentImgIndx=0
		};
		lightboxContainer.firstElementChild.style.backgroundImage='url('+myImages[currentImgIndx].src+')'
	};

	//event when click prev
	prev.addEventListener('click', prevShow);
	function prevShow(){
		currentImgIndx--;
		if (currentImgIndx < 0) {
			currentImgIndx=myImages.length-1
		};
		lightboxContainer.firstElementChild.style.backgroundImage='url('+myImages[currentImgIndx].src+')'
	};
	document.addEventListener('keydown', function(e){
		if (e.keyCode==27) {
			hideLightbox();
		}
		if(e.keyCode==39){
			nextShow();
		}
		if(e.keyCode==37)
		prevShow();
	})

});