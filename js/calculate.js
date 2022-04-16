const R = 287;

function formular_1(){
    var param1 = +document.getElementById("param_1-1").value;       //Y > 1
    var param2 = +document.getElementById("param_1-2").value;       //M 0 -> 5

    if(param1 <= 1){
        document.getElementById("valid_1-1").style.display = "block";
    }else{
        document.getElementById("valid_1-1").style.display = "none";
    }

    if(param2 <= 0 || param2 >= 5){
        document.getElementById("valid_1-2").style.display = "block";
    }else{
        document.getElementById("valid_1-2").style.display = "none";
    }

    if(param1 > 1 && param2 > 0 && param2 < 5){
        var answer_1 = 1 + ((param1 - 1) / 2)*Math.pow(param2, 2);
        var answer_2 = Math.pow(answer_1, param1/(param1 - 1));
        var answer_3 = Math.pow(answer_1, 1/(param1 - 1));
           
        document.getElementById("answer_formular_1-1").innerHTML = answer_1.toFixed(3);
        document.getElementById("answer_formular_1-2").innerHTML = answer_2.toFixed(3);
        document.getElementById("answer_formular_1-3").innerHTML = answer_3.toFixed(3);
    }else{
        document.getElementById("answer_formular_1-1").innerHTML = "__________";
        document.getElementById("answer_formular_1-2").innerHTML = "__________";
        document.getElementById("answer_formular_1-3").innerHTML = "__________";
    }
}

function formular_2(){
    var param1 = +document.getElementById("param_2-1").value;       //y > 1
    var param2 = +document.getElementById("param_2-2").value;       //M 1 -> 5 

    if(param1 <= 1){
        document.getElementById("valid_2-1").style.display = "block";
    }else{
        document.getElementById("valid_2-1").style.display = "none";
    }
    
    if(param2 < 1 || param2 > 5){
        document.getElementById("valid_2-2").style.display = "block";
    }else{
        document.getElementById("valid_2-2").style.display = "none";
    }

    if(param1 > 1 && param2 >= 1 && param2 <= 5){
        var answer_1 = Math.sqrt( (1 + ( (param1-1)/2 ) * param2*param2) / (param1*param2*param2 - ( (param1-1)/2 )) );
        
        var answer_2 = (( (param1+1)*param2*param2 ) / ( 2 + (param1-1)*param2*param2 ));
        
        var answer_3 = (1 + ( (2*param1/(param1+1)) * (param2*param2-1) ));
        
        var answer_4 = (1 + (2*param1/(param1+1)) * (param2*param2-1)) * ((2 + (param1-1)*param2*param2) / ((param1+1)*param2*param2));
        
        var s2_s1 = ((param1 * R) / (param1 - 1)) * Math.log( (1 + ( (2*param1/(param1 + 1)) * (param2*param2 - 1) )) * ( (2 + param2*param2*(param1 - 1)) / (param2*param2*(param1 + 1)) ) )
        - R*Math.log(1 + (2*param1/(param1 + 1))*(param2*param2 - 1));
        
        var answer_5 = Math.pow(Math.E, -(s2_s1)/R);
        
        var answer_6 = Math.pow(((param2*param2*(param1+1)*(param1+1)) / (4*param1*param2*param2 - 2*(param1-1))), param1/(param1-1)) * ((1 - param1 + 2*param1*param2*param2) / (param1 + 1));
        
        document.getElementById("answer_formular_2-1").innerHTML = answer_1.toFixed(3);
        document.getElementById("answer_formular_2-2").innerHTML = answer_2.toFixed(3);
        document.getElementById("answer_formular_2-3").innerHTML = answer_3.toFixed(3);
        document.getElementById("answer_formular_2-4").innerHTML = answer_4.toFixed(3);
        document.getElementById("answer_formular_2-5").innerHTML = answer_5.toFixed(3);
        document.getElementById("answer_formular_2-6").innerHTML = answer_6.toFixed(3);
    }else{
        document.getElementById("answer_formular_2-1").innerHTML = "__________";
        document.getElementById("answer_formular_2-2").innerHTML = "__________";
        document.getElementById("answer_formular_2-3").innerHTML = "__________";
        document.getElementById("answer_formular_2-4").innerHTML = "__________";
        document.getElementById("answer_formular_2-5").innerHTML = "__________";
        document.getElementById("answer_formular_2-6").innerHTML = "__________";
    }
}

