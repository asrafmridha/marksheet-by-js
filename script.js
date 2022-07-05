 
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

        else {

             alert("It's Not Possible");
             document.getElementById("tm").value= "";
             document.getElementById("pm").value= "";
             document.getElementById("ttm").value= "";
             document.getElementById("grade").value= "";
        }

        if(document.getElementById("grade").value == "A+" ){

            document.getElementById("point").value=5.00;
        }
       else if(document.getElementById("grade").value == "A" ){

            document.getElementById("point").value=4.00;
        }
        else if(document.getElementById("grade").value == "A-" ){

            document.getElementById("point").value=3.50;
        }
        else if(document.getElementById("grade").value == "B" ){

            document.getElementById("point").value=3.00;
        }
        else if(document.getElementById("grade").value == "C" ){

            document.getElementById("point").value=2.00;
        }
        else if(document.getElementById("grade").value == "D" ){

            document.getElementById("point").value=1.00;
        }

        else{

            document.getElementById("grade").value= "F";
            document.getElementById("point").value= "0";
          
        }
 }

//    New function for bangla 2nd paper 

 
function total1(){

    var _theorymarks= document.getElementById("tm1").value;
    var _practicalmarks= document.getElementById("pm1").value;

     if( _theorymarks=="" || _practicalmarks=="" ){

   alert("Please Push a number");
     }
        var total= parseInt(_practicalmarks)+parseInt(_theorymarks);
      
        document.getElementById("ttm1").value=total;

        if(total>=80 && total<=100){

            document.getElementById("grade1").value= "A+";
        }
        else if(total>=70 && total<=79){

            document.getElementById("grade1").value= "A";
        }
        else if(total>=60 && total<=69){

            document.getElementById("grade1").value= "A-";
        }
        else if(total>=50 && total<=59){

            document.getElementById("grade1").value= "B";
        }
        else if(total>=40 && total<=49){

            document.getElementById("grade1").value= "C";
        }
        else if(total>=33 && total<=39){

            document.getElementById("grade1").value= "D";
        }
        else if(total>=0 && total<=32){

            document.getElementById("grade1").value= "F";
        }

        else {

             alert("It's Not Possible");
             document.getElementById("tm1").value= "";
             document.getElementById("pm1").value= "";
             document.getElementById("ttm1").value= "";
             document.getElementById("grade1").value= "";
        }

        if(document.getElementById("grade1").value == "A+" ){

            document.getElementById("point1").value=5.00;
        }
       else if(document.getElementById("grade1").value == "A" ){

            document.getElementById("point1").value=4.00;
        }
        else if(document.getElementById("grade1").value == "A-" ){

            document.getElementById("point1").value=3.50;
        }
        else if(document.getElementById("grade1").value == "B" ){

            document.getElementById("point1").value=3.00;
        }
        else if(document.getElementById("grade1").value == "C" ){

            document.getElementById("point1").value=2.00;
        }
        else if(document.getElementById("grade1").value == "D" ){

            document.getElementById("point1").value=1.00;
        }

        else{

            document.getElementById("grade1").value= "F";
            document.getElementById("point1").value= "0";
          
        }

 }

//  Anothr Function Math  

