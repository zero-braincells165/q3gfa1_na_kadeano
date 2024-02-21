function runScript1() {
    var nickname = "Karen";
    var heightInInches = 62;
    var weightInKg = 50;

    var heightInFeet = Math.floor(heightInInches / 12);
    var remainingInches = heightInInches % 12;
    var heightDisplay = heightInFeet + "'" + remainingInches + "\"";

    var weightInLbs = weightInKg * 2.20462;

    alert("Name: " + nickname + "\nHeight: " + heightDisplay + "\nWeight: " + weightInLbs.toFixed(3) + " lbs");
}