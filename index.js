
document.getElementById("green").addEventListener('click',clickGreen)
function clickGreen(){
  console.log("Green clicked")
  document.getElementById('body').style.backgroundColor="green"

  
}

document.getElementById("orange").addEventListener('click', clickOrange )
function clickOrange(){
  console.log("Oranage clicked")
   document.getElementById('body').style.backgroundColor=""
}
