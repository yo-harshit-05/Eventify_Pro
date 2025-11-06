// student-dashboard.js

// Event data
const eventData = {
    'Tech Symposium 2025': {
        title: 'Tech Symposium 2025',
        date: 'November 15, 2025 | 10:00 AM - 4:00 PM',
        venue: 'Main Auditorium',
        organizer: 'Tech Club',
        category: 'Technology',
        description: 'Join us for the annual Tech Symposium featuring talks from industry experts, hands-on workshops, and networking opportunities. This event is perfect for students interested in technology, innovation, and career development in the tech industry.',
        banner: 'https://via.placeholder.com/800x200/667eea/ffffff?text=Tech+Symposium+2025',
        status: 'upcoming',
        registered: true,
        fee: 'Free',
        calendarDate: 15
    },
    'Cultural Fest': {
        title: 'Cultural Fest',
        date: 'November 22, 2025 | 2:00 PM - 8:00 PM',
        venue: 'Cultural Center',
        organizer: 'Cultural Club',
        category: 'Cultural',
        description: 'Experience the vibrant diversity of our college at the annual Cultural Fest. Enjoy performances, food stalls, art exhibitions, and cultural displays from various regions and communities.',
        banner: 'https://via.placeholder.com/800x200/f093fb/ffffff?text=Cultural+Fest',
        status: 'upcoming',
        registered: true,
        fee: '₹100',
        calendarDate: 22
    },
    'Web Development Workshop': {
        title: 'Web Development Workshop',
        date: 'November 30, 2025 | 9:00 AM - 1:00 PM',
        venue: 'Computer Lab 3',
        organizer: 'Coding Club',
        category: 'Workshop',
        description: 'Learn the fundamentals of web development in this hands-on workshop. We will cover HTML, CSS, JavaScript, and basic web design principles. Perfect for beginners!',
        banner: 'https://via.placeholder.com/800x200/10b981/ffffff?text=Web+Development+Workshop',
        status: 'upcoming',
        registered: true,
        fee: '₹50',
        calendarDate: 30
    },
    'AI & ML Conference': {
        title: 'AI & ML Conference',
        date: 'December 5, 2025 | 11:00 AM - 5:00 PM',
        venue: 'Conference Hall',
        organizer: 'Tech Club',
        category: 'Conference',
        description: 'Explore the latest advancements in Artificial Intelligence and Machine Learning. Featuring keynote speakers, technical sessions, and demonstrations of cutting-edge AI applications.',
        banner: 'https://via.placeholder.com/800x200/3b82f6/ffffff?text=AI+ML+Conference',
        status: 'upcoming',
        registered: false,
        fee: '₹200',
        calendarDate: 5
    },
    'Sports Tournament': {
        title: 'Sports Tournament',
        date: 'December 10, 2025 | 8:00 AM - 6:00 PM',
        venue: 'Sports Complex',
        organizer: 'Sports Club',
        category: 'Sports',
        description: 'Participate in our annual sports tournament featuring basketball, volleyball, badminton, and table tennis competitions. Open to all students!',
        banner: 'https://via.placeholder.com/800x200/f59e0b/ffffff?text=Sports+Tournament',
        status: 'upcoming',
        registered: false,
        fee: 'Free',
        calendarDate: 10
    },
    'Leadership Workshop': {
        title: 'Leadership Workshop',
        date: 'October 10, 2025 | 2:00 PM - 5:00 PM',
        venue: 'Seminar Hall',
        organizer: 'Cultural Club',
        category: 'Workshop',
        description: 'Develop your leadership skills through interactive sessions, group activities, and expert guidance. Learn effective communication, team management, and decision-making strategies.',
        banner: 'https://via.placeholder.com/800x200/8b5cf6/ffffff?text=Leadership+Workshop',
        status: 'attended',
        certificate: true,
        fee: 'Free',
        calendarDate: 10
    },
    'Hackathon 2025': {
        title: 'Hackathon 2025',
        date: 'September 25, 2025 | 9:00 AM - 9:00 PM',
        venue: 'Computer Center',
        organizer: 'Coding Club',
        category: 'Competition',
        description: '24-hour coding competition where teams develop innovative solutions to real-world problems. Prizes for the top three teams!',
        banner: 'https://via.placeholder.com/800x200/ef4444/ffffff?text=Hackathon+2025',
        status: 'attended',
        certificate: true,
        fee: 'Free',
        calendarDate: 25
    },
    'Career Fair': {
        title: 'Career Fair',
        date: 'September 15, 2025 | 10:00 AM - 4:00 PM',
        venue: 'Main Ground',
        organizer: 'Placement Cell',
        category: 'Career',
        description: 'Connect with top employers and explore internship and job opportunities. Bring your resume and be prepared for on-the-spot interviews!',
        banner: 'https://via.placeholder.com/800x200/6b7280/ffffff?text=Career+Fair',
        status: 'attended',
        certificate: false,
        fee: 'Free',
        calendarDate: 15
    }
};

