const backgrounds = ["Photoframe", "Photoframe1"];
const backgroundImagesPath = 'images/';
let currentBGIndex = 0;

var settings;

var img;
var user;

function save() {
	document.getElementById("login").style.display = "none";
	document.getElementById("wrapper").style.display = "block";
}
// Put event listeners into place
window.addEventListener("DOMContentLoaded", function () {
	// Grab elements, create settings, etc.
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var video = document.getElementById('video');
	var mediaConfig = { video: true };
	var errBack = function (e) {
		console.log('An error has occurred!', e)
	};

	// Put video listeners into place
	if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
		navigator.mediaDevices.getUserMedia(mediaConfig).then(function (stream) {
			//video.src = window.URL.createObjectURL(stream);
			video.srcObject = stream;
			video.play();
		});
	}

	/* Legacy code below! */
	else if (navigator.getUserMedia) { // Standard
		navigator.getUserMedia(mediaConfig, function (stream) {
			video.src = stream;
			video.play();
		}, errBack);
	} else if (navigator.webkitGetUserMedia) { // WebKit-prefixed
		navigator.webkitGetUserMedia(mediaConfig, function (stream) {
			video.src = window.webkitURL.createObjectURL(stream);
			video.play();
		}, errBack);
	} else if (navigator.mozGetUserMedia) { // Mozilla-prefixed
		navigator.mozGetUserMedia(mediaConfig, function (stream) {
			video.src = window.URL.createObjectURL(stream);
			video.play();
		}, errBack);
	}

	document.getElementById("snap").style.display = "block";
	document.getElementById("download").style.display = "none";
	document.getElementById("reset").style.display = "none";
	// Trigger photo take

	// document.getElementById('snap').addEventListener('click', function() {
	// 	context.drawImage(video, 0, 0, 640, 480);
	// 	document.getElementById("snap").style.display = "none";
	// 	document.getElementById("download").style.display = "block";
	// 	document.getElementById("reset").style.display = "block";
	// });



	// download screenshot
	document.getElementById('download').addEventListener('click', function () {


		///code missing here!


		// window.location.reload();
	});

	//reset
	document.getElementById('reset').addEventListener('click', function () {
		var canvas = document.getElementById('canvas');
		const context = canvas.getContext('2d');

		context.clearRect(0, 0, canvas.width, canvas.height);
		document.getElementById("snap").style.display = "block";
		document.getElementById("download").style.display = "none";
		document.getElementById("reset").style.display = "none";
	});

}, false);

function takePic() {

	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	context.drawImage(video, -80, 0);


	/*var data=imgData.data;
	for(var i=0;i<data.length;i+=4){
		if(data[i+3]<255){
			data[i]=255;
			data[i+1]=255;
			data[i+2]=255;
			data[i+3]=255;
		}	
	}
	ctx.putImageData(imgData,0,0);*/

	document.getElementById("snap").style.display = "none";
	document.getElementById("download").style.display = "block";
	document.getElementById("reset").style.display = "block";

}



function close_cam() {
	document.getElementById("camera").style.display = "none";
	document.getElementById("cover").style.display = "none";
	var canvas = document.getElementById('canvas');
	const context = canvas.getContext('2d');

	context.clearRect(0, 0, canvas.width, canvas.height);
	document.getElementById("snap").style.display = "block";
	document.getElementById("download").style.display = "none";
	document.getElementById("reset").style.display = "none";
}

function close_pic() {
	document.getElementById("picture_frame").style.display = "none";
	document.getElementById("cover").style.display = "none";
	document.getElementById("pic").remove();
}

function get() {
	html2canvas(document.querySelector("#capture")).then(function (canvas) {
		var fileupload = canvas.toDataURL("image/png");


		var name = window.localStorage.getItem('name');
		window.localStorage.setItem('img', fileupload);
		var fd = new FormData();
		// var files = $('#file')[0].files[0];
		fd.append('user', name);
		fd.append('file', fileupload);
		$('#modal3').modal('show');
		$('#modal2').modal('hide');
		$('#modal3').modal({backdrop: 'static', keyboard: false})
		$('#name1').html(name);
		$('#pledge1').html(pledge);
		$('#img1').attr("src", fileupload);
		//f


	});
}




function capture() {
	html2canvas(document.querySelector("#box3")).then(function (canvas) {
		var fileupload = canvas.toDataURL("image/png");

		console.log("m here");
		var name = window.localStorage.getItem('user');
		console.log(name);
		var fd = new FormData();
		// var files = $('#file')[0].files[0];
		fd.append('user', name);
		fd.append('file', fileupload);


		console.log(fd)
		$.ajax({
			url: 'upload.php',
			type: 'post',
			data: fd,
			contentType: false,
			processData: false,
			success: function (response) {
                $('#modal3').modal('hide');
				$('#find').show();
				// if(response != 0){
				//     $("#img").attr("src",response);
				//     $(".preview img").show(); // Display image element
				// }else{
				//     alert('file not uploaded');
				// }
			},
		});
	});
}

