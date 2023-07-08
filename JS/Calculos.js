

function CalcularKelvin(){
    var kelvin = parseFloat(document.getElementById("txtTempe").value);
    var celsius =(kelvin) - 273.15;
    document.getElementById("resultadoTemperatura").innerHTML=celsius;
}

function CalcularFahrenheit(){
    var  fahrenheit= parseFloat(document.getElementById("txtTempe").value);
    var  celsius= (fahrenheit - 32) * 5/9;
    document.getElementById("resultadoTemperatura").innerHTML=celsius;
}

function CalcularPulgadas(){
    var pulgadas= parseFloat(document.getElementById("txtMedida").value);
    var cm = pulgadas*2.54;
    document.getElementById("resultadoMedida").innerHTML=cm;
}

function CalcularPies(){
    var pies = parseFloat(document.getElementById("txtMedida").value);
    var cm= pies*30.48;
    document.getElementById("resultadoMedida").innerHTML=cm;
}

function CalcularYardas(){
    var yardas= parseFloat(document.getElementById("txtMedida").value);
    var cm = yardas*91.44;
    document.getElementById("resultadoMedida").innerHTML=cm;
}

function CalcularMillas(){
    var millas= parseFloat(document.getElementById("txtMedida").value);
    var cm = millas*160934.4;
    document.getElementById("resultadoMedida").innerHTML=cm;
}

function CalcularDolarUSA(){
    var dolarUSA = parseFloat(document.getElementById("txtMoneda").value);
    var pesoMX = dolarUSA *24.04;
    document.getElementById("resultadoMoneda").innerHTML=pesoMX;
}

function CalcularDolarCAN(){
    var dolarCAN = parseFloat(document.getElementById("txtMoneda").value);
    var pesoMX = dolarCAN *17.24;
    document.getElementById("resultadoMoneda").innerHTML=pesoMX;
}

function CalcularEuro(){
    var euro = parseFloat(document.getElementById("txtMoneda").value);
    var pesoMX = euro *26.2;
    document.getElementById("resultadoMoneda").innerHTML=pesoMX;
}

function CalcularLibraEsterlina(){
    var libraEstelina = parseFloat(document.getElementById("txtMoneda").value);
    var pesoMX = libraEstelina *30.05;
    document.getElementById("resultadoMoneda").innerHTML=pesoMX;
}

function CalcularPesoChileno(){
    var pesoChileno = parseFloat(document.getElementById("txtMoneda").value);
    var pesoMX = pesoChileno *0.028;
    document.getElementById("resultadoMoneda").innerHTML=pesoMX;
}

function CalcularPesoUruguayo(){
    var pesoUruguayo = parseFloat(document.getElementById("txtMoneda").value);
    var pesoMX = pesoUruguayo *0.56;
    document.getElementById("resultadoMoneda").innerHTML=pesoMX;
}

function CalcularRupia(){
    var rupia = parseFloat(document.getElementById("txtMoneda").value);
    var pesoMX = rupia *0.32;
    document.getElementById("resultadoMoneda").innerHTML=pesoMX;
}

function CalcularYen(){
    var yen = parseFloat(document.getElementById("txtMoneda").value);
    var pesoMX = yen *0.22;
    document.getElementById("resultadoMoneda").innerHTML=pesoMX;
}

function CalcularZloty(){
    var zloty = parseFloat(document.getElementById("txtMoneda").value);
    var pesoMX = zloty *5.78;
    document.getElementById("resultadoMoneda").innerHTML=pesoMX;
}