function runScript2() {
    var firstName = prompt("Enter your first name:");
    var lastName = prompt("Enter your last name:");
    var birthYear = prompt("Enter your birth year:");

    birthYear = parseInt(birthYear); // Convert birthYear to a number
    var currentYear = new Date().getFullYear();
    var age = currentYear - birthYear; // Calculate age

    alert("Hello " + firstName + " " + lastName + "! How does it feel to be " + age + " years old?");
}