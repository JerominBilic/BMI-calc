//<= to 18.5 - Under Weight
//<= to 24.9 - Normal Weight
//<= to 29.9 - Overweight
//> to 30 - Obese

$(document).ready(function(){
    $('#calculate').click(function(){
       let weight = $("input[name=weight]").val();
       let height = $('input[name=height]').val();

        let bmi = weight/(Math.pow(height,2));
        let bodytype = '';
        let picture = '';

        if(bmi <= 18.5){
           bodytype = 'Under weight'}
       else if(bmi > 18.5 & bmi <=24.9){
           bodytype = 'Normal weight'}
       else if(bmi >24.9 & bmi <= 29.9){
           bodytype = 'Overweight'}
       else if (bmi > 29.9){
        bodytype = 'Obese'}

        let underpic = $("#under");
        let normal = $("#normal");
        let over = $("#over");
        let obese = $("#obese");
        let finalpicture = "";

        if(bodytype == 'Under weight'){
            finalpicture = underpic;
        }else if(bodytype == 'Normal weight'){
            finalpicture = normal;
        }else if(bodytype == 'Overweight'){
            finalpicture = over;
        }else if(bodytype == 'Obese'){
            finalpicture = obese;
        }


       let output = `Your BMI is ${bmi.toFixed(1)} and your bodytype is '${bodytype}' <br>`;

        $("#resultheader").html('<b>Your Results:');
        $("#result").html(output);
        $("#finalpicture").html(finalpicture);


    });
});

