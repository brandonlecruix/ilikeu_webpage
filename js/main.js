//FOR FEATURES IMAGES TRANSITION IN ABOUT SECTION:
	const image_fade = (image, sign)=>{
	    let cont;
	    let operation;

	    sign === "+" ? (operation = "< 1", cont = 0.0) : (operation = "> 0", cont = 1.0);
	    const a = setInterval(()=>{
	        if ( eval(`cont${operation}`) ) {
	            image.style.opacity = cont;
	            //console.log(cont);
	            eval( `cont ${sign}= 0.01;` );
	        } else {
	            clearInterval(a);
	        }
	    }
	    , 12);
	}
	//image_fade(document.getElementsByClassName("featured_snapshot")[0], "+");
	const transition = (images) => {
		const total_images = images.length;
		let current_image = 0;
		let sign = "-";

		function switch_sign() {
			sign === "+" ? sign = "-" : sign = "+";
		}

		const t = setInterval(()=>{
			current_image === (total_images-1) ? (image_fade(images[current_image], sign), switch_sign(), current_image = 0) : (image_fade(images[current_image], sign), current_image += 1);
		}, 4500);
	}
	transition(document.getElementsByClassName("featured_snapshot"));

//CHANGE FEATURES IMAGES CONTENT:
	const change_feature_images = (feature_folder) => {
		const html = `
					<img src="./snapshots/${feature_folder}/1.png" class="featured_snapshot">
					<img src="./snapshots/${feature_folder}/2.png" class="featured_snapshot">
					<img src="./snapshots/${feature_folder}/3.png" class="featured_snapshot">	
		`;
		const snapshots_cont = document.getElementsByClassName("snapshots")[0];
		snapshots_cont.innerHTML = html;
	}
