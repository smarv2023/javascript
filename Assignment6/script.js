/*
// Get random colors using array version
function getRandomColor() {
    var colors =["black", "white", "red", "orange", "yellow",
                "green", "blue", "purple", "pink", "brown", "grey"]
    var randColor = Math.floor(Math.random() * colors.length);
    var color = colors[randColor];
    return color;
}
*/

// Get random colors using switch case version
// Comment this if you are going to use the top version
function getRandomColor() {
    var numRandom =Math.floor(Math.random() * 11) + 1;
    console.log(numRandom);
    switch(numRandom) {
        case 1:
            return "black";
        case 2:
            return "white";
        case 3:
            return "red";
        case 4:
            return "orange";
        case 5:
            return "yellow";
        case 6:
            return "green";
        case 7:
            return "blue";
        case 8:
            return "purple";
        case 9:
            return "pink";
        case 10:
            return "brown";
        case 11:
            return "grey";
    }
}

const clickBox = document.getElementById("box");

// Event listener with on click function to change color
clickBox.addEventListener("click", function() {
    var getColor = getRandomColor();
    clickBox.style.backgroundColor = getColor;
    document.getElementById("color").innerHTML = getColor;
    document.getElementById("color").style.color = getColor;
});
