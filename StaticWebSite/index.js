Idx = 0
images=["first.jpg","second.jpg","third.jpg","fourth.jpg",
"fifth.jpg","sixth.jpg"]

setInterval(
    function() {
        Idx =  Math.round(Math.random()*5)
     document.getElementById("img1").src = images[Idx]
    },10000
)

function changeImage(arrowType)
{
if(arrowType == "right")
{
    Idx = Idx==5?0:++Idx
}
if(arrowType == "left")
{
    Idx = Idx==5?0:--Idx
}
document.getElementById("img1").src = "images/" + images[Idx]
}