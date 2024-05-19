const loginbtnButton = document.querySelector(".login-btn");
const signupModal = document.querySelector(".signup-modal")

loginbtnButton.addEventListener('click', () => {
    if (signupModal.style.display === 'block') {
        signupModal.style.display = 'none';
    }
    else {
        signupModal.style.display = 'block';
    }
});

//signup-login form

const backdrop = document.querySelector(".backdrop");
const closebtn = document.querySelector(".modal-header svg");
const signupLoginBtn = document.querySelector(".signup-modal-b1 .active");

signupLoginBtn.addEventListener('click', (e) => {
    backdrop.style.display = 'block'
})

backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop || e.target === closebtn)
        backdrop.style.display = 'none'
})