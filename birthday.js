document.addEventListener('DOMContentLoaded',function()
{
    document.getElementById('image').addEventListener('change',function(event){ 
        const file= event.target.files[0];

     
    if (file){
       const reader = new FileReader();
       reader.onload = function(e){
           document.getElementById('pic').src =e.target.result;
       }
       reader.readAsDataURL(file);
          function interval(){ setInterval(count,1000);
}          var counter=0
           function count(){
            counter++;
           }
           interval();
           console.log(counter)
           document.querySelector('#counter').innerHTML=counter;
       document.getElementById('bday-text').innerHTML=`Happy birthday`;
       document.getElementById('pText').innerHTML=`Happy birthday
   Wishing you longetivity happiness and all health`;
   document.getElementById('image').style.display='none';
   document.getElementById('counter').style.display='none';
   document.getElementById('eng').style.display='none';

       



    }
   });
}
)
