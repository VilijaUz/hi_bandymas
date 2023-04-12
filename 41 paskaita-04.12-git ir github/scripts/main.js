document.querySelectorAll('#git li')
.forEach(li  => li.addEventListener('click', e => {
console.log(e);
const confetti = document.createElement('img');
confetti.setAttribute('src','./images/confettiGif.gif');
confetti.style.position="absolute";
confetti.style.top= e.pageY+'px';//`${e.pageY}px`;
confetti.style.left= e.pageX+'px';//`${e.pageX}px`;
confetti.style.transform=`translate(50%,-50%)`;
confetti.style.zIndex='-1';
document.body.appendChild(confetti);
setTimeout(()=>{confetti.remove() }, 1900);
}));

