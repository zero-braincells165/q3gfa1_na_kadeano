function runScript3() {
    var confirmShare = confirm("Do you agree to share your personal information with our site?");
    if (confirmShare) {
        var nickname = "Yuri";
        var heightInInches = 65;
        var weightInKg = 75;

        var heightInFeet = Math.floor(heightInInches / 12);
        var remainingInches = heightInInches % 12;
        var heightDisplay = heightInFeet + "'" + remainingInches + "\"";

        var weightInLbs = weightInKg * 2.20462;

        console.log
        {
            alert("Name: " + nickname + "\nHeight: " + heightDisplay + "\nWeight: " + weightInLbs.toFixed(3) + " lbs");
        }
    } else {
        console.log("User does not wish to share his/her information.");
    }
}