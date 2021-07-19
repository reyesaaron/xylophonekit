var numberOfXylo = document.querySelectorAll(".xylo").length;

// Detecting Button Press

for (var i=0;i < numberOfXylo;i++){
    document.querySelectorAll("button")[i].addEventListener ("click", function(){
    
    var buttonKey = this.textContent;
    
    keyClick(buttonKey);
    
    activeKey(buttonKey);

    });
}

// Detecting Keyboard Press

document.addEventListener("keypress", function(event){

    keyClick(event.key);

    activeKey(event.key);

})

function keyClick(key){

    switch (key) {
        case "q":
            var one = new Audio("./sounds/1.mp3");
            one.play();
            break;
        case "w":
            var two = new Audio("./sounds/2.mp3");
            two.play();
            break;
        case "e":
            var three = new Audio("./sounds/3.mp3");
            three.play();
            break;
        case "r":
            var four = new Audio("./sounds/4.mp3");
            four.play();
            break;
        case "t":
            var five = new Audio("./sounds/5.mp3");
            five.play();
            break;
        case "y":
            var six = new Audio("./sounds/6.mp3");
            six.play();
            break;
        case "u":
            var seven = new Audio("./sounds/7.mp3");
            seven.play();
            break;
        case "i":
            var eight = new Audio("./sounds/8.mp3");
            eight.play();
            break;
        case "o":
            var nine = new Audio("./sounds/9.mp3");
            nine.play();
            break;
        case "p":
            var zero = new Audio("./sounds/0.mp3");
            zero.play();
            break;
        case "a":
            var q = new Audio("./sounds/q.mp3");
            q.play();
            break;
        case "s":
            var w = new Audio("./sounds/w.mp3");
            w.play();
            break;
        case "d":
            var e = new Audio("./sounds/e.mp3");
            e.play();
            break;
        case "f":
            var r = new Audio("./sounds/r.mp3");
            r.play();
            break;
        case "g":
            var t = new Audio("./sounds/t.mp3");
            t.play();
            break;
        default:
            console.log(key);
    }

}

function activeKey(currentKey) {

    document.querySelector("." + currentKey).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("." + currentKey).classList.remove("pressed");
    }, 100);

}