
async function showNotification() {
    const result = await Notification.requestPermission();
    if (result === 'granted') {
        const noti = new Notification('Hello!', {
            body: 'DOOOHHHHHHHH!',  //meddelande på push
            icon: 'image/simpsons.jfif', //bild som ska presenteras
            vibrate: [100, 50, 100],   //tid och styrka på vibration i telefon (100ms, paus 50ms, sedan vibrera i 100ms.)
            data: {  //data som vi från service worker kan jobba med
              dateOfArrival: Date.now(),  
              primaryKey: 1
            }
        });
        noti.onclick = () => alert('clicked');  //stänga push up
    }
}
showNotification();

