var result = document.getElementById("resultBox");

function clickedNum (passedValue) {
    result.value += passedValue; 
}

function clickedEquals() {
    if(result.value === ""){
        result.value = "0";
    } else {
    var resultExp = (result.value).replace(/[\u00d7]/gi, "*").replace(/[\u00f7]/gi, "/");
    var resultNum = eval(resultExp);
    result.value = resultNum.toString();
    }
}

function clickedClear() {
    result.value = "";
}