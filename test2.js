let input = [80, 'motorway']



let fine = (v, p1) => {
    let p2 = (p1) => {
        if (p1 === "city") {
            return 50;
        } else if (p1 === "interstate") {
            return 90;
        } else if (p1 === "motorway") {
            return 130;
        } else if (p1 === "residential") {
            return 20;
        } else console.log(" Not a valid location");
    }


    if (v <= p2(p1)) {
        console.log("Good boy");
    } else if ((v - p2) < 20) {
        console.log("You are speeding");
    } else if ((v - p2) < 40) {
        console.log("you are excessive speeding");
    } else console.log("Your are a reckless driver");
}

fine(input[0], input[1])