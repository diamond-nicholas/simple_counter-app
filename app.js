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
        }
        value.textContent = count;
    })
})