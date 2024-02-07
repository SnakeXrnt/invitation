document.addEventListener("DOMContentLoaded", () => {
    
    const urlParams = new URLSearchParams(window.location.search);
    
    const name = urlParams.get('name');
    
    document.querySelector('.greeting').textContent = name;

    
    setTimeout(() => {
        document.querySelector(".greeter").style.opacity = "0";
        document.querySelector(".invitation").style.opacity = "1";
    }, 1500);

    window.addEventListener('scroll', function() {
        var iframe = document.getElementById('myIframe');
        var rect = iframe.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
          iframe.style.visibility = 'visible';
          iframe.style.opacity = 1;
        }
    });

    // Add jQuery library
    var script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
    document.getElementsByTagName('head')[0].appendChild(script);

    // Modify the scroll button click event
    script.onload = function () {
        $('#scrollBtn').click(function(event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $(document).height() - $(window).height()
            }, 500);  // 2000 is the duration of the animation in milliseconds
        });
    };
})
