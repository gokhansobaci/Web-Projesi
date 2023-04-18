const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());
  const json = JSON.stringify(data);

  fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: json
  })
  .then(response => {
    if (response.ok) {
      alert('Oturum açıldı');
      window.location.href = '/dashboard';
    } else {
      alert('Oturum açma başarısız oldu');
    }
  })
  .catch(error => {
    console.error('Oturum açma hatası:', error);
  });
});
