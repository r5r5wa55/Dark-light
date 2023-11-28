
const switchToggle = document.querySelector('input[type="checkbox"]');
const toggleIcon=document.getElementById('toggle-icon');
const nav=document.getElementById('nav');
const img1=document.getElementById('image1');
const img2=document.getElementById('image2');
const img3=document.getElementById('image3');



function switchMode(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-them','dark');
        darkMode();
        imageSwitchMode('dark')
    }else{
        lightMode();
        document.documentElement.setAttribute('data-them','light');
        imageSwitchMode('light')
    }
   
}

function darkMode(){
    
    toggleIcon.children[0].textContent="โหมดกลางคืน"
    toggleIcon.children[1].style.color='rgb(231, 138, 15)'
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    nav.style.backgroundColor='rgb(0 0 0 / 50%)';

}

function lightMode(){
    toggleIcon.children[0].textContent="โหมดกลางวัน"
    toggleIcon.children[1].style.color='rgb(255,92,92)'
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun')
  
    nav.style.backgroundColor='rgb(255 255 255 / 50%)';
}

function imageSwitchMode(mode){
    console.log(img2);
    img1.src=`image/undraw_dev_productivity_${mode}.svg`
    img2.src=`image/undraw_page_not_found_${mode}.svg`
    img3.src=`image/undraw_to_the_moon_${mode}.svg`

}

switchToggle.addEventListener('change',switchMode);

