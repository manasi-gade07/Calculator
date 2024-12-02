

function pick(val)
{
   document.getElementById("scr").value +=val;
}
function solve()
{
 let x =   document.getElementById("scr").value ;
 let y = eval(x);
 document.getElementById("scr").value = y;
}
function clr()
{
   document.getElementById("scr").value = " ";
}