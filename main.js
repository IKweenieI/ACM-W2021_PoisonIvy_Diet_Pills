for (let i = 1; i <3; i++)
{
    document.getElementById(i.toString()).addEventListener("click", function (theID)
    {
        document.getElementById("input-num-".concat('', i.toString())).classList.toggle("display-none");
    })
}
