function toggleClassDisplay(elementsClass) {
    let collection = document.getElementsByClassName(elementsClass);

    if (typeof(elementsClass) === "string") {
        for (let i = 0; i < collection.length; i++) {
            if (collection[i].style.display === "block") 
                collection[i].style.display = "none";
            else 
                collection[i].style.display = "block";
        }
    }
    else {
        console.log("personalError : toggleClassDisplay method\
                            does not take string as a parameter");
    }
}

function toggleTimerStartButton(elementId) {
    if (typeof(elementId) === "string") {
        let element = document.getElementById(elementId);
        if (element.innerHTML !== "STOP") {
            document.getElementById(elementId).innerHTML = "STOP";
        }
        else {
            document.getElementById(elementId).innerHTML = "START";
        }
    }
}