function total3(){

    var _theorymarks= document.getElementById("tm3").value;
    var _practicalmarks= document.getElementById("pm3").value;

     if( _theorymarks=="" || _practicalmarks=="" ){

   alert("Please Push a number");
     }
        var total= parseInt(_practicalmarks)+parseInt(_theorymarks);
      
        document.getElementById("ttm3").value=total;

        if(total>=80 && total<=100){

            document.getElementById("grade3").value= "A+";
        }
        else if(total>=70 && total<=79){

            document.getElementById("grade3").value= "A";
        }
        else if(total>=60 && total<=69){

            document.getElementById("grade3").value= "A-";
        }
        else if(total>=50 && total<=59){

            document.getElementById("grade3").value= "B";
        }
        else if(total>=40 && total<=49){

            document.getElementById("grade3").value= "C";
        }
        else if(total>=33 && total<=39){

            document.getElementById("grade3").value= "D";
        }
        else if(total>=0 && total<=32){

            document.getElementById("grade3").value= "F";
        }

        else {

             alert("It's Not Possible");
             document.getElementById("tm3").value= "";
             document.getElementById("pm3").value= "";
             document.getElementById("ttm3").value= "";
             document.getElementById("grade3").value= "";
        }

        if(document.getElementById("grade3").value == "A+" ){

            document.getElementById("point3").value=5.00;
        }
       else if(document.getElementById("grade3").value == "A" ){

            document.getElementById("point3").value=4.00;
        }
        else if(document.getElementById("grade3").value == "A-" ){

            document.getElementById("point3").value=3.50;
        }
        else if(document.getElementById("grade3").value == "B" ){

            document.getElementById("point3").value=3.00;
        }
        else if(document.getElementById("grade3").value == "C" ){

            document.getElementById("point3").value=2.00;
        }
        else if(document.getElementById("grade3").value == "D" ){

            document.getElementById("point3").value=1.00;
        }

         else{

             document.getElementById("grade3").value= "F";
             document.getElementById("point3").value= "0";
          
         }

 }

    // Another function for social science 

    function total4(){

        var _theorymarks= document.getElementById("tm4").value;
        var _practicalmarks= document.getElementById("pm4").value;
    
         if( _theorymarks=="" || _practicalmarks=="" ){
    
       alert("Please Push a number");
         }
            var total= parseInt(_practicalmarks)+parseInt(_theorymarks);
          
            document.getElementById("ttm4").value=total;
    
            if(total>=80 && total<=100){
    
                document.getElementById("grade4").value= "A+";
            }
            else if(total>=70 && total<=79){
    
                document.getElementById("grade4").value= "A";
            }
            else if(total>=60 && total<=69){
    
                document.getElementById("grade4").value= "A-";
            }
            else if(total>=50 && total<=59){
    
                document.getElementById("grade4").value= "B";
            }
            else if(total>=40 && total<=49){
    
                document.getElementById("grade4").value= "C";
            }
            else if(total>=33 && total<=39){
    
                document.getElementById("grade4").value= "D";
            }
            else if(total>=0 && total<=32){
    
                document.getElementById("grade4").value= "F";
            }
    
            else {
    
                 alert("It's Not Possible");
                 document.getElementById("tm4").value= "";
                 document.getElementById("pm4").value= "";
                 document.getElementById("ttm4").value= "";
                 document.getElementById("grade4").value= "";
            }
    
            if(document.getElementById("grade4").value == "A+" ){
    
                document.getElementById("point4").value=5.00;
            }
           else if(document.getElementById("grade4").value == "A" ){
    
                document.getElementById("point4").value=4.00;
            }
            else if(document.getElementById("grade4").value == "A-" ){
    
                document.getElementById("point4").value=3.50;
            }
            else if(document.getElementById("grade4").value == "B" ){
    
                document.getElementById("point4").value=3.00;
            }
            else if(document.getElementById("grade4").value == "C" ){
    
                document.getElementById("point1").value=2.00;
            }
            else if(document.getElementById("grade1").value == "D" ){
    
                document.getElementById("point4").value=1.00;
            }
    
            else{
    
                document.getElementById("grade4").value= "F";
                document.getElementById("point4").value= "0";
              
            }
    
     }


         // Another function for General science 

    function total5(){

        var _theorymarks= document.getElementById("tm5").value;
        var _practicalmarks= document.getElementById("pm5").value;
    
         if( _theorymarks=="" || _practicalmarks=="" ){
    
       alert("Please Push a number");
         }
            var total= parseInt(_practicalmarks)+parseInt(_theorymarks);
          
            document.getElementById("ttm5").value=total;
    
            if(total>=80 && total<=100){
    
                document.getElementById("grade5").value= "A+";
            }
            else if(total>=70 && total<=79){
    
                document.getElementById("grade5").value= "A";
            }
            else if(total>=60 && total<=69){
    
                document.getElementById("grade5").value= "A-";
            }
            else if(total>=50 && total<=59){
    
                document.getElementById("grade5").value= "B";
            }
            else if(total>=40 && total<=49){
    
                document.getElementById("grade5").value= "C";
            }
            else if(total>=33 && total<=39){
    
                document.getElementById("grade5").value= "D";
            }
            else if(total>=0 && total<=32){
    
                document.getElementById("grade5").value= "F";
            }
    
            else {
    
                 alert("It's Not Possible");
                 document.getElementById("tm5").value= "";
                 document.getElementById("pm5").value= "";
                 document.getElementById("ttm5").value= "";
                 document.getElementById("grade5").value= "";
            }
    
            if(document.getElementById("grade5").value == "A+" ){
    
                document.getElementById("point5").value=5.00;
            }
           else if(document.getElementById("grade5").value == "A" ){
    
                document.getElementById("point5").value=4.00;
            }
            else if(document.getElementById("grade5").value == "A-" ){
    
                document.getElementById("point5").value=3.50;
            }
            else if(document.getElementById("grade5").value == "B" ){
    
                document.getElementById("point5").value=3.00;
            }
            else if(document.getElementById("grade5").value == "C" ){
    
                document.getElementById("point5").value=2.00;
            }
            else if(document.getElementById("grade5").value == "D" ){
    
                document.getElementById("point5").value=1.00;
            }
    
            else{
    
                document.getElementById("grade5").value= "0";
                document.getElementById("point5").value= "0";
              
            }
    
     }




    //  for islamic studies 


    function total6(){

        var _theorymarks= document.getElementById("tm6").value;
        var _practicalmarks= document.getElementById("pm6").value;
    
         if( _theorymarks=="" || _practicalmarks=="" ){
    
       alert("Please Push a number");
         }
            var total= parseInt(_practicalmarks)+parseInt(_theorymarks);
          
            document.getElementById("ttm6").value=total;
    
            if(total>=80 && total<=100){
    
                document.getElementById("grade6").value= "A+";
            }
            else if(total>=70 && total<=79){
    
                document.getElementById("grade6").value= "A";
            }
            else if(total>=60 && total<=69){
    
                document.getElementById("grade6").value= "A-";
            }
            else if(total>=50 && total<=59){
    
                document.getElementById("grade6").value= "B";
            }
            else if(total>=40 && total<=49){
    
                document.getElementById("grade6").value= "C";
            }
            else if(total>=33 && total<=39){
    
                document.getElementById("grade6").value= "D";
            }
            else if(total>=0 && total<=32){
    
                document.getElementById("grade6").value= "F";
            }
    
            else {
    
                 alert("It's Not Possible");
                 document.getElementById("tm6").value= "";
                 document.getElementById("pm6").value= "";
                 document.getElementById("ttm6").value= "";
                 document.getElementById("grade6").value= "";
            }
    
            if(document.getElementById("grade6").value == "A+" ){
    
                document.getElementById("point6").value=5.00;
            }
           else if(document.getElementById("grade6").value == "A" ){
    
                document.getElementById("point6").value=4.00;
            }
            else if(document.getElementById("grade6").value == "A-" ){
    
                document.getElementById("point6").value=3.50;
            }
            else if(document.getElementById("grade6").value == "B" ){
    
                document.getElementById("point6").value=3.00;
            }
            else if(document.getElementById("grade6").value == "C" ){
    
                document.getElementById("point6").value=2.00;
            }
            else if(document.getElementById("grade6").value == "D" ){
    
                document.getElementById("point6").value=1.00;
            }
    
            else{
    
                document.getElementById("grade6").value= "0";
                document.getElementById("point6").value= "0";
              
            }
    
     }






    //   for calculate total result 
 function totalresult(){

     //if fail any subject don't count result
      var _failpoint=document.getElementById("point").value;
      var _failpoint1=document.getElementById("point1").value;
      var _failpoint2=document.getElementById("point3").value;
      var _failpoint3=document.getElementById("point4").value;
      var _failpoint4=document.getElementById("point5").value;
      var _failpoint5=document.getElementById("point6").value;
      
    if( _failpoint==0 || _failpoint1==0 || _failpoint3==0 || _failpoint2==0 || _failpoint4== 0 || _failpoint5 ==0  ){

    document.getElementById("totalMark").value=0;
    document.getElementById("totalgrade").value="Fail";
    document.getElementById("totalpoint").value=0;
      
    }

    else{

        var _bn=document.getElementById("ttm").value;
        var _en=document.getElementById("ttm1").value;
        var _math=document.getElementById("ttm3").value;
        var _soclscience=document.getElementById("ttm4").value;
        var _gscience=document.getElementById("ttm5").value;
        var _islamicstd=document.getElementById("ttm6").value;
     
        var _totalmark= parseInt(_bn)+parseInt(_en)+parseInt(_math)+parseInt(_soclscience)+parseInt(_gscience)+parseInt(_islamicstd);
     
        document.getElementById("totalMark").value= _totalmark;
     
        var _bnpoint=document.getElementById("point").value;
        var _enpoint=document.getElementById("point1").value;
        var _mathpoint=document.getElementById("point3").value;
        var _soclscience=document.getElementById("point4").value;
        var _gsciencepoint=document.getElementById("point5").value;
        var _islamicstdpoint=document.getElementById("point6").value;
        
     
        var _totalpoint= parseInt(_bnpoint)+parseInt(_enpoint)+parseInt(_mathpoint)+parseInt(_soclscience)+parseInt(_gsciencepoint)+parseInt(_islamicstdpoint);
     
         document.getElementById("totalpoint").value=_totalpoint/6;
 
          
         //get totalpoint from html

        b= document.getElementById("totalpoint").value;

         if (b==5.00) {
			document.getElementById("totalgrade").value="A+";
		}
		else if (b >=4.00 && b <=4.99) {
			document.getElementById("totalgrade").value="A";
		}
		else if (b >=3.50 && b <=3.99) {
			document.getElementById("totalgrade").value="A-";
		}
		else if (b >=3.00 && b <=3.49) {
			document.getElementById("totalgrade").value="B";
		}
		else if (b >=2.00 && totalPoint <=2.99) {
			document.getElementById("totalgrade").value="C";
		}
		else if (b >=1.00 && b <=1.99) {
			document.getElementById("totalgrade").value="D";
		}
     
         
     



    }

   
   
   

 }
 