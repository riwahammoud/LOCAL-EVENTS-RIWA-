function toalert(){
    
    alert(" Thank u for registration ❤️ ");
} 

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var event = document.getElementById("event").value;
    var question = document.getElementById("textarea").value;
    
     if (name == "" || email == "" || phone == "" || event == "" || question == "") { 
        alert("All fields must be filled out"); 
        return false; } 
        return true; }
        let cost=50;
        function calculateTotal() {
            var quantity = document.getElementById("quantity").value;
              var total = quantity * cost;
              document.getElementById("total").innerText = "Total: " + total 
              +"$"; }
let cost1=10;
function calculate10(){
    var quantity = document.getElementById("cost1").value;
              var total = quantity * cost1;
         document.getElementById("total1").innerText = "Total: " + total +"$";
}
let cost2=20;
function calculate20(){
    var quantity = document.getElementById("q").value;
    var total = quantity * cost2;
document.getElementById("t").innerText = "Total: " + total +"$";
}
let cost3=5;
function calculate5(){
    var quantity = document.getElementById("q1").value;
    var total = quantity * cost3;
document.getElementById("t1").innerText = "Total: " + total +"$";
}
let cost4=70;
function calculate4(){
    var quantity = document.getElementById("q2").value;
    var total = quantity * cost4;
document.getElementById("t2").innerText = "Total: " + total +"$";
}
let cost5=30;
function calculate5(){
    var quantity = document.getElementById("q4").value;
    var total = quantity * cost5;
document.getElementById("t4").innerText = "Total: " + total +"$";
}

