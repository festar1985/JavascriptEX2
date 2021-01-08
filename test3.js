let input = [9, 'dice', 'spice', 'chop', 'bake', 'fillet'];
cook(input);

function cook(insert) {

    let a = insert[0];

    function chop(a) {
        a = a / 2;
        return a;
    }

    function dice(a) {
        a = Math.sqrt(a);
        return a;
    }

    function spice(a) {
        a++;
        return a;
    }

    function bake(a) {
        a = a * 3;
        return a;
    }

    function fillet(a) {
        a = a - 0.2 * a;
        return a;
    }

    for (i = 1; i <= 5; i++) {
        switch (insert[i]) {
            case "chop":
                a = chop(a);
                console.log(a);
                break;
            case "dice":
                a = dice(a);
                console.log(a);
                break;
            case "spice":
                a = spice(a);
                console.log(a);
                break;
            case "bake":
                a = bake(a);
                console.log(a);
                break;
            case "fillet":
                a = fillet(a);
                console.log(a);
                break;
        }
    }
}