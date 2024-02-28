function Suma(){
    let n1= Number(document.getElementById('n1').value);
    let n2= Number(document.getElementById('n2').value);
    let res = n1 + n2;
    document.getElementById('res').value=res;
    
}

function Resta{
    let num1= Number(document.getElementById('n1').value);
    let num2= Number(document.getElementById('n2').value);
    let res= num1-num2;
    document.getElementById('res').value=res;
}
function Multiplicacion{
    let num1= Number(document.getElementById('n1').value);
    let num2= Number(document.getElementById('n2').value);
    let res= num1*num2;
    document.getElementById('res').value=res;
}
function Division{
    let num1= Number(document.getElementById('n1').value);
    let num2= Number(document.getElementById('n2').value);
    //Manejo de la division por cero
    if (num2 !==0){
    let res= num1/num2;
    document.getElementById('res').value=res;
    }else{
        alert("No se puede dividir por cero");
    }
}