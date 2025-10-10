document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('continueBtn');
  if(btn){
    btn.addEventListener('click', () => {
      btn.style.transform = 'scale(0.9)';
      setTimeout(() => location.href = 'role.html', 500);
    });
  }

  const loginBtn = document.getElementById('loginBtn');
  if(loginBtn){
    loginBtn.addEventListener('click', () => {
      const params = new URLSearchParams(window.location.search);
      const role = params.get('role');
      if(role === 'organizer') location.href = 'organizer.html';
      else location.href = 'participant.html';
    });
  }
});
