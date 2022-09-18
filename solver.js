const solutionDiv = document.getElementById("solution");
solutionDiv.style.display = "none";

function triggerSolution() {
    const coefA = parseFloat(document.getElementById("coef-a").value);
    const coefB = parseFloat(document.getElementById("coef-b").value);
    const coefC = parseFloat(document.getElementById("coef-c").value);
    const solutionText = document.getElementById("solution-text");

    
    if (!coefA || !coefB || !coefC) {
        return; // empty values are NaN
    }

    if (coefA === 0) {
        solutionText.innerHTML = "Please enter a nonzero coefficient for A!";
    } else {
        let discriminant = (coefB * coefB) - (4 * coefA * coefB)
        if (discriminant < 0) {
            solutionText.innerHTML = "".concat("The discriminant (", discriminant, ") is negative. There are complex roots.");
        } else if (discriminant === 0){
            let x = (-coefB + Math.sqrt(discriminant))/(2 * coefA);
            solutionText.innerHTML = "".concat("Solution: ", x);
        } else {
            let x1 = (-coefB + Math.sqrt(discriminant))/(2 * coefA);
            let x2 = (-coefB - Math.sqrt(discriminant))/(2 * coefA);
            solutionText.innerHTML = "".concat("Solutions: ", x1, ", ", x2);
        }
    }
    solutionDiv.style.display = "block";
}