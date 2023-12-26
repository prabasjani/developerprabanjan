const onloadEffect = document.getElementById('onload-effect');

window.addEventListener('load', () => {
    onloadEffect.style.transform = 'scale(0.85)';
    setTimeout(() => {
        onloadEffect.style.transform = 'scale(1.04)';
    }, 500); 
})


// const onscrollEffect = document.getElementsByClassName('.enroll-btn');

// for (i = 0; i < onscrollEffect.length; i++) {
//     window.addEventListener('scroll', () => {
//         onscrollEffect[i].style.transform = 'scale(2)';
//     })
    
// }



const contentContainer = document.getElementsByClassName('content-container');

for (i = 0; i < contentContainer.length; i++) {
    
    contentContainer[i].addEventListener('click', function() {
        this.classList.toggle('active');
    }) 
};

