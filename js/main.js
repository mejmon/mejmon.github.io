window.onload = () => {
    if ('serviceWorker' in navigator) { //serviceWoker måste ha samma namn som filnamnet
        navigator.serviceWorker
            .register('./serviceWorker.js');
    }
} //när allt är laddat och windows är laddat



async function showNotification() {
    const result = await Notification.requestPermission();
    if (result === 'granted') {
        const noti = new Notification('Hello!', {
            boyd: 'It´s me.',
            icon: 'image/simpsons.jfif'
        });
        registration.showNotification('My notification', options);
    }
}
