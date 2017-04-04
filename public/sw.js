function sendMessageToClient(client, msg) {
  return new Promise((resolve, reject) => {
    var msgChannel = new MessageChannel();
    console.log('posting message');

    msgChannel.port1.onmessage = (event) => {
      if (event.data.error) {
        reject(event.data.error);
      } else {
        resolve(event.data);
      }
    };

    client.postMessage('SW says: hello');
  })
}

self.addEventListener('push', function(event) {  
  console.log('Received a push message', event);
  // console.log(event.data.text()); Example of how to get the data either json or text

  var title = 'Yay a message.';  
  var body = 'We have received a push message.';

  clients.matchAll().then(clients => {
    clients.forEach(client => {
      sendMessageToClient(client).then(m => console.log('sw received message')).catch(err => console.log(err));
    });
  });
  // event.waitUntil(  
  //   self.registration.showNotification(title, {  
  //     body: body,
  //   })
  // );  
});