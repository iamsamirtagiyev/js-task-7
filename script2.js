const box = document.querySelector('.box')
const buttons = document.querySelectorAll('button')

buttons.forEach(btn =>{
    btn.addEventListener('click', function(){
        box.style.background = this.className
    })
})