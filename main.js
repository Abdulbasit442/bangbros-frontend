 document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('infoForm');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const formData = new FormData(form);

   fetch('https://bangbros-backend.onrender.com/submit-form', {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(data => {
        console.log('Response:', data); // For debugging

        if (data.message === 'success') {
          document.getElementById('modalBox').style.display = 'flex';
        } else {
          alert('⚠️ Something went wrong. Please try again.');
        }
      })
      .catch(err => {
        console.error('Fetch error:', err);
        alert('❌ Failed to submit form. Backend may be offline.');
      });
    });

    document.getElementById('closeModal').addEventListener('click', function () {
      document.getElementById('modalBox').style.display = 'none';
    });
  });