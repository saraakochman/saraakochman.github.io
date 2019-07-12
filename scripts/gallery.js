$(document).ready(function() {
	console.log('i am ready');

// LOOP THROUGH DATA AND PUT IMAGES ON SCREEN

	for (var id in productData) {
		var product = productData[id];
		setupTile(product);
	};

	var $modal = ('#productModal');

	function setupTile(product){
		// SET UP TILE
		var mainImage = product.mainImage;

		var $container = $('.gallery');
		var $tileImage = $('<div class="work"></div>');
		$tileImage.attr('data-id', product.productId);
		var $tileHover = $('<div class="work-hover">Learn More</div>');
		var $close = $('.close');

		var $img = $('<img>');
		$img.attr('src', mainImage);

		$tileImage.append($img);

		$tileImage.append($tileHover);
		$container.append($tileImage);
	};


	setupModal(productData['bowl_1']);

	function setupModal(product) {

		var $modalContent = $('.modal-content');

		var secondImage = product.secondImage;
		console.log(secondImage);

		var $modalImage = $('.secondary-image img');
		$modalImage.attr('src', secondImage);

		var woodType = product.woodType;
		var finishType = product.finishType;
		var width = product.width;
		var height = product.height;
		var depth = product.depth;
		var description = product.description;

		var $woodType = $('.product-info #woodType');
		$woodType.text(woodType);

		var $finishType = $('.product-info #finishType');
		$finishType.text(finishType);

		var $width = $('.product-info #width');
		$width.text(width);

		var $height = $('.product-info #height');
		$height.text(height);

		var $depth = $('.product-info #depth');
		$depth.text(depth);

		var $description = $('.product-info #description');
		$description.text(description);
	};

		// SLICK
	// $('.slick-modal').slick({
	//   infinite: true,
	//   slidesToShow: 1,
	//   slidesToScroll: 1,
	//   dots: true,
	//   arrows: false,
	// });

		$(document).on('click', '.work', function(event) {
			$('#productModal').show();

			var id = $(this).attr('data-id');
			setupModal(productData[id]);
		});

		$(document).on('click', '.close', function(event) {
			$('#productModal').hide();
		});

	});



