// declare
let   select=document.querySelector("select")
      result  = document.querySelector(".result"),
      btn     = document.querySelector(".btn"),
      container = document.querySelector(".container")



btn.onclick=function(){
   // fetch(`http://worldtimeapi.org/api/timezone/${select.value}`)
   // .then((re)=>{
   //    return re.json()
   // })
   // .then((re)=>{
   //    result.innerHTML=`date is ${re.datetime.slice(0 , 10)} & time is ${re.datetime.slice(11 , -13)} in ${select.value}`
   // })
   // //*********************************** */

   let myRequest = new XMLHttpRequest () ;

   myRequest.onreadystatechange = function() {
      if ( this.readyState === 4 && this.status === 200 ) {
         console.log (JSON.parse(this.responseText).datetime) ;
         result.innerHTML=`date is ${JSON.parse(this.responseText).datetime.slice(0 , 10)} & time is ${JSON.parse(this.responseText).datetime.slice(11 , -13)} in ${select.value}`

      }
   } 
   myRequest.open("GET",`http://worldtimeapi.org/api/timezone/${select.value}` ) 
   myRequest.send();
}

