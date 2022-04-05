function fourD(){
    var num = Math.floor(Math.random() * 10000)//Generate random 4 digit num
    if(num < 10){//Add zeros if num is 3 digits or less
        num = '000' + num
    } else if(num < 100){
        num = '00' + num
    } else if(num < 1000){
        num = '0' + num
    }
    document.getElementById('result').innerHTML = num
}//End Functiom

function ToTo(){
    var num = []
    var temp;
    var out = ''
    for(var i = 1; i <= 49; i++){//Generate random num
        if(num < 10){//Add zero if num is 1 digit
            temp = '0' + i;
            num.push(temp)
        } else {
            num.push(i)
        }//End Else
}//End For
    for(var c = 0; c < 7; c++){
        var n = Math.floor(Math.random() * (num.length - 1))
        var show = num[n]
        out += show + ' '
        num.splice(n, 1)//Remove already shown numbers so no repeat
    }
    document.getElementById('result').innerHTML = out
}//End Function