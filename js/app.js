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
    this.eventosBotones(".tecla");
    this.asignarEventoBotones();
  }),


  asignarEventoBotones: function(selector){
    var x = document.querySelectorAll(selector);
    for (var i = 0; i<x.length;i++){
      x[i].onclick = this.reduceLetra;
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
      elemento.style.width = "35%";
      elemento.style.height = "20%";
    }else if(x=="mas"){
      elemento.style.width = "90%";
      elemento.style.height = "98%";
    }else{
      elemento.style.width = "21%";
      elemento.style.height = "62%";
    }
  },

  botonNormal: function(elemento){
    var x = elemento.id;
    if (x=="1" || x=="2" || x=="3" || x=="0" || x=="igual" || x=="punto"){
      elemento.style.width="29%";
      elemento.style.height="61.91px";
    }else if (x=="mas"){
      elemento.style.width="92%";
      elemento.style.height="90%";
    }else{
      elemento.style.width="20%";
      elemento.style.height="60.91px";
    }
  },



  }
}

calcu.init();
