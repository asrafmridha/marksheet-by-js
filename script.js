 
 function total(){

    var _theorymarks= document.getElementById("tm").value;
    var _practicalmarks= document.getElementById("pm").value;

    if(tm="" || pm= " "){

        alert ('Please push the number');
    }
    else{

        var total= parseInt(_practicalmarks)+parseInt(_theorymarks);
      
        document.getElementById("ttm").value=total;
    }
    
    


 }