$(document).ready(function(){

  $('menu-bar').click(function(){
    $(this).toggleclass('fa-times');
    $('.navbar').toggleclass('nav-toggle');
  });
});

function handleFeedback(){
  event.preventDefault()
  var name= document.getElementById("name").value
  var email= document.getElementById("email").value
  var phone= document.getElementById("phone").value
  var message= document.getElementById("message").value
  var response={name:name,
    email:email,
    phoneNumber: phone,
    feedback: message}
    fetch('https://60a28814745cd70017577508.mockapi.io/FEEDBACK', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(response)
    }).then(res => {
      document.getElementById("feedback").reset()
    }) 
}

