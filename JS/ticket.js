// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get event ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('eventId');
    
    if (eventId) {
        loadEventDetails(eventId);
    } else {
        // No event ID - use default event
        showDefaultEvent();
    }
    
    showRegistrationForm();
});

// Load event details from localStorage
function loadEventDetails(eventId) {
    const events = JSON.parse(localStorage.getItem('organizerEvents')) || [];
    const event = events.find(e => e.id === eventId);
    
    if (event) {
        // Update UI with event details
        document.getElementById('eventTitle').textContent = event.name;
        document.getElementById('eventDetails').textContent = 
            `📅 ${new Date(event.date).toLocaleString()} | 📍 ${event.venue} | 💰 ₹${event.price}`;
        document.getElementById('eventPrice').textContent = event.price;
        document.getElementById('amountDisplay').textContent = event.price;
        
        // Show event info
        document.getElementById('eventInfo').style.display = 'block';
        
        // Store event data
        window.currentEvent = event;
    } else {
        showDefaultEvent();
    }
}

// Show default event when no event ID is provided
function showDefaultEvent() {
    window.currentEvent = {
        name: "College Event 2024",
        price: 50,
        venue: "College Campus",
        date: new Date().toISOString()
    };
}

// ... (rest of your existing registration.js code remains the same)
// Just update the generatePaymentQR function to use dynamic amount:

function generatePaymentQR() {
    const qrContainer = document.getElementById('qrCode');
    if (!qrContainer) return;

    qrContainer.innerHTML = '';

    const upiId = 'eventifyplus@upi';
    const amount = window.currentEvent.price;
    
    const upiUrl = `upi://pay?pa=${upiId}&pn=EventifyPlus&am=${amount}&cu=INR&tn=${encodeURIComponent(window.currentEvent.name)}`;

    try {
        new QRCode(qrContainer, {
            text: upiUrl,
            width: 200,
            height: 200,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    } catch (error) {
        qrContainer.innerHTML = `
            <div style="width:200px;height:200px;background:white;display:flex;align-items:center;justify-content:center;border-radius:10px;color:black;font-weight:bold;flex-direction:column;">
                <div>QR CODE</div>
                <div style="font-size:12px;margin-top:5px;">Amount: ₹${amount}</div>
            </div>
        `;
    }
}

// ... (rest of the functions remain the same)