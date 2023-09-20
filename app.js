const buttons = document.querySelectorAll('button');
const screen = document.getElementById('screen');

for(let btn of buttons){
    btn.addEventListener('click', (e)=>{
        let buttonText = e.target.innerText;
        // if(buttonText == '*'){
        //     screen.value +=  '*';
        // }
        if(buttonText == 'C' ){
            screen.value = "";
        }
        else if(buttonText == '=' ){
            // screen.value = eval(screen.value);

            try{
            screen.value = eval(screen.value);
            }
            catch (e){
                screen.value = "invalid operation";
                console.log(e.message);
            }

        }
        else{
            screen.value += buttonText;
        }
    })
     
}