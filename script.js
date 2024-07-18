var len_counter = 0, speed = 90;
var hello_text = "Hello,", i_am_text = "I am Pranav,", software_text = "A Software Developer.";
var hello_text_length = hello_text.length, i_am_text_length = i_am_text.length, software_text_length = software_text.length;
var hello_div = document.getElementById("hello-text"), i_am_div = document.getElementById("i-am-text"), software_div = document.getElementById("software-text");

function showtext() {
    if (len_counter < hello_text_length) {
        if (len_counter == 0) {
            hello_div.innerHTML = hello_text[len_counter];
        }
        else {
            hello_div.innerHTML += hello_text[len_counter];
        }

        setTimeout(showtext, speed);
    }

    else if (len_counter < (hello_text_length + i_am_text_length)) {
        if (len_counter == hello_text_length) {
            i_am_div.innerHTML = i_am_text[len_counter - hello_text_length];
        }
        else {
            i_am_div.innerHTML += i_am_text[len_counter - hello_text_length];
        }

        setTimeout(showtext, speed);
    }

    else if (len_counter < (hello_text_length + i_am_text_length + software_text_length)) {
        if (len_counter == (hello_text_length + i_am_text_length)) {
            software_div.innerHTML = software_text[len_counter - hello_text_length - i_am_text_length];
        }
        else {
            software_div.innerHTML += software_text[len_counter - hello_text_length - i_am_text_length];
        }

        setTimeout(showtext, speed);
    }

    len_counter++;
}