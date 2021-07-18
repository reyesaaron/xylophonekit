var numberOfXylo = document.querySelectorAll(".xylo").length;

// Detecting Button Press

for (var i=0;i < numberOfXylo;i++){
    document.querySelectorAll("button")[i].addEventListener ("click", function(){
    
    var buttonKey = this.textContent;
    
    keyClick(buttonKey);
    
    });
}

// Detecting Keyboard Press

document.addEventListener("keypress", function(event){
    keyClick(event.key);
})

function keyClick(key){

    switch (key) {
        case "1":
            var one = new Audio("./sounds/1.mp3");
            one.play();
            break;
        case "2":
            var two = new Audio("./sounds/2.mp3");
            two.play();
            break;
        case "3":
            var three = new Audio("./sounds/3.mp3");
            three.play();
            break;
        case "4":
            var four = new Audio("./sounds/4.mp3");
            four.play();
            break;
        case "5":
            var five = new Audio("./sounds/5.mp3");
            five.play();
            break;
        case "6":
            var six = new Audio("./sounds/6.mp3");
            six.play();
            break;
        case "7":
            var seven = new Audio("./sounds/7.mp3");
            seven.play();
            break;
        case "8":
            var eight = new Audio("./sounds/8.mp3");
            eight.play();
            break;
        case "9":
            var nine = new Audio("./sounds/9.mp3");
            nine.play();
            break;
        case "0":
            var zero = new Audio("./sounds/0.mp3");
            zero.play();
            break;
        case "q":
            var q = new Audio("./sounds/q.mp3");
            q.play();
            break;
        case "w":
            var w = new Audio("./sounds/w.mp3");
            w.play();
            break;
        case "e":
            var e = new Audio("./sounds/e.mp3");
            e.play();
            break;
        case "r":
            var r = new Audio("./sounds/r.mp3");
            r.play();
            break;
        case "t":
            var t = new Audio("./sounds/t.mp3");
            t.play();
            break;
        default:
            console.log(key);
    }

}