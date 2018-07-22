function consulta(){
	
		
		try{			
			configuracion.tipoConexion.Open(configuracion.cadenaConexion);

			var recordSet = configuracion.rst;
			var consulta = configuracion.getData;
			
			
			
		

			recordSet.Open(consulta,configuracion.tipoConexion);
			
			var contenido = "<thead><tr>"
				+"<th scope='col'>Cliente</th>"
				+"<th scope='col'>Salario</th>"
				+"<th scope='col'>Deuda</th>"
				+"<th scope='col'>Capital</th>"
				+"</tr></thead><tbody>";
				
				
			while(recordSet.EOF == false){
		
				contenido = contenido + "<tr>";
				contenido = contenido + "<td class='col'>"+recordSet.fields(0)+"</td>";
				contenido = contenido + "<td class='col'>"+recordSet.fields(1)+"</td>";
				contenido = contenido + "<td class='col'>"+recordSet.fields(2)+"</td>";
				contenido = contenido + "<td class='col'>"+recordSet.fields(3)+"</td>";
				contenido = contenido + "</tr>";
				
		
				recordSet.MoveNext();
				}
				contenido = contenido + "</tbody>"
			}
			catch(e){
				alert(e.message);
			}
			finally{
				recordSet.close();
				configuracion.tipoConexion.close();
				
				return contenido;
			}
}

function getGraphData(data){
	try{
		configuracion.tipoConexion.Open(configuracion.cadenaConexion);

			var recordSet = configuracion.rst;
			var consulta = configuracion.getData;
			recordSet.Open(consulta,configuracion.tipoConexion);
			
			//var data = {labels: ["Salario", "Deuda", "Capital"],datasets: []};
			
			while(recordSet.EOF == false){
				data.datasets.push({
					label : recordSet.fields(0)+"", 
					backgroundColor : "#"+Math.floor(Math.random()*899999+100000),
					data : [''+recordSet.fields(1),''+recordSet.fields(2),''+recordSet.fields(3)]
				});
				
				recordSet.MoveNext();
			}
			
	}catch(e){
		alert(e.message);
	}finally{
		recordSet.close();
		configuracion.tipoConexion.close();
		console.log(data);
		return data;
	}
}
