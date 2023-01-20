const value= document.getElementById("value");
let count=0;

let button= document.querySelectorAll(".btn");

button.forEach(function(btn){
    btn.addEventListener("click",function(e){
      const styles= e.currentTarget.classList;

      if(styles.contains("increase")){
           count++;
      }
      else if(styles.contains("decrease")){
          count--;
      }
      else{
          count=0;
      }
      if(count>0){
          value.style.color="green";
      }
      if(count<0){
          value.style.color="red";
      }
      if(count==0){
          value.style.color="black";
      }
      value.textContent=count;

    });
});