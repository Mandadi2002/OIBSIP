let input=document.getElementById('input_area');
let button = document.querySelectorAll('button');

let string = "";
let arr= Array.from(button);

arr.forEach(button => {
    button.addEventListener('click', (e)=>{
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value =string;
        }

         else if (e.target.innerHTML=='C') {
            string="";
            input.value =string;
         }

         else if (e.target.innerHTML=='()') {
            string = string.substring(0,string);
            input.value = string;
         }


        else{
              string += e.target.innerHTML;
              input.value = string;
        }
    })
});