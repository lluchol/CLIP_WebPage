/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Todas las Páginas

//Botón ir a la cima de la página

mybutton = document.getElementById("btnArriba");

window.onscroll = function()
{
    scrollFunction()
};

function scrollFunction()
{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    {
        mybutton.style.display = "block";
    }
    else 
    {
        mybutton.style.display = "none";
    }
}

function topFunction()
{
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
    document.body.scrollTop = 0; // Para Safari
} 

function AgrandarLogo()
{
    document.getElementById('Logo').style.height='100px'
}

function NormalizarLogo()
{
	document.getElementById('Logo').style.height='50px'
}

//Reloj digital en tiempo real

function startTime()
{
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();

    //Agrega un 0 al frente de los número menores a 10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);

    document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec;

    var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear;

    document.getElementById("date").innerHTML = date;

    var time = setTimeout(function(){ startTime() }, 1000);
}

function checkTime(i)
{
    if (i < 10)
    {
        i = "0" + i;
    }
    return i;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Página Consultas

var auxCat = 0;

var categoria_0=new Array("","","","","");
var precio_cat0=new Array(0,0,0,0,0);

var categoria_1=new Array("","Hidratante","Antiarrugas","Exfoliante","Nutritiva");
var precio_cat1=new Array(0,100,50,150,75);

var categoria_2=new Array("","Anticaída","Anticaspa","Facial", "Revitalizante");
var precio_cat2=new Array(0,330,250,310,380);

var categoria_3=new Array("","Frutal","Floral","Especiado", "Oriental");
var precio_cat3=new Array(0,125,200,189,411);
		
function consultar()
{
	var pos=document.frmPrecios.lstProducto.selectedIndex;
 	var precio=parseInt(document.frmPrecios.lstProducto.options[pos].value);
	var cant=document.frmPrecios.txtCantidad.value;

	if (cant=="" || cant==" " || document.frmPrecios.lstProducto.selectedIndex==0 || document.getElementById('optNada').checked)
	// cant==" " me refiero al caracter alt + 255 (que como permite escribirlo, genera NaN al calcular).
	{
		alert("Ningún campo puede estar vacío, debe elegir un tipo y una variedad");
	}
	else
	{
		Total=precio*cant;

		alert("El total es: "+"$"+Total);
	}
}

function CargarLista(valor)
{
	if (valor==4)
		{
			lmatriz= categoria_0.length;
		
			for(i=0;i<lmatriz;i++)
			{
				document.frmPrecios.lstProducto.options[i].value=precio_cat0[i];
				document.frmPrecios.lstProducto.options[i].text=categoria_0[i];
				document.getElementById("indice0").selected=true;
			}
		}
	else if (valor==1)
	{
		lmatriz= categoria_1.length;
		
		for(i=0;i<lmatriz;i++)
		{
			document.frmPrecios.lstProducto.options[i].value=precio_cat1[i];
			document.frmPrecios.lstProducto.options[i].text=categoria_1[i];
			document.getElementById("indice0").selected=true;
		}
	}
	else if (valor==2)
		{
			lmatriz= categoria_2.length;
			
			for(i=0;i<lmatriz;i++)
			{
				document.frmPrecios.lstProducto.options[i].value=precio_cat2[i];
				document.frmPrecios.lstProducto.options[i].text=categoria_2[i];
				document.getElementById("indice0").selected=true;
			}
		}
	else if (valor==3)
		{
			lmatriz= categoria_3.length;
			
			for(i=0;i<lmatriz;i++)
			{
				document.frmPrecios.lstProducto.options[i].value=precio_cat3[i];
				document.frmPrecios.lstProducto.options[i].text=categoria_3[i];
				document.getElementById("indice0").selected=true;
			}
		}
	}

function NADA()
{
	imgProducto.src="Img/Productos/Consultas/Default.png";
	CargarLista(4);
}

function CREMA()
{
	imgProducto.src="Img/Productos/Consultas/Variedad_Crema.png";
	CargarLista(1);
}	

function SHAMPOO()
{
	imgProducto.src="Img/Productos/Consultas/Variedad_Shampoo.png";
	CargarLista(2);
}	

function FRAGANCIA()
{
	imgProducto.src="Img/Productos/Consultas/Variedad_Fragancia.png";
	CargarLista(3);
}

function controlCant()
{
	x=window.event.keyCode;

//Según el ASCII, se controla que el caracter a ingresar no sea menor a 48 ni mayor a 57 (el 48 es el "cero" y el 57 es el "nueve")

    if (x<48 || x>57)
	{
     	window.event.keyCode=0;
	}		
}
		
function Solo_Numeros(variable)
{
  	Numer=parseInt(variable);
  	if (isNaN(Numer))
  	{
        return "";  
    }      
	else
	{ 
  		return Numer;  
	}
}

function ValNumero(Control)
{
    Control.value=Solo_Numeros(Control.value);
}

function select_imagen()
{
	if(document.getElementById('optCrema').checked)
	{
		cre=document.getElementById("lstProducto").selectedIndex;
 
 		switch(cre)
  		{ 
			case 0: document.getElementById("imgProducto").src="Img/Productos/Consultas/Variedad_Crema.png"; break;
			case 1: document.getElementById("imgProducto").src="Img/Productos/Consultas/Hidratante.png"; break;
 	   		case 2: document.getElementById("imgProducto").src="Img/Productos/Consultas/Antiarrugas.png"; break;
			case 3: document.getElementById("imgProducto").src="Img/Productos/Consultas/Exfoliante.png"; break;
			case 4: document.getElementById("imgProducto").src="Img/Productos/Consultas/Nutritiva.png"; break;
  		}
  	}
  			
  	if(document.getElementById('optShampoo').checked)
	{
		sha=document.getElementById("lstProducto").selectedIndex;
 
 		switch(sha)
  		{ 
			case 0: document.getElementById("imgProducto").src="Img/Productos/Consultas/Variedad_Shampoo.png"; break;
			case 1: document.getElementById("imgProducto").src="Img/Productos/Consultas/Anticaída.png"; break;
 	   		case 2: document.getElementById("imgProducto").src="Img/Productos/Consultas/Anticaspa.png"; break;
			case 3: document.getElementById("imgProducto").src="Img/Productos/Consultas/Facial.png"; break;
			case 4: document.getElementById("imgProducto").src="Img/Productos/Consultas/Revitalizante.png"; break;
  		}
  	}

	if(document.getElementById('optFragancia').checked)
	{
		fra=document.getElementById("lstProducto").selectedIndex;
 
 		switch(fra)
  		{ 
			case 0: document.getElementById("imgProducto").src="Img/Productos/Consultas/Variedad_Fragancia.png"; break;
			case 1: document.getElementById("imgProducto").src="Img/Productos/Consultas/Frutal.png"; break;
 	   		case 2: document.getElementById("imgProducto").src="Img/Productos/Consultas/Floral.png"; break;
			case 3: document.getElementById("imgProducto").src="Img/Productos/Consultas/Especiado.png"; break;
			case 4: document.getElementById("imgProducto").src="Img/Productos/Consultas/Oriental.png"; break;
  		}
  	}
}
		
function botonConsultar(frmPrecios)
{ //&& es "and" (en VB), unión lógica, != es "distinto de"
	if (document.frmPrecios.txtCantidad.value != "")
    {
    	document.getElementById('cmdConsultar').disabled = false;
    }
    else
    {
		document.frmPrecios.Consultar.disabled = true;
	}
}

function BotonLimpiar()
{
	document.getElementById("imgProducto").src="Img/Productos/Consultas/Default.png";
	CargarLista(4);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Página Juegos

function jugar_Adiv()
{
	var min = 1;
	var max = 10;
	var cant_intentos = 4;
	var numero_aleatorio = Math.round(Math.random() * (max - min) + min);
	var numero;
	var nombre_Adiv=document.getElementById("txtNombre_Adiv").value;
	var audio = new Audio('Audio/WinGame.mp3');

	if(nombre_Adiv=="" || nombre_Adiv==" " || nombre_Adiv==" " || nombre_Adiv=="  " || nombre_Adiv=="  " ||(nombre_Adiv <= 0 || nombre_Adiv >0))
	{
		alert("¡Debes Ingresar un Nombre para poder JUGAR!");
	}
	else
	{   //La \t representa 32 espacios en blanco y a veces se centra con una sola (solo funciona en firefox), cada "espacio", representa 4 espacios en blanco
		alert("   ¡Bienvenido!, antes de comenzar, lee esto:\n\n   Al realizar tus intentos nº 2 y 3, se te dará una pista (debes ingresar un número ya que si apretas cancelar, no escribes nada, escribes una letra u otro caracter, la pista no será otorgada).\n\n\t\t\t\t\t\t\t   ¡A jugar!");
		numero= parseInt( prompt("Ingresa un número" + "\n\n Tienes " + cant_intentos + " intentos"));
		cant_intentos--;

		if (numero==numero_aleatorio)
		{
			audio.play();
			alert("¡Felicitaciones, GANASTE!" + "\n\n\tEl número era: " + numero_aleatorio);
		}
		else
		{
			var INC = confirm("    INCORRECTO" + "\n\nIntentos restantes: " + cant_intentos);

			if(INC == false)
			{
				prompt.close();
			}

			numero= parseInt( prompt("Ingresa un número" + "\n\nQuedan " + cant_intentos + " intentos"));
			cant_intentos--;
		}
			if (numero==numero_aleatorio)
			{
				audio.play();
				alert("¡Felicitaciones, GANASTE!" + "\n\n\tEl número era: " + numero_aleatorio);
			}
			else
			{
				var INC = confirm("    INCORRECTO" + "\n\nIntentos restantes: " + cant_intentos);

				if(INC == false)
				{
					prompt.close();
				}
				
				if (numero<numero_aleatorio)
				{
					alert("*** PISTA: es mayor ***" + "\n\n  Intentos restantes: " + cant_intentos);
				}
				else if (numero>numero_aleatorio)
				{
					alert("*** PISTA: es menor ***" + "\n\n  Intentos restantes: " + cant_intentos);
				}
				
				numero= parseInt( prompt("Ingresa un número" + "\n\nQuedan " + cant_intentos + " intentos"));
				cant_intentos--;

				if (numero==numero_aleatorio)
				{
					audio.play();
					alert("¡Felicitaciones, GANASTE!" + "\n\n\tEl número era: " + numero_aleatorio);
				}

				else
				{
					var INC = confirm("    INCORRECTO" + "\n\nIntentos restantes: " + cant_intentos);

					if(INC == false)
					{
						prompt.close();
					}

					if (numero<numero_aleatorio)
					{
						alert("*** PISTA: es mayor ***" + "\n\n  Intentos restantes: " + cant_intentos);
					}
					else if (numero>numero_aleatorio)
					{
						alert("*** PISTA: es menor ***" + "\n\n  Intentos restantes: " + cant_intentos);
					}

					numero= parseInt( prompt("Ingresa un número" + "\n\nQuedan " + cant_intentos + " intentos"));
					cant_intentos--;

					if (numero==numero_aleatorio)
					{
						audio.play();
						alert("¡Felicitaciones, GANASTE!" + "\n\n\tEl número era: " + numero_aleatorio);
					}

					else
					{
						alert("    INCORRECTO" + "\n\nIntentos restantes: " + cant_intentos);
						alert("GAME OVER")
					}
				}
			}

		document.getElementById("respuesta").innerHTML="El número era: <strong>" + numero_aleatorio + "</strong>"
		

	}

}

function info_Adiv()
{
	alert("   Algunas alertas del juego, están centradas y tienen saltos de línea. Lo primero, solo funciona con el navegador firefox (en chrome y edge no funciona, no probé con otros navegadores) y lo segundo, creo que funciona para cualquier navegador (en chrome y edge anda, ya probaré otros navegadores).\n\n   Nota: una forma para centrar compatible con cualquier navegador es añadiendo espacios antes de las palabras.\n\n   Nota 2: al obtener un INCORRECTO, podrán salir del juego presionando 'cancelar'. En la parte donde ingresan el número no funciona el cancelar (sigue el juego), no pude hacerlo andar.\n\n   Nota 3: tanto el juego como la página tienen algunos sonidos de prueba.");
}

function play_single_sound()
{
	document.getElementById('audWinGame').play();
}