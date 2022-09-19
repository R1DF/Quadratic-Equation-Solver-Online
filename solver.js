const solutionDiv = document.getElementById("solution");
solutionDiv.style.display = "none"; // Always hidden by default!

function triggerSolution() {
    // Getting coefficients
    const coefA = parseFloat(document.getElementById("coef-a").value);
    const coefB = parseFloat(document.getElementById("coef-b").value);
    const coefC = parseFloat(document.getElementById("coef-c").value);

    // Solution <p> tag
    const solutionText = document.getElementById("solution-text");
    
    /* Making sure nothing is empty or invalid. Empty/invalid is NaN in JS */
    if (isNaN(coefA) || isNaN(coefB) || isNaN(coefC)) {
        if (solutionDiv.style.display === "block") {
            solutionDiv.style.display = "none";
        }
        return; // empty values are NaN
    }

    if (coefA === 0) {
        solutionText.innerHTML = "Please enter a nonzero coefficient for A!";

    } else {
        // Discriminant before calculations
        let discriminant = (coefB * coefB) - (4 * coefA * coefC);
        if (discriminant < 0) {
            // if I tried harder I could make it handle complex numbers but for now? nope
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
