let namedisplay=document.getElementById('namedisplay')
let dName=document.getElementById('dName')
let btn=document.getElementById('btn')
let cartCount=document.getElementById('cartCount')
let checklocal=localStorage.getItem('currentuser')


if(checklocal!=null){
    namedisplay.style.display='flex'
    btn.style.display='none'
    let names=JSON.parse(checklocal).fullName.toUpperCase()
    dName.innerText=names

}
    
function logout(){
    localStorage.removeItem('currentuser')
    namedisplay.style.display='none'
    btn.style.display='flex'
}


const localdata = JSON.parse(localStorage.getItem("order")) || [];

if (localdata.length === 0) {
  cartCount.innerHTML = 0;
} else {
  cartCount.innerHTML = localdata.length;
}



