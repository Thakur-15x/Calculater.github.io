let screen= document.getElementById("screen");
button= document.querySelectorAll("button");
let Value= ''
for (item of button){
    item.addEventListener('click',(e)=>{
        buttonText= e.target.innerText
        // console.log(buttonText)
        if(buttonText=='C'){
            screen.value = '';
            Value = '';
        }
        else if(buttonText=='='){
            screen.value= eval(Value);
        }
        else{
            Value += buttonText;
            screen.value = Value;
        }
    })

}
