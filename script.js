function add(){
    var x = parseInt(document.getElementById("n1").value);
    var y = parseInt(document.getElementById("n2").value);
    var z = (x+y)
    document.getElementById("add").innerHTML=z;
}
function sub(){
    var x = document.getElementById("m").value;
    var y = document.getElementById("m2").value;
    var z = (x-y)
    document.getElementById("sub").innerHTML=z;
}
function mult(){
    var x = document.getElementById("o1").value;
    var y = document.getElementById("o2").value;
    var z = (x*y)
    document.getElementById("mult").innerHTML=z;
}
function div(){
    var x = document.getElementById("p1").value;
    var y = document.getElementById("p2").value;
    var z = (x/y)
    document.getElementById("div").innerHTML=z;
}