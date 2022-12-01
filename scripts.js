var has_operation = false;
var operation = "";

function add_number(number) {
    var panel = document.getElementById("display");
    var in_display = panel.innerHTML;
    var text = panel.innerText;
    console.log(in_display.length);
    if (in_display == "0") {
        panel.innerText = number;
    } else if ((text.length >= 13 && !has_operation) ||
        (text.length >= 17 && has_operation)) {
        alert("Больше цифр ввести нельзя");
    } else {
        panel.innerHTML = in_display + number;
    }
}

function clear_disp() {
    document.getElementById("display").innerText = "0";
    has_operation = false;
}

function add_operation(oper) {
    var panel = document.getElementById("display");
    if (!has_operation) {
        panel.innerHTML = "<font color=#d4d5d6>" + panel.innerText +  " " + oper + "</font >\u00A0";
        has_operation = true;
        operation = oper;
    } else {
        alert("можно вводить только одну операцию");
    }
}

function del_last() {
    var panel = document.getElementById("display");
    var in_display = panel.innerText;
    if (in_display.slice(-1) == "\u00A0") {
        has_operation = false;
        panel.innerText = in_display.slice(0, -3);
    } else if (in_display.length == 1) {
        panel.innerText = "0";
    } else if (in_display != "0") {
        panel.innerText = in_display.slice(0, -1);
    }
}

function get_result() {
    if (has_operation) {
        var panel = document.getElementById("display");
        var in_display = panel.innerText;
        result = parseFloat(in_display.split(" " + operation + "\u00A0")[0]);
        var second = parseFloat(in_display.split(" " + operation + "\u00A0")[1]);
        if (operation == "+") {
            result += second;
        } else if (operation == "-") {
            result -= second;
        } else if (operation == "*") {
            result *= second;
        } else {
            result /= second;
        }
        console.log(result);
        panel.innerText = result;
        has_operation = false;
    }
}