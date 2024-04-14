let take_dob = document.querySelector("#date_input");
let button = document.querySelector(".cal");
let Age_display = document.querySelector(".result");

function age() {
  let x = new Date();
  let y = new Date(take_dob.value);
  let diff_years = x.getFullYear() - y.getFullYear();

  if(y>x){
    alert("Input beyonds todays date, Please Check !!");
  }
  else if(diff_years>100){
    Age_display.innerHTML=`<span style="color: red;">I think not alive !</span>`;
  }
  else if(x>y){
    console.log(x.getFullYear() - y.getFullYear());
    Age_display.innerHTML=`You are ${x.getFullYear() - y.getFullYear()} years old`
  }
  else{
    alert("First Select Date !!");
  }
  
}

button.addEventListener("click", age);


