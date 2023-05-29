images=["first.jpg","second.jpeg","third.jpeg","fourth.jpeg",
"fifth.jpeg",
"sixth.jpg"]

setInterval(
    function() {
     document.getElementById("img1").src = images[ Math.round(Math.random()*5)]
    },2000
)