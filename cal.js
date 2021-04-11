
let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');//keeps the track which button is clicked
let history = document.getElementById('history');//get the history field 
let screenValue='';//stores the Screen value
let ans='';//store the ANS
for(item of buttons){
    item.addEventListener('click',(e)=>{ //Adding the listener whenever user clicks the button
        buttonText = e.target.innerText;
        console.log('Button text ',buttonText);
        if(buttonText == 'X'){ //when button is x
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue = '';
            screen.value = screenValue;
        }
        // when the delete key is pressed 
        else if(buttonText =='DEL'){
            screenValue = screenValue.replace(screenValue[screenValue.length - 1],'');//to remove the last character from the string
            screen.value = screenValue;
        }
        // when trignometric functions are clicked
        else if((buttonText == 'sin') || (buttonText == 'cos') || buttonText == 'tan'){
            screenValue += screenValue.replace(screenValue,'Math.'+buttonText+'(');
            screen.value += buttonText+'(';//ex:sin(
        }
        else if(buttonText == '='){
            history.innerText = screenValue;//display the screen value in history field
            screenValue = eval(screenValue);
            ans = screenValue;//ans variable is used to to the answer & used when ANS key pressed
            screen.value = screenValue; //display screen value in screen field

        }
        else if(buttonText == 'ANS'){
            screen.value = screenValue+'ANS';//display as EX:2+ANS
            screenValue = screenValue + ans;//Actual evaluation is made here
        }    
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}