const mainPage = document.querySelector(".main-page");
const loginPage = document.querySelector(".login-page");
const middleContent = document.querySelector(".middle-content");
const btnTop = document.querySelector(".btn-top");
const newsFieldPage =document.querySelector(".fields-page");

const goToLoginPge=()=>{
    mainPage.style.display="none";
    loginPage.style.display="grid";
    };
middleContent.addEventListener('click', e=>{
    if(e.target.classList[1] ==='main-btn'){
        goToLoginPge();
    }
    else
    loginPage.style.display='none';
})

.btnTop.addEventListener('click', () =>{
    const inputUserInfo= document.querySelector('user info');
    const inputPassword = document.querySelector('password');

    if(inputUserInfo.value !==""&& inputPassword.value !==""){
        mainPage.style.display='none';
        newsFeedPage.style.display='block';
    }
})