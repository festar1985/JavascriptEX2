let input = [13.1, 50, 31.5, 50, 80, 50, -5, 18, 43]

let check = (x, y, z) => {
    let x1 = 10,
        x2 = 50;
    let y1 = 20,
        y2 = 80;
    let z1 = 15,
        z2 = 50;


    if (x >= x1 && x <= x2) {
        if (y >= y1 && y <= y2) {
            if (z >= z1 && z <= z2) {
                console.log("inside");
            } else console.log("outside");
        } else console.log("outside");
    } else console.log("outside");

}

let cord = (a) => {
    for (i = 0; i < input.length; i += 3) {
        let x = a[i];
        let y = a[i + 1];
        let z = a[i + 2];

        check(x, y, z);
    }
}

cord(input)