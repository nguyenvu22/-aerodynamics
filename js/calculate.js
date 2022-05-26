const R = 287;

function formular_1(){
    var param1 = +document.getElementById("param_1-1").value;       //1 < Y <= 2
    var param2 = +document.getElementById("param_1-2").value;       //0 < M < 5

    if(param1 <= 1 || param1 > 2){
        document.getElementById("valid_1-1").style.opacity = 1;
    }else{
        document.getElementById("valid_1-1").style.opacity = 0;
    }

    if(param2 <= 0 || param2 >= 5){
        document.getElementById("valid_1-2").style.opacity = 1;
    }else{
        document.getElementById("valid_1-2").style.opacity = 0;
    }

    if(param1 > 1 && param1 <= 2 && param2 > 0 && param2 < 5){
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
    var param1 = +document.getElementById("param_2-1").value;       //1 < Y <= 2
    var param2 = +document.getElementById("param_2-2").value;       //1 < M < 5

    if(param1 <= 1 || param1 > 2){
        document.getElementById("valid_2-1").style.opacity = 1;
    }else{
        document.getElementById("valid_2-1").style.opacity = 0;
    }
    
    if(param2 <= 1 || param2 >= 5){
        document.getElementById("valid_2-2").style.opacity = 1;
    }else{
        document.getElementById("valid_2-2").style.opacity = 0;
    }

    if(param1 > 1 && param1 <= 2 && param2 > 1 && param2 < 5){
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
        document.getElementById("answer_formular_2-1").innerHTML = "_______";
        document.getElementById("answer_formular_2-2").innerHTML = "_______";
        document.getElementById("answer_formular_2-3").innerHTML = "_______";
        document.getElementById("answer_formular_2-4").innerHTML = "_______";
        document.getElementById("answer_formular_2-5").innerHTML = "_______";
        document.getElementById("answer_formular_2-6").innerHTML = "_______";
    }
}

function formular_3(){
    var param1 = +document.getElementById("param_3-1").value;           //1 < Y <= 2
    var param2 = +document.getElementById("param_3-2").value;           // M > 0 (M > 0.5) => 0 < M < 5

    if(param1 <= 1 || param1 > 2){
        document.getElementById("valid_3-1").style.opacity = 1;
    }else{
        document.getElementById("valid_3-1").style.opacity = 0;
    }

    if(param2 <= 0 || param2 >= 5){
        document.getElementById("valid_3-2").style.opacity = 1;
    }else{
        document.getElementById("valid_3-2").style.opacity = 0;
    }

    if(param1 > 1 && param1 <= 2 && param2 >= 1 && param2 < 5){
        document.getElementById("case_3-1").style.opacity = 0.3;
        document.getElementById("case_3-2").style.opacity = 1;

        var answer = Math.pow( (((param1 + 1)*(param1 + 1)*param2*param2) / (4*param1*param2*param2 - 2*(param1 - 1))) , ( param1/(param1 - 1) )) * ((1 - param1 + 2*param1*param2*param2)/(param1 + 1));
        
        document.getElementById("answer_formular_3").innerHTML = answer.toFixed(3);
    }else if(param1 > 1 && param2 < 1 && param2 > 0){
        document.getElementById("case_3-1").style.opacity = 1;
        document.getElementById("case_3-2").style.opacity = 0.3;

        var cp = (param1 * R) / (param1 - 1);

        var s1s2 = cp * Math.log( (1 + ( (2*param1/(param1 + 1)) * (param2*param2 - 1) )) * ( (2 + param2*param2*(param1 - 1)) / (param2*param2*(param1 + 1)) ) )
        - R*Math.log(1 + (2*param1/(param1 + 1))*(param2*param2 - 1));

        var answer_part1 = Math.pow(Math.E, -(s1s2)/R);

        var answer_part2 = Math.pow(1 + param2*param2*((param1 - 1)/2), param1/(param1 - 1));

        var answer = answer_part1 * answer_part2;

        document.getElementById("answer_formular_3").innerHTML = answer.toFixed(3);
    }else{
        document.getElementById("answer_formular_3").innerHTML = "__________";
        document.getElementById("case_3-1").style.opacity = 0.3;
        document.getElementById("case_3-2").style.opacity = 0.3;
    }

}

function formular_4(){
    var param1 = +document.getElementById("param_4-1").value;       //1 < Y <= 2
    var param2 = +document.getElementById("param_4-2").value;       //M1 > 1.8 && M1 <= 5
    var param3 = +document.getElementById("param_4-3").value;       //-40 <= Thetaa < 41

    if(param1 <= 1 || param1 > 2){
        document.getElementById("valid_4-1").style.opacity = 1;
    }else{
        document.getElementById("valid_4-1").style.opacity = 0;
    }

    if(param2 < 1 || param2 > 5){
        document.getElementById("valid_4-2").style.opacity = 1;
    }else{
        document.getElementById("valid_4-2").style.opacity = 0;
    }

    var checkCondition = true;
    if(param3 >= 22 && param3 < 30 && param2 <= 2){
        document.getElementById("valid_4-2-1").style.display = "block";
        checkCondition = false;
    }else{
        document.getElementById("valid_4-2-1").style.display = "none";
    }

    if(param3 >= 30 && param3 < 34 && param2 <= 2.5){
        document.getElementById("valid_4-2-2").style.display = "block";
        checkCondition = false;
    }else{
        document.getElementById("valid_4-2-2").style.display = "none";
    }

    if(param3 >= 34 && param3 <= 40 && param2 <= 3){
        document.getElementById("valid_4-2-3").style.display = "block";
        checkCondition = false;
    }else{
        document.getElementById("valid_4-2-3").style.display = "none";
    }

    if(param3 > 40 && param2 <= 4){
        document.getElementById("valid_4-2-4").style.display = "block";
        checkCondition = false;
    }else{
        document.getElementById("valid_4-2-4").style.display = "none";
    }

    if(param3 < -40 || param3 >= 41){
        document.getElementById("valid_4-3").style.opacity = 1;
    }else{
        document.getElementById("valid_4-3").style.opacity = 0;
    }

    if(param3 === 0){
        document.getElementById("param_4-3").value = 0;
    }else{
        document.getElementById("param_4-3").value = "";
    }

    if(param1 > 1 && param1 <= 2 && param2 >= 1 && param2 <= 5 && param3 >= -40 && param3 < 41 && checkCondition === true){
        var landa = Math.sqrt( Math.pow((param2*param2 - 1), 2) - 3*(1+((param1-1)/2)*param2*param2)*(1+((param1+1)/2)*param2*param2)*Math.pow(Math.tan(param3*Math.PI/180), 2) );
        
        var x = ( Math.pow((param2*param2-1), 3) - 9 * (1+((param1-1)/2)*param2*param2) * ( 1+((param1-1)/2)*param2*param2+(Math.pow(param2, 4)*((param1+1)/4)) ) * Math.pow(Math.tan(param3*Math.PI/180), 2) ) / (Math.pow(landa, 3));
        
        var tanB = ( (param2*param2-1) + 2*landa*Math.cos((4*Math.PI*1 + Math.acos(x))/3) ) / ( 3*(1 + ((param1-1)/2)*param2*param2)*Math.tan(param3*Math.PI/180) );
        
        var arcB = Math.atan(tanB);
        
        var answer_1 = arcB;
        
        var answer_2 = param2*Math.sin(arcB)
        
        var answer_3 = ( 1 + (2*param1/(param1+1)) * (Math.pow(answer_2, 2)-1) );
        
        var answer_4 = ( (1 + (2*param1/(param1+1)) * (Math.pow(answer_2, 2)-1)) * ((2+answer_2*answer_2*(param1-1)) / (answer_2*answer_2*(param1+1))) );
        
        var answer_5 = (( 2 / ((param1+1)*Math.pow((param1*answer_2*answer_2-((param1-1)/2)), 1/(param1-1))) ) * (Math.pow(((Math.pow(((param1+1)*answer_2*answer_2)/2, 2)) / (1+((param1-1)*answer_2*answer_2)/2)), param1/(param1-1))));
        
        var answer_6 = (1 + ((param1-1)/2)*param2*param2);
//------sinB
        var answer_7 = Math.sqrt((1 + ((param1-1)/2) * (Math.pow(param2*Math.sin((answer_1)), 2))) / ((param1) * (Math.pow(param2*Math.sin((answer_1)), 2)) - ((param1-1)/2)));

        var answer_8 = answer_7 / Math.sin(answer_1 - (param3*Math.PI/180));

        answer_1 = answer_1*180/Math.PI;
        
        document.getElementById("answer_formular_4-1").innerHTML = answer_1.toFixed(3) + "&deg";
        document.getElementById("answer_formular_4-2").innerHTML = answer_2.toFixed(3);
        document.getElementById("answer_formular_4-3").innerHTML = answer_3.toFixed(3);
        document.getElementById("answer_formular_4-4").innerHTML = answer_4.toFixed(3);
        document.getElementById("answer_formular_4-5").innerHTML = answer_5.toFixed(3);
        document.getElementById("answer_formular_4-6").innerHTML = answer_6.toFixed(3);
        document.getElementById("answer_formular_4-7").innerHTML = answer_7.toFixed(3);
        document.getElementById("answer_formular_4-8").innerHTML = answer_8.toFixed(3);
    }else{
        document.getElementById("answer_formular_4-1").innerHTML = "_______";
        document.getElementById("answer_formular_4-2").innerHTML = "_______";
        document.getElementById("answer_formular_4-3").innerHTML = "_______";
        document.getElementById("answer_formular_4-4").innerHTML = "_______";
        document.getElementById("answer_formular_4-5").innerHTML = "_______";
        document.getElementById("answer_formular_4-6").innerHTML = "_______";
        document.getElementById("answer_formular_4-7").innerHTML = "_______";
        document.getElementById("answer_formular_4-8").innerHTML = "_______";
    }
    
}

function calcNewM2(oldM2, theta, vM1, Y){
    let newM2;
    let derivativeM2 = (1/oldM2) * ((Math.sqrt(oldM2*oldM2-1)) / (1+oldM2*oldM2*((Y-1)/2)));
    let vM2 = (Math.sqrt( (Y+1)/(Y-1) ) * Math.atan( Math.sqrt( ((Y-1)/(Y+1)) *(oldM2*oldM2-1)) )) - Math.atan(Math.sqrt(oldM2*oldM2-1));
    newM2 = oldM2 + ((theta*Math.PI/180 + vM1 - vM2) / (derivativeM2));
    return newM2;
}

function formular_5(){
    var param1 = +document.getElementById("param_5-1").value;       //1 < Y <= 2
    var param2 = +document.getElementById("param_5-2").value;       //M1 > 1
    var param3 = +document.getElementById("param_5-3").value;       //-90 < Thetaa < 90

    if(param1 <= 1 || param1 > 2){
        document.getElementById("valid_5-1").style.opacity = 1;
    }else{
        document.getElementById("valid_5-1").style.opacity = 0;
    }

    if(param2 <= 1){
        document.getElementById("valid_5-2").style.opacity = 1;
    }else{
        document.getElementById("valid_5-2").style.opacity = 0;
    }

    if(param3 <= -90 || param3 >= 90){
        document.getElementById("valid_5-3").style.opacity = 1;
    }else{
        document.getElementById("valid_5-3").style.opacity = 0;
    }

    if(param1 > 1 && param1 <= 2 && param2 > 1 && param3 > -90 && param3 < 90){
        var u1 = Math.asin(1/param2) * 180/Math.PI;
        var vM1 = (Math.sqrt((param1+1)/(param1-1)) * Math.atan( Math.sqrt(((param1-1)/(param1+1)) * (param2*param2-1)) )) - Math.atan(Math.sqrt(param2*param2-1));
        var vM2 = param3 + vM1*180/Math.PI;

        //--------------------------------------------------------------------
        var m2 = param2 + 0.1;      //Assume
        var m2_previous = m2;
        var m2_after = calcNewM2(m2_previous, param3, vM1, param1);

        do{
            var compare = Math.abs(m2_after - m2_previous);
            if(compare > 0.05){
                m2_previous = m2_after;
                m2_after = calcNewM2(m2_previous, param3, vM1, param1)
            }
        }while(compare > 0.05);

        var u2 = Math.asin(1/m2_after) * 180/Math.PI;
        //--------------------------------------------------------------------
        vM1 = vM1*180/Math.PI;
        var answer_5 = Math.pow((1+param2*param2*((param1-1)/2)) / ((1+m2_after*m2_after*((param1-1)/2))), (param1/(param1-1)));
        var answer_6 = (1+param2*param2*((param1-1)/2)) / ((1+m2_after*m2_after*((param1-1)/2)));

        document.getElementById("answer_formular_5-1").innerHTML = u1.toFixed(2) + "&deg";
        document.getElementById("answer_formular_5-2").innerHTML = u2.toFixed(2) + "&deg";
        document.getElementById("answer_formular_5-3").innerHTML = vM1.toFixed(2) + "&deg";
        document.getElementById("answer_formular_5-4").innerHTML = vM2.toFixed(2) + "&deg";
        document.getElementById("answer_formular_5-5").innerHTML = answer_5.toFixed(3);
        document.getElementById("answer_formular_5-6").innerHTML = answer_6.toFixed(3);
        document.getElementById("answer_formular_5-7").innerHTML = m2_after.toFixed(3);
    }else{
        document.getElementById("answer_formular_5-1").innerHTML = "_______";
        document.getElementById("answer_formular_5-2").innerHTML = "_______";
        document.getElementById("answer_formular_5-3").innerHTML = "______________";
        document.getElementById("answer_formular_5-4").innerHTML = "______________";
        document.getElementById("answer_formular_5-5").innerHTML = " _______";
        document.getElementById("answer_formular_5-6").innerHTML = " _______";
        document.getElementById("answer_formular_5-7").innerHTML = " _______";
    }

}

