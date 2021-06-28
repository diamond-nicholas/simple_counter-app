//set initial timer

let count = 0;

//target and select html elements

const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e) {
        const styles =  e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--
        }else if(styles.contains('increase')) {
            count++
        }else {
            count = 0
        }
        if(count > 0) {
            value.style.color = 'green'
        }else if(count < 0) {
            value.style.color = 'red'
        } else {
            value.style.color = '#222'
        }
        value.textContent = count;
    })
})