<?php

class CONFIG{
    private static $servername = "localhost";
    private static $user = "centromusical";
    private static $password = "cfmvillahermosa123";
    private static $database = "centromu_cfm";
    private static $conexion = NULL;

    public static function Conexion() {
            CONFIG::$conexion = mysqli_connect(CONFIG::$servername, CONFIG::$user, CONFIG::$password, CONFIG::$database);
        
        if(CONFIG::$conexion != NULL){
            return CONFIG::$conexion;
        }else{
            echo "Failed to connect to MySQL: " . mysqli_connect_error();
        }
       
    }

    public static function EjecutarConsulta($consulta) {
        $resultado = mysqli_query(CONFIG::$conexion, $consulta);
        return $resultado;
    }

    public static function ObtenerDatos($consulta) {
        return mysqli_fetch_array($consulta);
    }

    public static function ObtenerNumeroRegistros($consulta) {
        return mysqli_num_rows($consulta);
    }

    public static function CerrarConexion($con){
        mysqli_close($con);
    }

}