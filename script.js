document.addEventListener("DOMContentLoaded", () => {
    
    const urlParams = new URLSearchParams(window.location.search);
    
    const name = urlParams.get('name');
    
    document.querySelector('.greeting').textContent = name;

    
    setTimeout(() => {
        document.querySelector(".greeter").style.opacity = "0";
        document.querySelector(".invitation").style.opacity = "1";
    }, 3000);
})