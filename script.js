// Simple loader removal after 1.5 seconds
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const loader = document.getElementById('cinematicLoader');
        if (loader) {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
        }
    }, 1500);

    // Navigation functionality
    const startJourneyBtn = document.getElementById('startJourneyBtn');
    if (startJourneyBtn) {
        startJourneyBtn.addEventListener('click', function() {
            window.location.href = 'signup.html';
        });
    }

    // Photo card hover effects
    const photoCards = document.querySelectorAll('.photo-card');
    photoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Role selection functionality for signup page
document.addEventListener('DOMContentLoaded', function() {
    const roleRadios = document.querySelectorAll('input[name="role"]');
    const studentFields = document.getElementById('student-fields');
    const organizerFields = document.getElementById('organizer-fields');
    const adminFields = document.getElementById('admin-fields');

    if (roleRadios.length > 0) {
        roleRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                // Hide all role-specific fields
                if (studentFields) studentFields.style.display = 'none';
                if (organizerFields) organizerFields.style.display = 'none';
                if (adminFields) adminFields.style.display = 'none';

                // Show fields for selected role
                if (this.value === 'student' && studentFields) {
                    studentFields.style.display = 'block';
                } else if (this.value === 'organizer' && organizerFields) {
                    organizerFields.style.display = 'block';
                } else if (this.value === 'admin' && adminFields) {
                    adminFields.style.display = 'block';
                }
            });
        });
    }

    // Form submission handling
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const email = document.getElementById('email')?.value;
            const password = document.getElementById('password')?.value;

            // Basic validation
            if (!email || !password) {
                showMessage('Please fill in all required fields!', 'error');
                isValid = false;
            }

            // Role-specific validation for signup
            const selectedRole = document.querySelector('input[name="role"]:checked');
            if (selectedRole) {
                if (selectedRole.value === 'organizer') {
                    const secretKey = document.getElementById('secretKey')?.value;
                    if (!secretKey) {
                        showMessage('Society Secret Key is required for organizers', 'error');
                        isValid = false;
                    }
                }
                if (selectedRole.value === 'admin') {
                    const adminKey = document.getElementById('adminKey')?.value;
                    if (!adminKey) {
                        showMessage('Admin Authorization Key is required', 'error');
                        isValid = false;
                    }
                }
            }

            if (isValid) {
                showMessage('Processing your request...', 'success');
                // Simulate API call
                setTimeout(() => {
                    if (window.location.pathname.includes('signup')) {
                        showMessage('Account created successfully! Redirecting...', 'success');
                        setTimeout(() => {
                            window.location.href = 'login.html';
                        }, 2000);
                    } else {
                        showMessage('Login successful! Redirecting...', 'success');
                        setTimeout(() => {
                            // Redirect based on role
                            const roleSelect = document.getElementById('role');
                            const role = roleSelect ? roleSelect.value : 'student';
                            redirectToDashboard(role);
                        }, 2000);
                    }
                }, 1500);
            }
        });
    }
});

// Redirect to appropriate dashboard
function redirectToDashboard(role) {
    const dashboards = {
        'student': 'student-dashboard.html',
        'organizer': 'organizer-dashboard.html',
        'admin': 'admin-dashboard.html'
    };
    window.location.href = dashboards[role] || 'student-dashboard.html';
}

// Show message function
function showMessage(message, type) {
    const existingMessage = document.querySelector('.message-popup');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const messageEl = document.createElement('div');
    messageEl.className = `message-popup ${type}`;
    messageEl.textContent = message;
    messageEl.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        ${type === 'success' ? 'background: linear-gradient(45deg, #4CAF50, #45a049);' : 'background: linear-gradient(45deg, #f5576c, #e53935);'}
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    document.body.appendChild(messageEl);
    
    setTimeout(() => {
        messageEl.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        messageEl.style.transform = 'translateX(100%)';
        setTimeout(() => {
            messageEl.remove();
        }, 300);
    }, 4000);
}