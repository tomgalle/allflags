//////////
// MAIN //
//////////

	var canvas = document.getElementById("FilterCanvas");
	var context = canvas.getContext("2d");

(function(view) {
	
	
		var document = view.document;
		var session = view.sessionStorage;

		get_blob = function () {
			return view.Blob;
		}

	//////////////////
	// UPLOAD IMAGE //
	//////////////////

		var upload = document.getElementsByTagName('input')[0];
		var holder = document.getElementById('holder');
		var state = document.getElementById('status');
		var uploadImageName;

		if (typeof window.FileReader === 'undefined') {
			console.log("FAIL")
			state.className = 'fail';
		} else {
			state.className = 'success';
			state.innerHTML = 'Conver Your Profile Photo';
		}
		 
		upload.onchange = function (e) {
			e.preventDefault();
			console.log(this.value);
			drawToCanvas();
		};

	////////////////////
	// DRAW TO CANVAS //
	////////////////////

		function drawToCanvas() {
			console.log("-- DRAW-TO-CANVAS --")
			var file = upload.files[0];
			var reader = new FileReader();

			var uploadedImage;
			var allFlagsImage;
			
			// Function Load Uploaded Image to Canvas
			reader.onload = function (event) {
				uploadedImage = new Image();
				uploadedImage.src = event.target.result;
				context.drawImage(uploadedImage, 0, 0, canvas.width, canvas.height);

				if (uploadedImage.width > 560) {
					uploadedImage.width = 560;
				}
			};
			


			allFlagsImage = new Image();
			allFlagsImage.src = "./assets/allflags.jpg";
			allFlagsImage.onload = function() {
				reader.readAsDataURL(file);
				context.drawImage(allFlagsImage, 0, 0, canvas.width, canvas.height);
				context.globalAlpha = 0.6
				context.globalCompositeOperation = "soft-light";
				context.drawImage(allFlagsImage, 0, 0, canvas.width, canvas.height);
				return false;
			}

			downloadImageFromCanvas()
		}


	////////////////////
	// DOWNLOAD IMAGE //
	////////////////////

		function downloadImageFromCanvas () {
			console.log("-- DOWNLOAD-IMAGE --")

			var canvas_filename = {
				value: "allflags_filter"
			}

			canvas.toBlob(function(blob) {
				console.log("-- canvas.toBlob --")
				saveAs(
					  blob
					, (canvas_filename.value || canvas_filename.placeholder) + ".png"
				);
			}, "image/png");
		};
}(self));

