// Registering a service worker
if('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(() => console.log("Service Worker Registered"));
}

(function() {
    $(document).ready(function(){
        setTimeout(() => {
            $('select').select();
        }, 4000);
    });
})(jQuery);