let currentFont =1.4;

const makeBigger = (event) => {
   // make the font bigger
   currentFont +=0.2;
   setFont();
};

const makeSmaller = (event) => {
   currentFont -=0.2;
   setFont();
};

const setFont=()=>{
   document.querySelector('.content').style.fontSize = `${currentFont}em`;
   document.querySelector('h1').style.fontSize = `${currentFont+0.5}em`;
}


document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

