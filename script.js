let input = document.getElementById('inputBox')
let butons = document.querySelectorAll('button')

let string = "";
let arr = Array.from(butons);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;

        }

        else if(e.target.innerHTML == 'AC') {
            string = "";
            input,value = string;
        }
    })
})