<?php
Header('Access-Control-Allow-Origin: *');
include("config.php");

$opcion = $_GET["opcion"];

class FUNCTIONS {
    
    public static function GET_SQL($sql){
        $response;
        $CONN = CONFIG::Conexion();
        $queryResult = CONFIG::EjecutarConsulta($sql);
        if($queryResult){
            $array = array();
            while($fila = CONFIG::ObtenerDatos($queryResult)){
                $array[] = array_map('utf8_encode',$fila);
            }
            $response = json_encode($array, JSON_NUMERIC_CHECK );
        }else{
            echo 'mal query';
            $response = null;
            echo mysqli_error_list($CONN);
        }
        
        CONFIG::CerrarConexion($CONN);
        return $response;
    }

    public static function PUT_SQL($sql){
        $CONN = CONFIG::Conexion();
        $queryResult = CONFIG::EjecutarConsulta($sql);
    }

}

switch($opcion){
    case '1':
    //Obtener información
    $sql = $_GET['sql'];
    echo  FUNCTIONS::GET_SQL($sql);
    break;
    case '2':
    //Insertar información
    break;
    case '3':
    //Modificar información
    break;
    case '4':
    //borrar información
    break;
}