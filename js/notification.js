
async function showNotification() {
    const result = await Notification.requestPermission();
    if (result === 'granted') {
        const noti = new Notification('Hello!', {
            boyd: 'It´s me.',
            icon: 'image/simpsons.jfif'
        });
        noti.onclick = () => alert('clicked');
    }
}
showNotification();