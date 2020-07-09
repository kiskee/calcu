var calcu = {

  pantalla: document.getElementById('display'),
  valorPantalla: "0",
  operacion:"",
  valor1:0,
  valor2:0,
  valor3:0,
  resultado:0,
  teclaigual:false,

  init:(function(){
    this.asignarEventoBotones1(".tecla");
    this.asignarEventoBotones();
  }),


  asignarEventoBotones1: function(selector){
    var x = document.querySelectorAll(selector);
    for (var i = 0; i<x.length;i++){
      x[i].onmouseover = this.reduceLetra;
      x[i].onmouseleave = this.aumentaLetra;
    };
  },

  reduceLetra: function(event){
    calcu.botonSmall(event.target);
  },

  aumentaLetra: function(event){
    calcu.botonNormal(event.target);
  },

  botonSmall: function(elemento){
    var x = elemento.id;
    if (x=="1" || x=="2" || x=="3" || x=="0" || x=="igual" || x=="punto"){
      elemento.style.width = "28%";
      elemento.style.height = "62px";
    }else if(x=="mas"){
      elemento.style.width = "88%";
      elemento.style.height = "98%";
    }else{
      elemento.style.width = "21%";
      elemento.style.height = "62px";
    }
  },

  botonNormal: function(elemento){
    var x = elemento.id;
    if (x=="1" || x=="2" || x=="3" || x=="0" || x=="igual" || x=="punto"){
      elemento.style.width="29%";
      elemento.style.height="61.91px";
    }else if (x=="mas"){
      elemento.style.width="92%";
      elemento.style.height="100%";
    }else{
      elemento.style.width="22%";
      elemento.style.height="60.91px";
    }
  },

  asignarEventoBotones: function(){
  	document.getElementById('0').addEventListener("click", function(){calcu.numeroIngresado("0");});
  	document.getElementById('1').addEventListener("click", function(){calcu.numeroIngresado("1");});
  	document.getElementById('2').addEventListener("click", function(){calcu.numeroIngresado("2");});
  	document.getElementById('3').addEventListener("click", function(){calcu.numeroIngresado("3");});
  	document.getElementById('4').addEventListener("click", function(){calcu.numeroIngresado("4");});
  	document.getElementById('5').addEventListener("click", function(){calcu.numeroIngresado("5");});
  	document.getElementById('6').addEventListener("click", function(){calcu.numeroIngresado("6");});
  	document.getElementById('7').addEventListener("click", function(){calcu.numeroIngresado("7");});
  	document.getElementById('8').addEventListener("click", function(){calcu.numeroIngresado("8");});
  	document.getElementById('9').addEventListener("click", function(){calcu.numeroIngresado("9");});
  	document.getElementById('on').addEventListener("click", function(){calcu.borrarPantalla();});
  	document.getElementById("sign").addEventListener("click", function() {calcu.signo();});
  	document.getElementById("punto").addEventListener("click", function() {calcu.puntoParaDecimal();});
  	document.getElementById("igual").addEventListener("click", function() {calcu.resultado1();});
  	document.getElementById("raiz").addEventListener("click", function() {calcu.operacionSigno("raiz");});
  	document.getElementById("dividido").addEventListener("click", function() {calcu.operacionSigno("/");});
  	document.getElementById("por").addEventListener("click", function() {calcu.operacionSigno("*");});
  	document.getElementById("menos").addEventListener("click", function() {calcu.operacionSigno("-");});
  	document.getElementById("mas").addEventListener("click", function() {calcu.operacionSigno("+");});
  },

  borrarPantalla: function(){
    this.valorPantalla="0";
    this.operacion="";
    this.valor1=0;
    this.valor2=0;
    this.resultado=0;
    this.operacion="";
    this.teclaigual= false;
    this.valor3=0;
    this.actualizaPantalla();
  },
    signo: function(){
      if (this.valorPantalla !="0"){
        var ing;
        if (this.valorPantalla.charAt(0)=="-"){
          ing = this.valorPantalla.slice(1);
        }else {
          ing = "-" + this.valorPantalla;
        }
        this.valorPantalla="";
        this.valorPantalla=ing;
        this.actualizaPantalla();
      }
    },
    puntoParaDecimal: function(){
      if (this.valorPantalla.indexOf("-")== -1){
        if (this.valorPantalla == ""){
          this.valorPantalla = this.valorPantalla + "0";
        }else{
          this.valorPantalla = this.valorPantalla + ".";
        }
        this.actualizaPantalla();
      }
    },
    numeroIngresado:function(valor){
      if(this.valorPantalla.length<8){
        if (this.valorPantalla=="0"){
          this.valorPantalla="";
          this.valorPantalla = this.valorPantalla+valor;
        }else{
          this.valorPantalla = this.valorPantalla+valor;
        }
        this.actualizaPantalla();
      }
    },

    operacionSigno: function(oper){
  		this.valor1 = parseFloat(this.valorPantalla);
  		this.valorPantalla = "";
  		this.operacion = oper;
  		this.teclaigual = false;
  		this.actualizaPantalla();
  	},

    resultado1: function(){
      if (!this.teclaigual){
        this.valor2 = parseFloat(this.valorPantalla);
        this.valor3 = this.valor2;
  			this.operacionHecha(this.valor1, this.valor2, this.operacion);

  		} else {
  			this.operacionHecha(this.valor1, this.valor3, this.operacion);
  		}

  		this.valor1 = this.resultado;
  		this.valorPantalla = "";

  		if (this.resultado.toString().length < 9){
  			this.valorPantalla = this.resultado.toString();
  		} else {
  			this.valorPantalla = this.resultado.toString().slice(0,8) + "...";
  		}

  		this.teclaigual = true;
  		this.actualizaPantalla();

  	},
      operacionHecha: function(valor1, valor2, operacion){
      switch(operacion){
        case "+":
          this.resultado = eval(valor1 + valor2);
        break;
        case "-":
          this.resultado = eval(valor1 - valor2);
        break;
        case "*":
          this.resultado = eval(valor1 * valor2);
        break;
        case "/":
          this.resultado = eval(valor1 / valor2);
        break;
        case "raiz":
          this.resultado = eval(Math.sqrt(valor1));
      }
    },

    actualizaPantalla: function(){
  		this.pantalla.innerHTML = this.valorPantalla;
  	}

};

calcu.init();