// Calendar functionality
let currentDate = new Date(2025, 10, 1); // November 2025

function renderCalendar() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    document.getElementById('currentMonth').textContent = 
        `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
    
    const calendarGrid = document.getElementById('calendarDays');
    calendarGrid.innerHTML = '';
    
    // Add day headers
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    days.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;
        calendarGrid.appendChild(dayElement);
    });
    
    // Get first day of month and number of days
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'calendar-date';
        calendarGrid.appendChild(emptyCell);
    }
    
    // Add days of the month
    const today = new Date();
    for (let i = 1; i <= daysInMonth; i++) {
        const dateElement = document.createElement('div');
        dateElement.className = 'calendar-date';
        dateElement.textContent = i;
        
        // Check if this date has an event
        const hasEvent = Object.values(eventData).some(event => 
            event.calendarDate === i && 
            event.status === 'upcoming'
        );
        
        if (hasEvent) {
            dateElement.classList.add('has-event');
        }
        
        // Check if this is today
        if (i === today.getDate() && 
            currentDate.getMonth() === today.getMonth() && 
            currentDate.getFullYear() === today.getFullYear()) {
            dateElement.classList.add('current-day');
        }
        
        dateElement.onclick = () => showEventsOnDate(i);
        calendarGrid.appendChild(dateElement);
    }
}

function previousMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
    updateCalendarEvents();
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
    updateCalendarEvents();
}

function showEventsOnDate(date) {
    const eventsOnDate = Object.values(eventData).filter(event => 
        event.calendarDate === date && event.status === 'upcoming'
    );
    
    const calendarEvents = document.getElementById('calendarEvents');
    
    if (eventsOnDate.length > 0) {
        let eventsHTML = '<h4 style="margin-bottom: 1rem;">Events on this day:</h4>';
        eventsOnDate.forEach(event => {
            eventsHTML += `
                <div class="calendar-event-item">
                    <div class="calendar-event-title">${event.title}</div>
                    <div class="calendar-event-time">${event.date.split(' | ')[1]}</div>
                </div>
            `;
        });
        calendarEvents.innerHTML = eventsHTML;
    } else {
        calendarEvents.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">No events on this day.</p>';
    }
}

function updateCalendarEvents() {
    document.getElementById('calendarEvents').innerHTML = '<p style="text-align: center; color: var(--text-secondary);">Click on a date to view events</p>';
}

// Modal functions
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
    
    // Populate modals when opened
    if (modalId === 'eventsRegisteredModal') {
        populateEventsRegisteredModal();
    } else if (modalId === 'upcomingEventsModal') {
        populateUpcomingEventsModal();
    } else if (modalId === 'attendedEventsModal') {
        populateAttendedEventsModal();
    } else if (modalId === 'certificatesModal') {
        populateCertificatesModal();
    } else if (modalId === 'ticketsModal') {
        populateTicketsModal();
    } else if (modalId === 'calendarModal') {
        renderCalendar();
        updateCalendarEvents();
    }
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

function openEventModal(eventName) {
    const event = eventData[eventName];
    if (event) {
        document.getElementById('eventModalTitle').textContent = event.title;
        document.getElementById('eventDateTime').textContent = event.date;
        document.getElementById('eventVenue').textContent = event.venue;
        document.getElementById('eventOrganizer').textContent = event.organizer;
        document.getElementById('eventCategory').textContent = event.category;
        document.getElementById('eventDescription').textContent = event.description;
        document.getElementById('eventBanner').src = event.banner;
        document.getElementById('eventFee').textContent = event.fee;
        
        const actionBtn = document.getElementById('eventActionBtn');
        if (event.status === 'attended') {
            actionBtn.textContent = 'View Certificate';
            actionBtn.onclick = () => {
                closeModal('eventDetailsModal');
                viewCertificate(eventName);
            };
        } else if (event.registered) {
            actionBtn.textContent = 'Already Registered';
            actionBtn.disabled = true;
            actionBtn.style.background = 'var(--light-gray)';
            actionBtn.style.cursor = 'not-allowed';
        } else {
            actionBtn.textContent = 'Register for Event';
            actionBtn.disabled = false;
            actionBtn.style.background = '';
            actionBtn.style.cursor = 'pointer';
            actionBtn.onclick = () => {
                registerForEvent(eventName);
            };
        }
        
        openModal('eventDetailsModal');
    }
}

function showQRCode(eventName) {
    document.getElementById('qrEventTitle').textContent = `${eventName} - QR Code`;
    // In a real application, you would generate a unique QR code for each event
    document.getElementById('qrCodeImage').src = `https://via.placeholder.com/200/ffffff/667eea?text=${encodeURIComponent(eventName)}`;
    closeModal('ticketsModal');
    openModal('qrCodeModal');
}

