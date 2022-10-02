// declare
let   select=document.querySelector("select")
      result  = document.querySelector(".result"),
      btn     = document.querySelector(".btn"),
      container = document.querySelector(".container"),
      options=document.querySelectorAll("option")




btn.onclick=function(){
   setInterval(()=>{
   fetch(`https://worldtimeapi.org/api/timezone/${select.value}`)
   .then((re)=>{
      return re.json()
   })
   .then((re)=>{
      result.innerHTML=`date is ${re.datetime.slice(0 , 10)} & time is ${re.datetime.slice(11 , -13)} in ${select.value}`
      })
}  , 995 )


   // //*********************************************************************** */

   // let myRequest = new XMLHttpRequest () ;

   // myRequest.onreadystatechange = function() {
   //    if ( this.readyState === 4 && this.status === 200 ) {
   //       result.innerHTML=`date is ${JSON.parse(this.responseText).datetime.slice(0 , 10)} & time is ${JSON.parse(this.responseText).datetime.slice(11 , -13)} in ${select.value}`
   //    }
   // } 
   // myRequest.open("GET",`https://worldtimeapi.org/api/timezone/${select.value}` ) 
   // myRequest.send();



}

