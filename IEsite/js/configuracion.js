var configuracion={
	//Conexión con DB
	tipoConexion:  new ActiveXObject("ADODB.Connection"),
	cadenaConexion : "Provider=Microsoft.Jet.OLEDB.4.0;Data Source = 'C:\\Users\\lenovo\\Desktop\\DataTest.mdb';",
	rst : new ActiveXObject("ADODB.RecordSet"),
	
	//Consulta SQL a la base de datos de MS Access 2003
	getData : "select Nombre&' '&Apellido, Deuda, Salario, Propiedades from Multiple"
	
};