function viewCertificate(eventName) {
    document.getElementById('certificateEventTitle').textContent = `${eventName} - Certificate`;
    // In a real application, you would show the actual certificate
    document.getElementById('certificateImage').src = `https://via.placeholder.com/600x400/ffffff/667eea?text=${encodeURIComponent(eventName)}+Certificate`;
    openModal('certificateViewModal');
}

function downloadCertificate() {
    alert('Certificate download started!');
    // In a real application, this would trigger a file download
}

function registerForEvent(eventName) {
    if (eventData[eventName]) {
        eventData[eventName].registered = true;
        alert(`Successfully registered for ${eventName}!`);
        updateEventStats();
        loadUpcomingEvents();
        loadRecentEvents();
        closeModal('eventDetailsModal');
    }
}

function updateEventStats() {
    const registeredEvents = Object.values(eventData).filter(event => event.registered).length;
    const upcomingEvents = Object.values(eventData).filter(event => event.status === 'upcoming').length;
    const attendedEvents = Object.values(eventData).filter(event => event.status === 'attended').length;
    
    // Update the stats cards
    document.querySelector('.stat-card:nth-child(1) .stat-value').textContent = registeredEvents;
    document.querySelector('.stat-card:nth-child(2) .stat-value').textContent = upcomingEvents;
    document.querySelector('.stat-card:nth-child(3) .stat-value').textContent = attendedEvents;
}

function loadUpcomingEvents() {
    const eventsList = document.getElementById('eventsList');
    if (!eventsList) return;
    
    // Clear existing events
    eventsList.innerHTML = '';
    
    // Get upcoming events
    const upcomingEvents = Object.values(eventData)
        .filter(event => event.status === 'upcoming');
    
    // Add events to the list
    upcomingEvents.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.onclick = () => openEventModal(event.title);
        
        const registerButton = event.registered ? 
            '<button class="registered-btn" disabled>Already Registered</button>' :
            '<button class="register-btn" onclick="event.stopPropagation(); registerForEvent(\'' + event.title + '\')">Register Now</button>';
        
        eventCard.innerHTML = `
            <div class="event-header">
                <div>
                    <h4 class="event-title">${event.title}</h4>
                    <div>
                        <span class="event-club ${getClubClass(event.organizer)}">${event.organizer}</span>
                        <span class="event-fee ${event.fee === 'Free' ? 'fee-free' : 'fee-paid'}">${event.fee}</span>
                    </div>
                </div>
            </div>
            <div class="event-details">
                <div class="event-detail">
                    <i class="far fa-calendar"></i>
                    <span>${event.date}</span>
                </div>
                <div class="event-detail">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${event.venue}</span>
                </div>
                <div class="event-detail">
                    <i class="fas fa-tag"></i>
                    <span>${event.category}</span>
                </div>
            </div>
            <div class="event-actions">
                <button class="view-details-btn">View Details</button>
                ${registerButton}
            </div>
        `;
        
        eventsList.appendChild(eventCard);
    });
}

