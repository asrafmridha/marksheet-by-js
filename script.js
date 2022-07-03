 
 function total(){

    var _theorymarks= document.getElementById("tm").value;
    var _practicalmarks= document.getElementById("pm").value;

     if( _theorymarks=="" || _practicalmarks=="" ){

   alert("Please Push a number");
     }
        var total= parseInt(_practicalmarks)+parseInt(_theorymarks);
      
        document.getElementById("ttm").value=total;

        if(total>=80 && total<=100){

            document.getElementById("grade").value= "A+";
        }
        else if(total>=70 && total<=79){

            document.getElementById("grade").value= "A";
        }
        else if(total>=60 && total<=69){

            document.getElementById("grade").value= "A-";
        }
        else if(total>=50 && total<=59){

            document.getElementById("grade").value= "B";
        }
        else if(total>=40 && total<=49){

            document.getElementById("grade").value= "C";
        }
        else if(total>=33 && total<=39){

            document.getElementById("grade").value= "D";
        }
        else if(total>=0 && total<=32){

            document.getElementById("grade").value= "F";
        }
    
    


 }