let string = "";
let count = 0;
$(".btn").click(function(key) {
    let button = key.target.innerHTML;
    if (button == "C") {
        string = "";
        $("input").val(string);
        count = 0;
    } else if (button == "=") {
        string = eval(string);
        $("input").val(string);
    } else if (button == "x") {
        string = string.substring(0,string.length-1);
        $("input").val(string);
    } else if (button == "X") {
        button = "*";
        string += button;
        $("input").val(string);
    } else if (button == "()") {
        count++;
        if (count > 2) {
            count = count%2;
        }
        if (count == 1) {
            string += "(";
            $("input").val(string);
        } else if (count == 2) {
            string += ")";
            $("input").val(string);
        }
        
    } else {
        string += button;
        $("input").val(string);
    }
});