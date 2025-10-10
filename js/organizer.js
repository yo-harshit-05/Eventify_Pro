document.addEventListener('DOMContentLoaded', () => {
  const events = [
    {name:'Tech Fest 2025', date:'2025-10-15', venue:'Auditorium', duration:'2 Days'},
    {name:'Innovation Summit', date:'2025-11-05', venue:'Main Hall', duration:'1 Day'}
  ];
  const list = document.getElementById('eventList');
  events.forEach(e=>{
    const card = document.createElement('div');
    card.className='event-card';
    card.innerHTML = `<h3>${e.name}</h3>
      <p><b>Date:</b> ${e.date}</p>
      <p><b>Venue:</b> ${e.venue}</p>
      <p><b>Duration:</b> ${e.duration}</p>`;
    list.appendChild(card);
  });
});