function loadRecentEvents() {
    const recentEventsList = 
        document.getElementById('recentEventsListMain') || 
        document.getElementById('recentEventsList');
    if (!recentEventsList) return;
    
    // Clear existing events
    recentEventsList.innerHTML = '';
    
    // Get recent upcoming events (limit to 3)
    const recentEvents = Object.values(eventData)
        .filter(event => event.status === 'upcoming')
        .slice(0, 3);
    
    // Add events to the list
    recentEvents.forEach(event => {
        const eventDate = new Date(event.date.split(' | ')[0]);
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        
        const eventItem = document.createElement('div');
        eventItem.className = 'recent-event-item';
        eventItem.onclick = () => openEventModal(event.title);
        
        eventItem.innerHTML = `
            <div class="recent-event-date">
                <div class="recent-event-day">${eventDate.getDate()}</div>
                <div class="recent-event-month">${monthNames[eventDate.getMonth()]}</div>
            </div>
            <div class="recent-event-info">
                <div class="recent-event-title">${event.title}</div>
                <div class="recent-event-club">${event.organizer}</div>
            </div>
        `;
        
        recentEventsList.appendChild(eventItem);
    });
}


function filterEvents(category) {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const eventsList = document.getElementById('eventsList');
    const events = eventsList.querySelectorAll('.event-card');
    
    events.forEach(event => {
        const eventCategory = event.querySelector('.event-club').textContent.toLowerCase();
        const eventFee = event.querySelector('.event-fee').textContent;
        const eventDetails = event.querySelector('.event-details').textContent;
        
        let showEvent = false;
        
        switch(category) {
            case 'all':
                showEvent = true;
                break;
            case 'tech':
                showEvent = eventCategory.includes('tech');
                break;
            case 'cultural':
                showEvent = eventCategory.includes('cultural');
                break;
            case 'workshop':
                showEvent = eventDetails.includes('Workshop');
                break;
            case 'free':
                showEvent = eventFee === 'Free';
                break;
        }
        
        event.style.display = showEvent ? 'block' : 'none';
    });
}

function filterModalEvents(category) {
    const filterBtns = document.querySelectorAll('#upcomingEventsModal .filter-btn');
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const eventsList = document.getElementById('upcomingEventsList');
    const events = eventsList.querySelectorAll('.event-card');
    
    events.forEach(event => {
        const eventCategory = event.querySelector('.event-club').textContent.toLowerCase();
        const eventFee = event.querySelector('.event-fee').textContent;
        const eventDetails = event.querySelector('.event-details').textContent;
        
        let showEvent = false;
        
        switch(category) {
            case 'all':
                showEvent = true;
                break;
            case 'tech':
                showEvent = eventCategory.includes('tech');
                break;
            case 'cultural':
                showEvent = eventCategory.includes('cultural');
                break;
            case 'workshop':
                showEvent = eventDetails.includes('Workshop');
                break;
            case 'free':
                showEvent = eventFee === 'Free';
                break;
        }
        
        event.style.display = showEvent ? 'block' : 'none';
    });
}

function getClubClass(organizer) {
    const clubMap = {
        'Tech Club': 'club-tech',
        'Cultural Club': 'club-cultural',
        'Coding Club': 'club-coding',
        'Sports Club': 'club-cultural',
        'Placement Cell': 'club-tech'
    };
    return clubMap[organizer] || 'club-tech';
}

function populateEventsRegisteredModal() {
    const modalBody = document.getElementById('registeredEventsList');
    if (!modalBody) return;
    
    const registeredEvents = Object.values(eventData).filter(event => event.registered);
    
    let eventsHTML = '';
    if (registeredEvents.length === 0) {
        eventsHTML = '<p style="text-align: center; color: var(--text-secondary);">No events registered yet.</p>';
    } else {
        registeredEvents.forEach(event => {
            eventsHTML += `
                <div class="event-card" onclick="openEventModal('${event.title}')">
                    <div class="event-header">
                        <div>
                            <h4 class="event-title">${event.title}</h4>
                            <span class="event-club ${getClubClass(event.organizer)}">${event.organizer}</span>
                        </div>
                        <span class="status-badge ${event.status === 'attended' ? 'status-attended' : 'status-pending'}">
                            ${event.status === 'attended' ? 'Attended' : 'Registered'}
                        </span>
                    </div>
                    <div class="event-details">
                        <div class="event-detail">
                            <i class="far fa-calendar"></i>
                            <span>${event.date}</span>
                        </div>
                        <div class="event-detail">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${event.venue}</span>
                        </div>
                    </div>
                    <div class="event-actions">
                        <button class="view-ticket-btn" onclick="event.stopPropagation(); showQRCode('${event.title}')">View Ticket</button>
                    </div>
                </div>
            `;
        });
    }
    
    modalBody.innerHTML = eventsHTML;
}