function formular_3(){
    var param1 = +document.getElementById("param_3-1").value;           // gamma > 1
    var param2 = +document.getElementById("param_3-2").value;           // M > 0 (M > 0.5)

    if(param1 <= 1){
        document.getElementById("valid_3-1").style.display = "block";
    }else{
        document.getElementById("valid_3-1").style.display = "none";
    }

    if(param2 <= 0){
        document.getElementById("valid_3-2").style.display = "block";
    }else{
        document.getElementById("valid_3-2").style.display = "none";
    }

    if(param1 > 1 && param2 >= 1){
        document.getElementById("case_3-1").style.display = "none";
        document.getElementById("case_3-2").style.display = "block";

        var answer = Math.pow( (((param1 + 1)*(param1 + 1)*param2*param2) / (4*param1*param2*param2 - 2*(param1 - 1))) , ( param1/(param1 - 1) )) * ((1 - param1 + 2*param1*param2*param2)/(param1 + 1));
        document.getElementById("answer_formular_3").innerHTML = answer.toFixed(3);
    }else if(param1 > 1 && param2 < 1 && param2 > 0){
        document.getElementById("case_3-1").style.display = "block";
        document.getElementById("case_3-2").style.display = "none";

        var cp = (param1 * R) / (param1 - 1);

        var s1s2 = cp * Math.log( (1 + ( (2*param1/(param1 + 1)) * (param2*param2 - 1) )) * ( (2 + param2*param2*(param1 - 1)) / (param2*param2*(param1 + 1)) ) )
        - R*Math.log(1 + (2*param1/(param1 + 1))*(param2*param2 - 1));

        var answer_part1 = Math.pow(Math.E, -(s1s2)/R);

        var answer_part2 = Math.pow(1 + param2*param2*((param1 - 1)/2), param1/(param1 - 1));

        var answer = answer_part1 * answer_part2;

        document.getElementById("answer_formular_3").innerHTML = answer.toFixed(3);
    }else{
        document.getElementById("answer_formular_3").innerHTML = "__________";
        document.getElementById("case_3-1").style.display = "none";
        document.getElementById("case_3-2").style.display = "none";
    }

}

function formular_4(){
    var param1 = +document.getElementById("param_4-1").value;       //Y > 1
    var param2 = +document.getElementById("param_4-2").value;       //M > 1 ( > 1.8)
    var param3 = +document.getElementById("param_4-3").value;       //Tetaa 0 -> 180

    if(param1 <= 1){
        document.getElementById("valid_4-1").style.display = "block";
    }else{
        document.getElementById("valid_4-1").style.display = "none";
    }

    if(param2 <= 1){
        document.getElementById("valid_4-2").style.display = "block";
    }else{
        document.getElementById("valid_4-2").style.display = "none";
    }

    if(param3 <= 0 || param3 > 180){
        document.getElementById("valid_4-3").style.display = "block";
    }else{
        document.getElementById("valid_4-3").style.display = "none";
    }

    if(param1 > 1 && param2 > 1 && param3 > 0 && param3 <= 180){
        var landa = Math.sqrt( Math.pow((param2*param2 - 1), 2) - 3*(1+((param1-1)/2)*param2*param2)*(1+((param1+1)/2)*param2*param2)*Math.pow(Math.tan(param3*Math.PI/180), 2) );
        
        var x = ( Math.pow((param2*param2-1), 3) - 9 * (1+((param1-1)/2)*param2*param2) * ( 1+((param1-1)/2)*param2*param2+(Math.pow(param2, 4)*((param1+1)/4)) ) * Math.pow(Math.tan(param3*Math.PI/180), 2) ) / (Math.pow(landa, 3));
        
        var tanB = ( (param2*param2-1) + 2*landa*Math.cos((4*Math.PI*1 + Math.acos(x))/3) ) / ( 3*(1 + ((param1-1)/2)*param2*param2)*Math.tan(param3*Math.PI/180) );
        
        var arcB = Math.atan(tanB);
        
        var answer_1 = arcB*180/Math.PI;
        
        var answer_2 = param2*Math.sin(arcB)
        
        var answer_3 = (  1 + (2*param1/(param1+1)) * (Math.pow(answer_2, 2)-1) );
        
        var answer_4 = ( (1 + (2*param1/(param1+1)) * (Math.pow(answer_2, 2)-1)) * ((2+answer_2*answer_2*(param1-1)) / (answer_2*answer_2*(param1+1))) );
        
        var answer_5 = (( 2 / ((param1+1)*Math.pow((param1*answer_2*answer_2-((param1-1)/2)), 1/(param1-1))) ) * (Math.pow(((Math.pow(((param1+1)*answer_2*answer_2)/2, 2)) / (1+((param1-1)*answer_2*answer_2)/2)), param1/(param1-1))));
        
        var answer_6 = (1 + ((param1-1)/2)*param2*param2);
        
        document.getElementById("answer_formular_4-1").innerHTML = answer_1.toFixed(3);
        document.getElementById("answer_formular_4-2").innerHTML = answer_2.toFixed(3);
        document.getElementById("answer_formular_4-3").innerHTML = answer_3.toFixed(3);
        document.getElementById("answer_formular_4-4").innerHTML = answer_4.toFixed(3);
        document.getElementById("answer_formular_4-5").innerHTML = answer_5.toFixed(3);
        document.getElementById("answer_formular_4-6").innerHTML = answer_6.toFixed(3);
    }else{
        document.getElementById("answer_formular_4-1").innerHTML = "_______";
        document.getElementById("answer_formular_4-2").innerHTML = "_______";
        document.getElementById("answer_formular_4-3").innerHTML = "_______";
        document.getElementById("answer_formular_4-4").innerHTML = "_______";
        document.getElementById("answer_formular_4-5").innerHTML = "_______";
        document.getElementById("answer_formular_4-6").innerHTML = "_______";
    }
}

function formular_5(){

}

