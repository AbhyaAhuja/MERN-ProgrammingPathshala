const res = document.querySelectorAll('div')
console.log(res)


// div[0].innerHTML="<p>Helllo</p>"


const res1 = document.querySelectorAll('div')
const c = document.querySelector('p');
res1[1].removeChild(c);



// _____________________________________________

// button functionality:
// EVENTS-

function getInfo(){
    // document.write('button was clicked')
    // removes every other element in DOM
    console.log('btn clicked')
    let d = document.querySelector("div")
    let el=document.createElement("p")
    el.innerText= "abhya"
    d.prepend(el)
    
}
   
// ______________________________________________________
// color-changing button - parameter in function of onclick i.e. event
function getInfoo(e){



    console.log(e)
    // e.target.style.backgroundColor='green';
  
    // js to css directly manipulation
    e.target.setAttribute('style','background-color:red')
}
