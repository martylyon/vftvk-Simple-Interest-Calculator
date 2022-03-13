function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value
    y = document.getElementById("years").value

    let  currentyear =  new Date().getFullYear() + parseInt(y);

    document.getElementById("result").innerHTML = "If  you deposit <mark>" + p + "</mark>,<br /> at an interest rate of <mark>" + r + "%</mark>. <br /> You will receive an amount of <mark>" + (p * (r/100))* y + "</mark>, <br />in the year <mark>" + currentyear + "</mark>.";
    
}


    
function updateTextInput(val) {
          document.getElementById('textInput').value=parseFloat(val).toFixed(2);

        }