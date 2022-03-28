let count = 0;

function add(){
    count = count + 1;
    document.getElementById("number").innerText = count;
}

function sub(){
    count = count - 1;
    document.getElementById("number").innerText = count;
}

function reset(){
    count = 0;
    document.getElementById("number").innerText = count;
}