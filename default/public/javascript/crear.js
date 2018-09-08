$(document).ready(function(){
  $("#crear").click(function(){
    let nombre = $("#nombre").val();
    let correo = $("#correo").val();
    let clave = $("#clave").val();
    let rol = $("#rol").val();
    $.ajax({
      type: 'POST',
      cache: false,
      url: 'http://localhost/backendcts2/api/usuario',
      data: {"nombre":nombre, "correo":correo, "clave":clave, "rol":rol},
      headers: {"Authorization": 'Bearer ' + sessionStorage.getItem('token')},
      success: function(result){
        if(result.err == false){
          swal({
                      icon: 'success',
                      title: 'Usuario creado',
                      text: 'Será redireccionado...',
                      closeOnClickOutside: false,
                      buttons: false,
                      timer: 1500
                }).then(function() {
                  swal.close();
                  window.location.href = "http://localhost/front-rest/usuario";
                })
        }else{
          swal({
                      icon: 'error',
                      title: result.mensaje,
                      button: {
                      text: "Ok",
                      visible: false,
                          },
                      closeOnClickOutside: false,
                      timer: 1500
                  })
           setTimeout(function(){
             window.location.href = "http://localhost/front-rest/"
           }, 2000)
        }
      }
    })
  });

  $("#volver").click(function(){
    window.location.href = 'http://localhost/front-rest/usuario';
  })
})
