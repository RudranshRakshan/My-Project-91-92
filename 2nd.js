function load() {
    document.getElementById("player1N").innerHTML = localStorage.getItem("player1") + " : ";
    document.getElementById("player2N").innerHTML = localStorage.getItem("player2") + " : ";
    document.getElementById("player1S").innerHTML = "0 ";
    document.getElementById("player2S").innerHTML = "0 ";
    P1Name = localStorage.getItem("player1");
    P2Name = localStorage.getItem("player2");

    document.getElementById("playerQ").innerHTML = "Question Turn: " + P1Name;
    document.getElementById("playerA").innerHTML = "Answer Turn: " + P2Name;
    Qturn = "P1";
    Aturn = "P2";
    P1Score = 0;
    P2Score = 0;
}
var num1=0;
var num2=0;
function send() {
    num1 = document.getElementById("number1").value;
    num2 = document.getElementById("number2").value;

    qWord = "<h4 id='wordDisplay'> Q.  " + num1 + " ÷ " + num2 +"</h4>"
    inpBox = "<br> Answer: <input type='text' id='inputText'>"
    checkBtn = "<br> <br> <button onclick='check()' class='btn-success btn'>CHECK</button>"
    row = qWord + inpBox + checkBtn;
    document.getElementById("output").innerHTML = row;
    document.getElementById("input").style.display = "none";
}

function check() {
    Answer = document.getElementById("inputText").value;
    if (Answer == num1/num2) {
        if (Aturn == "P2") {
            P2Score += 1;
            document.getElementById("player2S").innerHTML = P2Score;

        }
        else {
            P1Score += 1;
            document.getElementById("player1S").innerHTML = P1Score;

        }
    }

    if (Qturn == "P1") {
        Qturn = "P2";
        Aturn = "P1";
        document.getElementById("playerA").innerHTML = "Answer Turn: " + P1Name;
        document.getElementById("playerQ").innerHTML = "Question Turn: " + P2Name;
    }
    else {
        Qturn = 'P1';
        Aturn = "P2";
        document.getElementById("playerA").innerHTML = "Answer Turn: " + P2Name;
        document.getElementById("playerQ").innerHTML = "Question Turn: " + P1Name;

    }
    document.getElementById("output").innerHTML = "";
    document.getElementById("input").style.display = "inline";

}