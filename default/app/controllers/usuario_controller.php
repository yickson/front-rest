<?php

/**
 * Controlador para hacer el uso del acceso hacia los usuarios
 */
class UsuarioController extends AppController
{

  public function index()
  {
    Redirect::toAction('ver');
  }

  public function ver()
  {

  }

  public function crear()
  {

  }

  public function editar($id)
  {
    $this->id = $id;
  }
}


?>
