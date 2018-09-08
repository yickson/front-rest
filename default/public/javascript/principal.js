$(document).ready(function(){
  let rol = sessionStorage.getItem('rol');
  let datos = new Array();
  $("#nombre").append(sessionStorage.getItem('nombre'));
    $.ajax({
      type: 'GET',
      cache: false,
      url: 'http://localhost/backendcts2/api/usuario',
      headers: {"Authorization": 'Bearer ' + sessionStorage.getItem('token')},
      success: function(result){
        console.log(result);
        if(result.err == true){
          swal({
                      icon: 'error',
                      ttitle: 'Error en la web',
                      text: result.mensaje,
                      buttons: false,
                      closeOnClickOutside: false,
                      timer: 1500
                  });
          setTimeout(function(){
            window.location.href = "http://localhost/front-rest/"
          }, 2500)
        }else{
          if(rol == 1){
            datos = result.usuarios;
          }else{
            $("#crear").hide();
            result.usuarios.forEach(function(val, i, array){
              if(val.correo == sessionStorage.getItem('id')){
                datos[0] = result.usuarios[i];
              }
            })
          }
          $('#tabla_historial').DataTable({
              data: datos,
              columns: [
                  { data: "nombre" },
                  { data: "correo" },
                  { data: "rol" },
                  { data: "acciones"}
              ],
              "ordering": false,
              "bInfo" : false,
              "language" :{
              "sProcessing":     "Procesando...",
              "sLengthMenu":     "Mostrar _MENU_ registros",
              "sZeroRecords":    "No se encontraron resultados",
              "sEmptyTable":     "Ningún dato disponible en esta tabla",
              "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
              "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
              "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
              "sInfoPostFix":    "",
              "sSearch":         "Buscar:",
              "sUrl":            "",
              "sInfoThousands":  ",",
              "sLoadingRecords": "Cargando...",
              "oPaginate": {
                  "sFirst":    "Primero",
                  "sLast":     "Último",
                  "sNext":     "Siguiente",
                  "sPrevious": "Anterior"
              },
              "oAria": {
                  "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                  "sSortDescending": ": Activar para ordenar la columna de manera descendente"
              }
            },
          });
        }
      }
    });


  $("#tabla_historial").on('click', '.editar', function(){
    let id = $(this).attr('value');
    window.location.href = "http://localhost/front-rest/usuario/editar/"+id;
  });

  $("#tabla_historial").on('click', '.eliminar', function(){
    let id = $(this).attr('value');
    $.ajax({
      type: 'DELETE',
      cache: false,
      url: 'http://localhost/backendcts2/api/usuario/' + id,
      headers: {"Authorization": 'Bearer ' + sessionStorage.getItem('token')},
      success: function(result){
        if(result.err == false){
          swal({
                      icon: 'success',
                      title: 'Usuario eliminado',
                      text: 'Actualizando datos...',
                      closeOnClickOutside: false,
                      buttons: false,
                      timer: 2000
                }).then(function() {
                  swal.close();
                  location.reload(true);
                })
        }
      }
    })
  });

  $("#cerrar").click(function(){
    swal({
                icon: 'success',
                title: 'Sesión cerrada',
                text: 'Será redireccionado',
                buttons: false
            })
    setTimeout(function(){
      sessionStorage.removeItem("nombre");
      sessionStorage.removeItem("rol");
      sessionStorage.removeItem("id");
      sessionStorage.removeItem("token");
      window.location.href = "http://localhost/front-rest";
    }, 1000);
  });

  $("#crear").click(function(){
    window.location.href = "http://localhost/front-rest/usuario/crear";
  })
})
