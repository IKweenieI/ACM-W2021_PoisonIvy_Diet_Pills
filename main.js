for (let i = 1; i <14; i++)
{
    document.getElementById(i.toString()).addEventListener("click", function ()
    {
        console.log(document.getElementById(i.toString()))
        document.getElementById("input-num-".concat('', i.toString())).classList.toggle("display-none");
    })
}
