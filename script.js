function compute()
{
    var p = document.getElementById("principal").value
    var r = document.getElementById("rate").value
    var y = document.getElementById("years").value
    let  currentyear =  new Date().getFullYear() + parseInt(y);

                if(parseInt(p) <= 0  || p==""){
                    window.alert("Please enter an initial amount greater than zero");
                    principal.focus();
                    return false;
                }

    document.getElementById("result").innerHTML = "If  you deposit <mark>" + p + "</mark>,<br /> at an interest rate of <mark>" + r + "%</mark>. <br /> You will receive an amount of <mark>" + (p * (r/100))* y + "</mark>, <br />in the year <mark>" + currentyear + "</mark>.";
    
}


    
function updateTextInput(val) {
          document.getElementById('textInput').value=parseFloat(val).toFixed(2);

        }


