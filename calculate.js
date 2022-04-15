function scroll(){
    
}

function formular_1(){
    var param1 = +document.getElementById("param1").value;
    var param2 = +document.getElementById("param2").value;

    
    var answer_1 = 1 + ((param1 - 1) / 2)*Math.pow(param2, 2);
    var answer_2 = Math.pow(answer_1, param1/(param1 - 1));
    var answer_3 = Math.pow(answer_1, 1/(param1 - 1));
    
    document.getElementById("answer_formular_1-1").innerHTML = answer_1.toFixed(3);
    document.getElementById("answer_formular_1-2").innerHTML = answer_2.toFixed(3);
    document.getElementById("answer_formular_1-3").innerHTML = answer_3.toFixed(3);
}

