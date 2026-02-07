const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const question = document.getElementById('question');
const message = document.getElementById('message');
const successMessage = document.getElementById('success-message');
const btnGroup = document.querySelector('.btn-group');


yesBtn.addEventListener('click', () => {
    
    question.style.display = 'none';
    message.style.display = 'none';
    btnGroup.style.display = 'none';
    
   
    successMessage.style.display = 'block';
    
});

noBtn.addEventListener('click', moveButton);
noBtn.addEventListener('mouseover', moveButton); 

function moveButton() {

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;


    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;


    // We subtract the button size to ensure it doesn't go off-screen
    const randomX = Math.random() * (windowWidth - btnWidth);
    const randomY = Math.random() * (windowHeight - btnHeight);

    noBtn.style.position = 'fixed'; // Change to fixed to move freely around screen
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}