// declare
let   select=document.querySelector("select")
      result  = document.querySelector(".result"),
      btn     = document.querySelector(".btn"),
      container = document.querySelector(".container")



btn.onclick=function(){
   fetch(`http://worldtimeapi.org/api/timezone/${select.value}`)
   .then((re)=>{
      return re.json()
   })
   .then((re)=>{
      result.innerHTML=`date is ${re.datetime.slice(0 , 10)} & time is ${re.datetime.slice(11 , -13)} in ${select.value}`
   })
}

