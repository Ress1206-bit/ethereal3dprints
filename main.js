
const unlock = () => {
    let code = document.getElementById("code").value;
    console.log(code)
    if(code == 54457){
        document.getElementById("putIncode").style.display = "none";
        document.getElementById("fillOutForm").style.display = "block";
    }
}

const Thankyou = () => {
    document.getElementById("fillOutForm").style.display = "none";
    document.getElementById("thankyou").style.display = "block"
  }