function populateUpcomingEventsModal() {
    const modalBody = document.getElementById('upcomingEventsList');
    if (!modalBody) return;
    
    const upcomingEvents = Object.values(eventData).filter(event => event.status === 'upcoming');
    
    let eventsHTML = '';
    if (upcomingEvents.length === 0) {
        eventsHTML = '<p style="text-align: center; color: var(--text-secondary);">No upcoming events.</p>';
    } else {
        upcomingEvents.forEach(event => {
            const registerButton = event.registered ? 
                '<button class="registered-btn" disabled>Already Registered</button>' :
                '<button class="register-btn" onclick="event.stopPropagation(); registerForEvent(\'' + event.title + '\')">Register Now</button>';
            
            eventsHTML += `
                <div class="event-card" onclick="openEventModal('${event.title}')">
                    <div class="event-header">
                        <div>
                            <h4 class="event-title">${event.title}</h4>
                            <div>
                                <span class="event-club ${getClubClass(event.organizer)}">${event.organizer}</span>
                                <span class="event-fee ${event.fee === 'Free' ? 'fee-free' : 'fee-paid'}">${event.fee}</span>
                            </div>
                        </div>
                    </div>
                    <div class="event-details">
                        <div class="event-detail">
                            <i class="far fa-calendar"></i>
                            <span>${event.date}</span>
                        </div>
                        <div class="event-detail">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${event.venue}</span>
                        </div>
                    </div>
                    <div class="event-actions">
                        <button class="view-details-btn">View Details</button>
                        ${registerButton}
                    </div>
                </div>
            `;
        });
    }
    
    modalBody.innerHTML = eventsHTML;
}

