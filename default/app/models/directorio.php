<?php

/**
 * Modelo para gestionar el directorio de SM
 */
class Directorio
{

  public static function getDirectorio($user = null, $password = null) {
  	$ldap_host = "10.120.0.31"; //10.120.15.29 --- 10.120.0.31
  	$ldap_dn = "DC=smcl,DC=net";
  	$base_dn = "DC=smcl,DC=net";
  	$ldap_usr_dom = "@smcl.net";
  	$ldap = ldap_connect($ldap_host);
  	ldap_set_option($ldap, LDAP_OPT_PROTOCOL_VERSION,3);
  	ldap_set_option($ldap, LDAP_OPT_REFERRALS,0);
  	ldap_bind($ldap, "yramirez" . $ldap_usr_dom, "yr1312sm");
  	$attributes = array();
  	$attributes[] = 'givenname';
  	$attributes[] = 'mail';
  	$attributes[] = 'samaccountname';
  	$attributes[] = 'sn';
  	$attributes[] = 'department';
  	$attributes[] = 'extensionAttribute4';
  	$attributes[] = 'title';
  	$attributes[] = 'physicalDeliveryOfficeName';
  	$attributes[] = 'telephonenumber';
  	$attributes[] = 'useraccountcontrol';


  	$filter = $datos = (isset($_GET['d']) ? '(&(objectCategory=person)(samaccountname='.$_GET['d'].'))' : '(&(objectCategory=person)(samaccountname=*))');

  	$results = ldap_search($ldap, $ldap_dn, $filter, $attributes);
  	$member_list = ldap_get_entries($ldap, $results);

  	$dirty = 0;
  	$group_member_details = array();

  	//var_dump($member_list);

  	for ($i=0; $i<$member_list["count"]; $i++)
  	{
  		if(isset($member_list[$i]["givenname"][0])){
  			if($member_list[$i]["givenname"][0] != ""){
  				if (isset($member_list[$i]["givenname"][0])) {
  				$nombre = $member_list[$i]["givenname"][0];
  				} else {
  				$nombre = '';
  				}

  				if (isset($member_list[$i]["sn"][0])) {
  				$apellido = $member_list[$i]["sn"][0];
  				} else {
  				$apellido = '';
  				}

  				if (isset($member_list[$i]["mail"][0])) {
  				$mail = $member_list[$i]["mail"][0];
  				} else {
  				$mail = '';
  				}

  				if (isset($member_list[$i]["title"][0])) {
  				$cargo = $member_list[$i]["title"][0];
  				} else {
  				$cargo = '';
  				}

  				if($mail != ""){
  					$group_member_details[] = array('mail' => trim($mail));
  				}
  			}
  		}
  	}
    $termino = $_GET["term"];
    $directorio = $group_member_details;
    $resultado = array();
    foreach ($directorio as $key => $valor) {
      if(strpos(strtolower($valor["mail"]), strtolower($termino)) !== false){
        array_push($resultado, $valor['mail']);
      }
    }
  	return $resultado;
    }

}


?>
