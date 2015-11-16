//////////
// MAIN //
//////////

	// init canvas
	var canvas = document.getElementById("FilterCanvas");
	var context = canvas.getContext("2d");
	canvas.style.display = 'none';
	var allFlagsUri = "data:image/jpg;base64,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hgCAgBgDz/zzzzzzwAAAEAJJZRT+NdnE0lXEQWUkAKDz/wA888888AAABAADRUU7MZdlOnpgxAxsQxA8/wDPPPPPPDjjjzDDH+VgixBcaGPMoEQqNQy+v8MMMMMMPfffQykU1M97XE/SHErwAaw44SaHgwggwggvffeNzjtILGBGDz/bXmgAiy/s40+cDkIwww889+cspid5+3PfjhOPXPXM6pbREbR8T/vvvgwzKQw6gpRIQAFtslzquaOKQA7mhGt7Swwwwx/aQ2tFhDwCjVY/SERfNRVBAQrbzt1YgwwwxKKQ0vk4IyFqbT7Tn+XMTpHaA+KaJYugwww3cFQ9smF86nK/6WnEaR+j8GAEp6KNTriww8qAACsmia/IdRsIhwLSXQ1vCSnluvITvvvkw9QEKpn3QnDg7rFyt/8Aq3ZsxVpQb9iX76oMMPEikKfMBOloGwA7n9I29atD+BZkmSTba4MMM3ylZ8/tU/PG6h5Op9Xd41/YKhE1IQMMMsMNLykObALRTtCmS+g26M5Sv+9HkLgJuMMMMMMPWkMMJ9WhoHBn0N0bnPt+ErNnvrnAMNIMP331Tzyyi/MV/Pna7ORjAUwiHNBXAaX6Jz74EEFTT22PE246NTjGIOtrNAnU6j51SBNX774IIId2oNRzT5I+iaM5sd430P7h13P/AP2iDDDCCCRwwgTnF3rqIXaOHWpp9MxZhp+b7jDDDD9998++/JpGRMKJkgAFkeSD7fm73WN8888889998+OJrpFWI90iSevLmYACUwx9988888889998++u5h1Fey6ClBhElAT2XvZ9988888889998+++pr2ICfPKC/++vrvffPK8988888889998+++prX8sM7+++++++++++r8988888889998+++prX84+++++++++++++r8988888889998+++pu8f++++++++++++++r8988888889998++yLpX+++++++++++++++r898888888CCCV/U9qoqDDDDDDDDOOOOOOOfhA9999999//EACERAQEBAAMAAwEBAQEBAAAAAAEAERAhMSAwQVFhQHGB/9oACAECEQE/EMLCwkLCOoSwxIDLCwsLCwsLCAsLCwsLCwsIDYEQsLCwsLCwsPg/AmIM+g+g94H634HDxbEEfifQe8D9b8Dh45BYM+B9B7wP1vwOA6iA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";

window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

(function(view) {
	
	
		var document = view.document;
		var session = view.sessionStorage;
    var img;

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
			state.innerHTML = 'Convert Your Profile Photo:';
		}
		 
		upload.onchange = function (e) {
			e.preventDefault();
			drawToCanvas();
		};

	////////////////////
	// DRAW TO CANVAS //
	////////////////////

		function drawToCanvas() {
			console.log("-- DRAW-TO-CANVAS --")
			var file = upload.files[0];
			var uploadedImage;
			var allFlagsImage;
			var reader = new FileReader();

      context.clearRect(0, 0, canvas.width, canvas.height);

			// Function to Load Uploaded Image to Canvas
			reader.onloadend = function () {
				console.log("-- READER ON LOAD END --")
				console.log(reader.result)

				uploadedImage = new Image();
				uploadedImage.src = reader.result;


				uploadedImage.onload = function (event) {

          var w = uploadedImage.naturalWidth;
          var h = uploadedImage.naturalHeight;
          var a = w / h;
          var landscape = true;
          if (a < 1) landscape = false;
          // canvas.height = canvas.width / a;
          var sourceX = landscape ? (w - h) / 2 : 0;
          var sourceY = landscape ? 0 : (h - w) / 2;
          var sourceWidth = landscape ? h : w;
          var sourceHeight = landscape ? h : w;
          var destWidth = canvas.width;
          var destHeight = canvas.height;
          var destX = 0;
          var destY = 0;

					context.globalAlpha = 0.3
					// context.drawImage(uploadedImage, 0, 0, canvas.width, canvas.height);
				  context.drawImage(uploadedImage, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);

        }

				allFlagsImage = new Image();
				allFlagsImage.src = allFlagsUri ;
				allFlagsImage.onload = function() {
					context.globalAlpha = 1
					context.globalCompositeOperation = "soft-light";

					context.drawImage(allFlagsImage, 0, 0, canvas.width, canvas.height);
					downloadImageFromCanvas()
				}
				canvas.style.display = 'block';
			}

			reader.readAsDataURL(file);
		}


	////////////////////
	// DOWNLOAD IMAGE //
	////////////////////

		function downloadImageFromCanvas () {
			console.log("-- DOWNLOAD-IMAGE --")
			console.log(canvas)

			var canvas_filename = {
				value: "allflags_filter"
			}

			canvas.toBlob(function(blob) {
				console.log("-- canvas.toBlob --")
				console.log(blob)

        if (window.mobileAndTabletcheck) {
        // if (true) {
          var urlCreator = window.URL || window.webkitURL;
          var imageUrl = urlCreator.createObjectURL( blob );
          $("#myImg").attr('src', imageUrl);
          $('.mobileModal').show()
          $('#downloadButton').one('click', function(){
            saveAs(blob, (canvas_filename.value || canvas_filename.placeholder) + ".png");
          })
        }
        else {
				  saveAs(blob, (canvas_filename.value || canvas_filename.placeholder) + ".png");
        }
			
      }, "image/png");
		};
}(self));

