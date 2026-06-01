// Dark Mode

function toggleDarkMode(){
document.body.classList.toggle("dark-mode");
}

// Counter Animation

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");
const count=+counter.innerText;

const increment=target/100;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(update,20);

}else{

counter.innerText=target;

}

}

update();

});

// Scroll Animation

const fades=document.querySelectorAll('.fade');

window.addEventListener('scroll',()=>{

fades.forEach(item=>{

const position=item.getBoundingClientRect().top;

if(position<window.innerHeight-100){

item.classList.add('show');

}

});

});

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}