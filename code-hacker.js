function myFunction() {
    document.getElementById("show").innerHTML = "Your Data is Submitted";
}

// const green = document.querySelector('.btn-green')
// function show() {
//     setTimeout(function () {
//         green.innerHTML = `<div class="spinner-border text-primary" role="status">
//             <span class="visually-hidden">Loading...</span>
//           </div>`
//         setTimeout(function () {
//             green.innerHTML = 'hello from green-hat'
//         }, 3000)
//         setTimeout(function () {
//             green.innerHTML = 'dont-click-many-times'
//         }, 1000)
//     },5000)
// }

// green.addEventListener('click', show)



const green = document.querySelector('.btn-green');

  function show() {
    // Display loading spinner
    green.innerHTML = `<div class="spinner-border text-light" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>`;

    // Simulate a time-consuming operation (e.g., an AJAX request) with setTimeout
    setTimeout(function () {
      // After 3 seconds, update the content
      green.innerHTML = 'hello from green-hat';

      // After another 1 second, update the content again
      setTimeout(function () {
        green.innerHTML = 'dont-click-many-times';
      }, 1000);
    }, 3000);
  }

  green.addEventListener('click', show);



  const red=document.querySelector('.btn-red')
  function showred(){
    red.innerHTML=`<div class="spinner-border text-light" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>`
  setTimeout(function(){
    red.innerHTML='hello from red-hat';
    setTimeout(function(){
        red.innerHTML='dont-click-many-times';
    },1000)
  },4000)
  }

  red.addEventListener('click',showred)

  const blue=document.querySelector('.btn-blue')
  function showblue(){
    blue.innerHTML=`<div class="spinner-border text-light" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>`
  setTimeout(function(){
    blue.innerHTML='hello from blue-hat';
    setTimeout(function(){
        blue.innerHTML='dont-click-many-times';
    },1000)
  },4000)
  }
  blue.addEventListener('click',showblue)


  const about=document.querySelector('#about')
  const services=document.querySelector('#services')
  const industries=document.querySelector('#industries')
  const portfolio=document.querySelector('#portfolio')
  const other=document.querySelector('#other')

  function tooglefunc1(){
    if(about.style.display==='none'){
    about.style.display='block'
  }
  else{
    about.style.display='none'
  }
  }

  function tooglefunc2(){
    if(services.style.display==='none'){
      services.style.display='block'
    }
    else{
      services.style.display='none'
    }
  }

  function tooglefunc3(){
    if(industries.style.display==='none'){
      industries.style.display='block'
    }
    else{
      industries.style.display='none'
    }
  }
  
  function tooglefunc4(){
    if(portfolio.style.display==='none'){
      portfolio.style.display='block'
    }
    else{
      portfolio.style.display='none'
    }
  }

  function tooglefunc5(){
    if(other.style.display==='none'){
      other.style.display='block'
    }
    else{
      other.style.display='none'
    }
  }