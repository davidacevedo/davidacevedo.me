// Function to allow the vapid key to be passed in as the application server key
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');
 
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
 
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

function subscribe(serviceWorkerRegistration) {
  return serviceWorkerRegistration.pushManager.getSubscription()
    .then(subscription => {
      if (!subscription) {
        console.log('subscribing to push notifications');
        return serviceWorkerRegistration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array('BCP5781ELmiSdYvof4qegogXpeNMg4RLhZVCzUZ34b9-McVn69WdacaTdeI7EVrZ4gLkFQKc5rEvC5Lxxt4ITo8')
        });
      }

      return subscription;
    });
}

function sendSubscriptionToServer(subscription) {
  fetch('http://localhost:3000/push', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(subscription),
  })
  .then(res => res.text())
  .then(text => console.log(text))
  .catch(err => console.log(err));
}

export default function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(() => {
        if (!('showNotification' in ServiceWorkerRegistration.prototype)) {
          console.warn('Notification aren\'t supported.');
          return;
        }
        // Check the users Notification permission
        if (Notification.permission === 'denied') {
          console.warn('The user has blocked notifications.');
          return;
        }
        // Check if push messaging is supported  
        if (!('PushManager' in window)) {  
          console.warn('Push messaging isn\'t supported.');  
          return;  
        }

        // Once the service worker is ready then subscribe for notifications
        return navigator.serviceWorker.ready.then(serviceWorkerRegistration => subscribe(serviceWorkerRegistration));
      }).then(subscription => {
        console.log('Current subscription');
        console.log(subscription);
        // console.log(subscription.unsubscribe);
        // subscription.unsubscribe()

        

        // fetch('http://localhost:3000/push', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(subscription),
        // })
        // .then(res => res.text())
        // .then(text => console.log(text))
        // .catch(err => console.log(err));

      }).catch(err => {
        console.warn('Error during getSubscription()', err);
      });
      navigator.serviceWorker.addEventListener('message', function(event) {
        console.log('received a message');
        console.log(event);
      });
  } else {
    console.warn('Service workers aren\'t supported in this browser.');
  }
}

