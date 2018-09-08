$(document).ready(function(){
  let usuario = $("#id").val();
  let rol = sessionStorage.getItem('rol');
  if(rol != 1){
    $("#rol").attr("disabled", true);
  }
  $.ajax({
    type: 'GET',
    cache: false,
    url: 'http://localhost/backendcts2/api/usuario/'+usuario,
    headers: {"Authorization": 'Bearer ' + sessionStorage.getItem('token')},
    success: function(result){
      console.log(result);
      if(result.err != true){
        let datos = result.usuario;
        $("#nombre").val(datos.nombre);
        $("#correo").val(datos.correo);
        $("#rol").val(datos.rol_id);
      }else{
        swal({
                    icon: 'error',
                    title: result.mensaje,
                    buttons: false,
                    closeOnClickOutside: false,
                    timer: 1500
                })
        setTimeout(function(){
          window.location.href = "http://localhost/front-rest"
        }, 2000);
      }
    }
  })

  $("#editar").click(function(){
    let id = $("#id").val();
    let nombre = $("#nombre").val();
    let rol = $("#rol").val();
    let correo = $("#correo").val();
    $.ajax({
      type: 'put',
      cache: false,
      url: 'http://localhost/backendcts2/api/usuario/'+id,
      data: {"id": id, "nombre":nombre, "rol":rol, "correo":correo},
      headers: {"Authorization": 'Bearer ' + sessionStorage.getItem('token')},
      success: function(result){
        if(result){
          swal({
                      icon: 'success',
                      title: 'Usuario editado',
                      text: 'Será redireccionado...',
                      closeOnClickOutside: false,
                      button: {
              text: "Ok",
              visible: false,
                        },
                      timer: 3000
                }).then(function() {
                  swal.close();
                  window.location.href = "http://localhost/front-rest/usuario";
                })
        }else{
          swal({
                      icon: 'error',
                      title: 'Error al editar el usuario',
                      button: {
                      text: "Ok",
                      visible: false,
                          },
                      closeOnClickOutside: false,
                      timer: 1500
                  })
        }
      }
    })
  });

  $("#volver").click(function(){
    window.location.href = 'http://localhost/front-rest/usuario';
  })
})
