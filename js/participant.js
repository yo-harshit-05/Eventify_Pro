document.addEventListener('DOMContentLoaded', () => {
  const events = [
    {name:'Tech Fest 2025', date:'2025-10-15', regEnd:'2025-10-10'},
    {name:'Hackathon', date:'2025-11-02', regEnd:'2025-10-28'},
  ];
  const container = document.getElementById('participantEvents');
  events.forEach(e=>{
    const card = document.createElement('div');
    card.className='event-card';
    card.innerHTML = `<h3>${e.name}</h3>
      <p><b>Date:</b> ${e.date}</p>
      <p><b>Last Registration:</b> ${e.regEnd}</p>
      <button onclick="alert('Registered for ${e.name}')">Register</button>`;
    container.appendChild(card);
  });
});
