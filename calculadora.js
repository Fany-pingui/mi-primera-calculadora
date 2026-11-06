function calcular(operacion){
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let resultado;

    switch(operacion){
        case "multi": 
        resultado = n1 * n2;
        break; 

        case "div": 
        if(n2 == 0){
            document.getElementById("resultado").innerHTML = "No se puede dividir entre 0";
            return;
        }
        resultado = n1 / n2;
        break;
        
        case "sum": 
        resultado = n1 + n2;
        break; 

        case "res": 
        resultado = n1 - n2;
        break; 
        
    }
    document.getElementById("resultado").innerHTML = "resultado: " + resultado;
}