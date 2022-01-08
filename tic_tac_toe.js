var sign = 0;

window.onload = function(){
    var arr = new Array();
    for(var i = 1; i < 10; i += 1){
        arr.push(document.getElementById(`${i}`));
    }
    function winner(){
        console.log(`arr[0] = ${arr[0].innerText}`)
        console.log(`arr[1] = ${arr[1].innerText}`)
        var b = (arr[0].innerText == arr[1].innerText)
        var c = (arr[0].innerText == "X")
        console.log(`arr[0] == arr[1] => ${b}`)
        console.log(`arr[0].innerText == "X" => ${c}`)
        if(((arr[0].innerText == arr[1].innerText) && (arr[1].innerText == arr[2].innerText)) && (arr[0].innerText == "X" || arr[0].innerText == "O"))
            return arr[0].innerText;
        if(((arr[0].innerText == arr[3].innerText) && (arr[3].innerText == arr[6].innerText)) && (arr[0].innerText == "X" || arr[0].innerText == "O"))
            return arr[0].innerText;
        if(((arr[1].innerText == arr[4].innerText) && (arr[4].innerText == arr[7].innerText)) && (arr[1].innerText == "X" || arr[1].innerText == "O"))
            return arr[1].innerText;
        if(((arr[2].innerText == arr[5].innerText) && (arr[5].innerText == arr[8].innerText)) && (arr[2].innerText == "X" || arr[2].innerText == "O"))
            return arr[2].innerText;
        if(((arr[3].innerText == arr[4].innerText) && (arr[4].innerText == arr[5].innerText)) && (arr[3].innerText == "X" || arr[3].innerText == "O"))
            return arr[3].innerText;
        if(((arr[6].innerText == arr[7].innerText) && (arr[7].innerText == arr[8].innerText)) && (arr[6].innerText == "X" || arr[6].innerText == "O"))
            return arr[6].innerText;
        if(((arr[2].innerText == arr[4].innerText) && (arr[4].innerText == arr[6].innerText)) && (arr[2].innerText == "X" || arr[2].innerText == "O"))
            return arr[2].innerText;
        if(sign == 9)
            return "Tie";
        return null;
    }

    function f(id){
        // console.log(arr)
        return ()=>{
            x = document.getElementById(`${id}`)
            if(!(x.innerHTML == "X" || x.innerHTML == "O")){
                let player1disabled = true, player2disabled = true;
                if(sign % 2 == 0){
                    x.innerHTML = "X";
                    player2disabled = false;
                }
                else{
                    x.innerHTML = "O";
                    player1disabled = false;
                }
                document.getElementById("player1chance").disabled = player1disabled;
                document.getElementById("player2chance").disabled = player2disabled;
                sign = sign + 1;
            }
            win = winner();    
            if(win != null){
                // console.log(arr)
                message = document.getElementById("message")
                if(win == "X")
                    message.innerHTML = "Player 1 won the match!"
                if(win == "O")
                    message.innerHTML = "Player 2 won the match!"
                if(win == "Tie")
                    message.innerHTML = "Match was a Tie!"
            }

        }
    }

    
    for(var i = 1; i < 10; i += 1){
        console.log(document.getElementById(`${i}`))
        document.getElementById(`${i}`).addEventListener("click", f(`${i}`));
        document.getElementById('reset').addEventListener("click", ()=>{
            for(var i = 0; i < 9; i += 1)
                arr[i].innerHTML = "&nbsp";
            document.getElementById("message").innerHTML = "";
            sign = 0;
            document.getElementById("player1chance").disabled = false;
            document.getElementById("player2chance").disabled = true;
        })
    }
}
