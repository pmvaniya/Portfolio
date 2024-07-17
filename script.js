var len_counter = 0;
var hi_text = 'Hi, I am Pranav.';
var speed = 90;

function showhi() {
    if(len_counter<2) {
        switch (len_counter) {
            case 0:
                document.getElementById("hi-message").innerHTML += "<b>H</b>";
                break;

            case 1:
                document.getElementById("hi-message").innerHTML += "<b>i</b>";
                break;

            default:
                break;
        }

        len_counter++;
        setTimeout(showhi, speed);
    }

    else if (len_counter < 9) {
        document.getElementById("hi-message").innerHTML += hi_text.charAt(len_counter);
        len_counter++;
        setTimeout(showhi, speed);
    }

    else if (len_counter < hi_text.length) {
        switch (len_counter) {
            case 9:
                document.getElementById("hi-message").innerHTML += "<b>P</b>";
                break;

            case 10:
                document.getElementById("hi-message").innerHTML += "<b>r</b>";
                break;

            case 11:
                document.getElementById("hi-message").innerHTML += "<b>a</b>";
                break;

            case 12:
                document.getElementById("hi-message").innerHTML += "<b>n</b>";
                break;

            case 13:
                document.getElementById("hi-message").innerHTML += "<b>a</b>";
                break;

            case 14:
                document.getElementById("hi-message").innerHTML += "<b>v</b>";
                break;

            case 15:
                document.getElementById("hi-message").innerHTML += ".";
                break;

            default:
                break;
        }

        len_counter++;
        setTimeout(showhi, speed);
    }
}