function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

let bucleTexto;
const time = 250;
function bucle(offOrOn)
{
    let cont=1;
    while (cont<17)
    {
        console.log("bucle" + cont);
        console.log(offOrOn);
        console.log('text' + offOrOn);
        if (offOrOn=='Off'){
            bucleTexto = setTimeout(textOff, time, cont);
        }   else{
            bucleTexto = setTimeout(textOn, time, cont);
        } 
        cont++; 
    }
}

function textOff(num)
{
    console.log("pepe" + num);
    document.getElementById('text_' + num).style.visibility='hidden';  
    sleep(time);     
}
  
function textOn(num)
{
    console.log("pepe" + num);
    document.getElementById('text_' + num).style.visibility='visible';  
    sleep(time);
}

function tdKill(tdId)
{
    document.getElementById(tdId).style.visibility='hidden';
}

function tdShow()
{
    let cont=1;
    while (cont<17)
    {
        document.getElementById('td' + cont).style.visibility='visible';
        cont++;
    }   
}