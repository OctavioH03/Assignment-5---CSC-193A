

function showAlert() {
    alert("Hello, world!");
}

function biggerText(elementId) {
    document.getElementById(elementId).style.fontSize = "24pt";
}

function handleTextStyleChange(){
    var text = document.getElementById("text");
    var fancy = document.getElementById("fancy");
    var boring = document.getElementById("boring")
    if(fancy.checked){
        alert("Fancifying your text to be FancyShmancy")
        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration = "underline";
    }else if(boring.checked){
        alert("Turning into BoringBetty")
        text.style.fontWeight = "normal"
        text.style.color = "black";
        text.style.textDecoration = "none";
    }
}

function mooMod() {
    var input = document.getElementById("text").value;
    console.log(input)
    var sentences = input.split(".");
    sentences = sentences.map(element => {
        return element != "" ? element.toUpperCase() + '-Moo' : "" 
    });
    text.value = sentences.join(". ")
}