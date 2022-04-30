let a = parseInt((Math.random(0,10))*10);
let b = parseInt((Math.random(0,10))*10);
let c = parseInt((Math.random(0,10))*10);
let f = parseInt((Math.random(0,10))*10);
let d = parseInt((Math.random(0,10))*10);
let e = parseInt((Math.random(0,10))*10);
let s = ""
s+=a+""+b+""+""+c+""+d+""+e+""+f

var z = document.getElementById("captcha1");
var ctx = z.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText(a, 10, 30);

var z = document.getElementById("captcha2");
var ctx = z.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText(b, 10, 30);

var z = document.getElementById("captcha3");
var ctx = z.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText(c, 10, 30);

var z = document.getElementById("captcha4");
var ctx = z.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText(d, 10, 30);

var z = document.getElementById("captcha5");
var ctx = z.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText(e, 10, 30);

var z = document.getElementById("captcha6");
var ctx = z.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText(f, 10, 30);


function validateCaptcha() {
    if(document.getElementById("captchaTextBox").value == s){
        alert("Valid Captcha")
    }
    else{
        alert("Invalid Captcha. try Again");
        location.reload();
    }
}
