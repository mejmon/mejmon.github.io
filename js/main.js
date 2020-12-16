window.onload = () => {
    if ('serviceWorker' in navigator) { //serviceWoker måste ha samma namn som filnamnet
        navigator.serviceWorker
            .register('./serviceWorker.js');
    }
} //när allt är laddat och windows är laddat