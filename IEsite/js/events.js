$("#mostrarTabla").click(function(){$("#tableContent").html(consulta());});
$(document).ready(function(){$("#tableContent").html(consulta());});
$("#ampliar").click(function(){$("#bar-chart-grouped").toggle()});
//Obtener usuario de red
$(document).ready(function(){var ws = new ActiveXObject('WScript.Network');$("#menu").text("Usuario: "+ws.UserName);});

//Graficar
$(document).ready(
	function(){
		var ctx = document.getElementById("bar-chart-grouped").getContext("2d");
		var myBarChart = new Chart(ctx, {type: 'bar', data: getGraphData({labels: ["Salario", "Deuda", "Capital"],datasets: []})});
	}
);