function populateAttendedEventsModal() {
    const modalBody = document.getElementById('attendedEventsList');
    if (!modalBody) return;
    
    const attendedEvents = Object.values(eventData).filter(event => event.status === 'attended');
    
    let eventsHTML = '';
    if (attendedEvents.length === 0) {
        eventsHTML = '<p style="text-align: center; color: var(--text-secondary);">No events attended yet.</p>';
    } else {
        attendedEvents.forEach(event => {
            eventsHTML += `
                <div class="event-card" onclick="openEventModal('${event.title}')">
                    <div class="event-header">
                        <div>
                            <h4 class="event-title">${event.title}</h4>
                            <span class="event-club ${getClubClass(event.organizer)}">${event.organizer}</span>
                        </div>
                        <div>
                            <span class="status-badge status-attended">Attended</span>
                            <span class="status-badge ${event.certificate ? 'status-certificate' : 'status-pending'}">
                                ${event.certificate ? 'Certificate Available' : 'No Certificate'}
                            </span>
                        </div>
                    </div>
                    <div class="event-details">
                        <div class="event-detail">
                            <i class="far fa-calendar"></i>
                            <span>${event.date}</span>
                        </div>
                        <div class="event-detail">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${event.venue}</span>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    
    modalBody.innerHTML = eventsHTML;
}

function populateCertificatesModal() {
    const modalBody = document.getElementById('certificatesList');
    if (!modalBody) return;
    
    const certificateEvents = Object.values(eventData).filter(event => 
        event.status === 'attended' && event.certificate
    );
    
    let certificatesHTML = '';
    if (certificateEvents.length === 0) {
        certificatesHTML = '<p style="text-align: center; color: var(--text-secondary);">No certificates available yet.</p>';
    } else {
        certificateEvents.forEach(event => {
            certificatesHTML += `
                <div class="certificate-card">
                    <div class="certificate-info">
                        <h4>${event.title}</h4>
                        <div class="certificate-date">Completed on ${event.date.split(' | ')[0]}</div>
                        <div class="event-detail">
                            <i class="fas fa-calendar-check"></i>
                            <span>Attended on ${event.date.split(' | ')[0]}</span>
                        </div>
                    </div>
                    <div class="ticket-actions">
                        <button class="btn btn-primary" onclick="viewCertificate('${event.title}')">View</button>
                        <button class="btn btn-secondary" onclick="downloadCertificate()">Download</button>
                    </div>
                </div>
            `;
        });
    }
    
    modalBody.innerHTML = certificatesHTML;
}

function populateTicketsModal() {
    const modalBody = document.getElementById('ticketsList');
    if (!modalBody) return;
    
    const registeredEvents = Object.values(eventData).filter(event => 
        event.registered && event.status === 'upcoming'
    );
    
    let ticketsHTML = '';
    if (registeredEvents.length === 0) {
        ticketsHTML = '<p style="text-align: center; color: var(--text-secondary);">No tickets available.</p>';
    } else {
        registeredEvents.forEach(event => {
            ticketsHTML += `
                <div class="ticket-card">
                    <div class="ticket-info">
                        <h4>${event.title}</h4>
                        <div class="ticket-date">${event.date}</div>
                        <div class="event-detail">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${event.venue}</span>
                        </div>
                    </div>
                    <div class="ticket-actions">
                        <button class="btn btn-primary" onclick="showQRCode('${event.title}')">View QR Code</button>
                        <button class="btn btn-secondary">Download</button>
                    </div>
                </div>
            `;
        });
    }
    
    modalBody.innerHTML = ticketsHTML;
}

function toggleEditProfile() {
    const editForm = document.getElementById('editProfileForm');
    const editBtn = document.getElementById('editProfileBtn');
    
    if (editForm.style.display === 'none' || editForm.style.display === '') {
        // Switch to edit mode
        editForm.style.display = 'block';
        editBtn.textContent = 'Save Changes';
        editBtn.onclick = saveProfileChanges;
    } else {
        // Save changes
        saveProfileChanges();
    }
}

function saveProfileChanges() {
    // Get values from form
    const name = document.getElementById('editName').value;
    const email = document.getElementById('editEmail').value;
    const phone = document.getElementById('editPhone').value;
    const year = document.getElementById('editYear').value;
    const dept = document.getElementById('editDept').value;
    
    // Update profile display
    document.getElementById('profileName').textContent = name;
    document.getElementById('profileEmail').textContent = email;
    document.getElementById('profilePhone').textContent = phone;
    document.getElementById('profileYear').textContent = year;
    document.getElementById('profileDept').textContent = dept;
    
    // Update user info in header
    document.querySelector('.user-name').textContent = name.split(' ')[0]; // First name only
    
    // Switch back to view mode
    document.getElementById('editProfileForm').style.display = 'none';
    document.getElementById('editProfileBtn').textContent = 'Edit Profile';
    document.getElementById('editProfileBtn').onclick = toggleEditProfile;
    
    alert('Profile updated successfully!');
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        // In a real application, this would redirect to login page
        alert('Logged out successfully!');
        // window.location.href = 'login.html';
    }
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', function () {
    const storedUser = localStorage.getItem('userData');
    if (!storedUser) {
        window.location.href = 'login.html';
        return;
    }

    const user = JSON.parse(storedUser);
    console.log('Loaded user data:', user);

    // Header info
    document.querySelector('.user-name').textContent = user.fullname || 'Student';
    document.querySelector('.user-role').textContent = user.role || 'Student';
    document.querySelector('.avatar').textContent = user.fullname?.charAt(0).toUpperCase() || 'S';
    document.querySelector('.welcome-text h2').textContent = `Welcome ${user.fullname || 'Student'}!`;

    // Profile modal
    document.getElementById('profileName').textContent = user.fullname || '-';
    document.getElementById('profileRole').textContent = user.role || 'Student';
    document.getElementById('profileEmail').textContent = user.email || '-';
    document.getElementById('profileRoll').textContent = user.rollnumber || '-';
    document.getElementById('profileYear').textContent = user.year || '-';
    document.getElementById('profilePhone').textContent = user.phone || '-';

    // ✅ ADD THESE TWO LINES:
    updateEventStats();
    loadRecentEvents();
});

