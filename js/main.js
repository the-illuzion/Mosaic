var name;
var pledge;
var modal = ['#modal4','#modal3'];


function getData() {

    const queryString = window.location.search;
    console.log(queryString)
    const urlParams = new URLSearchParams(queryString);
    const userID = urlParams.get('userID')
    window.localStorage.setItem("user", userID)
    start();
    getUserData(userID);


}

function next() {


    if($("#name").val()== "" || $("#pledge").val()== ""){
        $('#validate').modal('show');
    }
    else{
        name = $("#name").val();
        pledge = $("#pledge").val();
    
    
        console.log(name)
        console.log(pledge)
        window.localStorage.setItem('name', name);
        window.localStorage.setItem('pledge', pledge);
    
        $('#modal4').modal('show');
        $('#modal1').modal('hide');
        $('#modal4').modal({backdrop: 'static', keyboard: false})
    }
    
        
}

function getUserData(id) {
    var fd = {
        "user_id": id,
        "api_key": 'd952369315245f8b7eb6ceb85c1e3c82'
    }
    $.ajax({
        url: 'https://sibc2020.co.in/api/user/details',
        type: 'post',
        data: JSON.stringify(fd),
        "headers": {
            "Content-Type": "application/json"
        },
        processData: false,
        success: function (response) {
            console.log(response);
            window.localStorage.setItem("user_name", response.user_details.first_name)
        },
    });
}


function camera() {

    $('#modal2').modal('show');
    $('#modal4').modal('hide');
    $('#modal2').modal({backdrop: 'static', keyboard: false})
}

function camera2() {
    window.localStorage.setItem('img', "none");
    $('#name2').html(name);
    $('#pledge2').html(window.localStorage.getItem("pledge"));
    $('#modal5').modal('show');
    $('#modal4').modal('hide');
    //setTimeout(capture1, 5000)
    //$('#modal5').modal({backdrop: 'static', keyboard: false})
}


function final(){
    if(window.localStorage.getItem("img") == "none"){
        //$('#modal5').modal('hide');
        $('#modal6').modal('hide');
        $("#hide2").hide();
        $('#modal5').modal('show');
        setTimeout(capture1, 2000)
    }
    else{
        //$('#modal3').modal('hide');
        $('#modal6').modal('hide');
        $("#hide1").hide();
        $('#modal3').modal('show');
        setTimeout(capture, 2000)
    }

    
}



function save() {
    
    
}



function submit() {
    $('#modal4').modal('show');
    $('#modal3').modal('hide');
    $('#name2').html(name);
    $('#pledge2').html(pledge);
    $('#img2').attr("src", window.localStorage.getItem("img"));
    //setTimeout(capture, 5000)

}

function found() {
    if(window.localStorage.getItem("img") == "none"){
        $('#modal5').modal('show');
    }
    else{
        $('#modal3').modal('show');
    }
}




function capture(val) {
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
                $('#can').show();
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



function capture1() {
    html2canvas(document.querySelector("#box4")).then(function (canvas) {
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
                $('#modal5').modal('hide');
                $('#find').show();
                $('#can').show();
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



