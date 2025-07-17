// Регистрация Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('service-worker.js')
      .then(function(registration) {
        console.log('ServiceWorker зарегистрирован');
      })
      .catch(function(err) {
        console.log('Ошибка регистрации ServiceWorker:', err);
      });
  });
}

// Обработка установки PWA
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  console.log('Приложение можно установить');
});

// Функция для вызова установки
function installPWA() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Пользователь установил приложение');
      }
      deferredPrompt = null;
    });
  }
}

// Проверка онлайн-статуса
function updateOnlineStatus() {
  if (!navigator.onLine) {
    alert('Вы сейчас офлайн. Некоторые функции могут быть недоступны.');
  }
}

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);
updateOnlineStatus();