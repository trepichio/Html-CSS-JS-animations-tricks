	let carousel = document.querySelector('.content-carousel');

	let carousel3D_images = document.querySelectorAll('.content-carousel figure');
	let carousel3D_angle = 0;
	let carousel3D_controls = document.querySelectorAll('.carousel3D-controls');

	if (carousel3D_controls) {
		Array.from(carousel3D_controls).forEach(el => {
			if (carousel.classList.contains('spinner')) {
				el.setAttribute('style','display: none');
			}
			if (el.classList.contains('controls-left')) {
				el.addEventListener('focus', e => { e.preventDefault(); galleryspin('-')});
				el.addEventListener('click', e => { e.preventDefault(); galleryspin('-')});
			} else if (el.classList.contains('controls-right')) {
				el.addEventListener('click', e => { e.preventDefault(); galleryspin('')});
				el.addEventListener('click', e => { e.preventDefault(); galleryspin('')});
			}
		});

	}


	function galleryspin(sign) {
		let slice = 360 / carousel3D_images.length;
		console.log(slice)
		if (!sign) {
			carousel3D_angle += slice;
		} else {
			carousel3D_angle -= slice;
		}
		carousel.setAttribute('style', '-webkit-transform: rotateY(' + carousel3D_angle + 'deg); transform: rotateY('+ carousel3D_angle + 'deg);');

	}