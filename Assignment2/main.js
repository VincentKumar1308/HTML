
const container = document.querySelector(".container")
const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");
canvas.width = 135;
canvas.height = 135;
 
const canvas1 = document.getElementById('syncfusion');
const ctx = canvas1.getContext("2d");
canvas1.width = 500;
 
const container2 = document.querySelector('.container2');
const canvasBelowText = document.getElementById('message');
const message = canvasBelowText.getContext("2d");
canvasBelowText.width = 1000;

  
var iteration =0;

//calling the generate function
window.addEventListener('load',generate);
var text = 'Syncfusion';
context.fillStyle = 'White';
ctx.fillStyle = 'white';
message.fillStyle = 'white';
 
 
function generate()
{  
    //calling the draw function
    setInterval(draw,100);  
}
 
function draw()
{
    iteration++;
    switch(iteration)
    {
        case 1:
        {
            context.fillRect(20,90,30,30);
            container.style.transform = 'rotate(-10deg)';
            break;
        }
        case 2:
        {
             context.fillRect(20,55,30,30);
            container.style.transform = ' rotate(-20deg)';
            break;
        }
        case 3:
        {
            context.fillRect(20,20,30,30);
            container.style.transform = ' rotate(-30deg)';
            break;
        }
        case 4:
        {
            context.fillRect(55,90,30,30);
            container.style.transform = ' rotate(-40deg)';
            break;
        }
        case 5:
        {
            context.fillRect(55,55,30,30);
            container.style.transform = 'rotate(-50deg)';
            break;
        }
        case 6:
        {
            context.fillRect(55,20,30,30);
            container.style.transform = 'rotate(-60deg)';
            break;
        }
        case 7:
        {
            context.fillRect(90,90,30,30);
            container.style.transform = ' rotate(-70deg)';
            break;
        }
        case 8:
        {
            context.fillRect(90,55,30,30);
            container.style.transform = ' rotate(-80deg)';
            break;
        }
        case 9:
        {
            context.fillRect(90,20,30,30);
            container.style.transform = 'rotate(0deg)';
            break;
        }
        case 10:
        {
            context.clearRect(90,20,30,30)
            context.translate(100,5);
            context.rotate(4/4);
            context.fillRect(10,-10,30,30);
           
            //calling the text generate function
            setInterval(generateText,1000)
            break;    
        }
               
    }
}
 
 
let index = 0;
const x = 10;
const y = 130;
 
 
function generateText()
{  
    ctx.font = "bold 30px Tahoma"
    ctx.fillText(text,10,130);
    setInterval(generateMessage(),100);
}
 
var deliverMessage = "Deliver innovation with ease";
let index1 = 0
var xAxis = 500;
var yAxis = 30;
 
function generateMessage()
{
    message.font ='20px Tahoma';
    const Text = deliverMessage.substring(0,index1);
    message.fillText(Text,xAxis,yAxis);
    index1++;
 
    if(index1 <= deliverMessage.length)
    {
        setTimeout(generateMessage,100)
    }
    else{
        message.font = "12px tahoma"
        setInterval(generateMessage,100);
    }
}