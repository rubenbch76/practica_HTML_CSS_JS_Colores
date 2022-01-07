function tdKill(tdId)
{
    document.getElementById(tdId).style.visibility='hidden';
}

function tdShow()
{
    let cont=1;
    while (cont<=17)
    {
        document.getElementById('td' + cont).style.visibility='visible';
        cont++;
    }   
}