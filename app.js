

let a, b, c;
let outputText;

const validate = () => {
    //get the input
    a = document.forms["input-form"]["aterm"].value;
    b = document.forms["input-form"]["bterm"].value;
    c = document.forms["input-form"]["cterm"].value;
    console.log(a);

    //validate a, b, c
    if (a == 0) {
      outputText = "<em>a</em> cannot be zero!";
    } else if (isNaN(a)) {
      outputText = "<em>a</em> must be a number!";
    } else if (isNaN(b)) {
      outputText = "<em>b</em> must be a number!";
    } else if (isNaN(c)) {
      outputText = "<em>c</em> must be a number!";
    } else {
      //calculate the result using: x= (-b+-sqrt(b^2-4ac))/2a
      let x1 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
      let x2 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
      outputText =
        "For the equation <strong>" +
        (a == 1 ? "" : 1) +
        "x\u00b2 +" +
        (a == 1 ? "" : 1) +
        "x+" +
        c +
        " = 0</strong>, x can equal <strong>" +
        x1 +
        "</strong> or <strong>" +
        x2 +
        "</strong>";
    }

    //output the result or errors
    document.getElementById("output-text").innerHTML = outputText;
}