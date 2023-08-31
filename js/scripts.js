const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}
const submitForm = () => {
    let formData = {};
    formData.title = $('#title').val(); 
    formData.image = $('#image_link').val(); 
    formData.description = $('#description').val(); 
    formData.link = $('#link').val();
    console.log("Form Data Submitted: ", formData);
    postCat(formData)
}


let socket = io();
socket.on('number',(message)=>{
    console.log("The random number is " + message);
})


function postCat(cat){
    $.ajax({
        url:'/api/cat',
        type:'POST',
        data:cat,
        success: (result)=>{
            if(result.statusCode === 201){
                alert('Butterfly created')
            }
        }
    })
}

function getAllCats(){
    $.get('/api/cat',(result)=>{
        if(result.statusCode === 200){
            //Idk
        }
    })
}

$(document).ready(function () {
    $('.materialboxed').materialbox(); 
    $('#formSubmit').click(() => {
        submitForm();
    })
    $('.modal').modal();
    getAllCats();
});

