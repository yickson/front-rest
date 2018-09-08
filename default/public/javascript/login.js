$(document).ready(function(){
  $("#login").on('click', function(){
    let correo = $("#correo").val();
    let clave = $("#clave").val();
    $.ajax({
      type: 'POST',
      cache: false,
      url: 'http://localhost/backendcts2/api/login',
      data: {"correo":correo, "clave":clave},
      success: function(result){
        console.log(result);
        if(result.err == true){
          //Respuesta valida
          swal({
                      icon: 'error',
                      title: 'Error',
                      text: result.mensaje
                  })
        }else{
          //Error en el login
          let usuario = result.usuario;
          sessionStorage.setItem("token", usuario.token);
          sessionStorage.setItem("rol", usuario.usuario.rol_id);
          sessionStorage.setItem("id", usuario.usuario.correo);
          sessionStorage.setItem("nombre", usuario.usuario.nombre);
          window.location.href = "http://localhost/front-rest/usuario"
        }
      }
    })
  })
})
