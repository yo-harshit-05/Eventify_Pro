// WORKING NAVIGATION SYSTEM WITH ERROR HANDLING
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Page loaded:', window.location.href);

    // Remove loader after 1.5 seconds
    setTimeout(function() {
        const loader = document.getElementById('cinematicLoader');
        if (loader) {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
        }
    }, 1500);

    // Start Journey button
    const startJourneyBtn = document.getElementById('startJourneyBtn');
    if (startJourneyBtn) {
        startJourneyBtn.addEventListener('click', function() {
            window.location.href = 'signup.html';
        });
    }

    // LOGIN FORM - WITH ERROR HANDLING
    const loginForm = document.querySelector('.login-form');
    if (loginForm && window.location.href.includes('login')) {
        console.log('✅ Login form detected');
        
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('✅ Login form submitted');
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const role = document.getElementById('role').value;

            console.log('✅ Form data:', { email, role });

            // Basic validation
            if (!email || !password || !role) {
                alert('Please fill all fields!');
                return;
            }

            // SMART REDIRECT - TRIES MULTIPLE FILE NAMES
            redirectToDashboard(role);
        });
    }

    // SIGNUP FORM
    const signupForm = document.querySelector('.login-form');
    if (signupForm && window.location.href.includes('signup')) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullname = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const selectedRole = document.querySelector('input[name="role"]:checked');

            if (!fullname || !email || !password || !confirmPassword || !selectedRole) {
                alert('Please fill all required fields!');
                return;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            alert('Account created! Redirecting to login...');
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1000);
        });
    }

    // Role selection show/hide
    const roleRadios = document.querySelectorAll('input[name="role"]');
    const studentFields = document.getElementById('student-fields');
    const organizerFields = document.getElementById('organizer-fields');
    const adminFields = document.getElementById('admin-fields');

    roleRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (studentFields) studentFields.style.display = 'none';
            if (organizerFields) organizerFields.style.display = 'none';
            if (adminFields) adminFields.style.display = 'none';

            if (this.value === 'student' && studentFields) {
                studentFields.style.display = 'block';
            } else if (this.value === 'organizer' && organizerFields) {
                organizerFields.style.display = 'block';
            } else if (this.value === 'admin' && adminFields) {
                adminFields.style.display = 'block';
            }
        });
    });

    // Photo card effects
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

// SMART REDIRECT FUNCTION - TRIES MULTIPLE FILENAMES
function redirectToDashboard(role) {
    console.log('🔍 Redirecting for role:', role);
    
    // Define possible filenames for each role
    const fileOptions = {
        'student': [
            'student-dashboard.html',
            'student-dashboard',
            'student_dashboard.html',
            'student.html'
        ],
        'organizer': [
            'organiser.html',      // British spelling
            'organizer.html',      // American spelling  
            'organiser',
            'organizer',
            'organizer-dashboard.html',
            'organiser-dashboard.html'
        ],
        'admin': [
            'homeadmin.html',
            'admin.html',
            'admin-dashboard.html',
            'homeadmin'
        ]
    };
    
    const options = fileOptions[role] || fileOptions.student;
    let currentTry = 0;
    
    function tryNextFile() {
        if (currentTry >= options.length) {
            // All options failed
            alert(`Error: Could not find dashboard page for ${role}. Please check if the file exists.`);
            console.error('❌ All file options failed:', options);
            return;
        }
        
        const fileToTry = options[currentTry];
        console.log(`🔍 Trying file: ${fileToTry} (attempt ${currentTry + 1}/${options.length})`);
        
        // Test if file exists by creating an image request
        const test = new Image();
        test.onload = function() {
            console.log(`✅ File found: ${fileToTry}`);
            window.location.href = fileToTry;
        };
        test.onerror = function() {
            console.log(`❌ File not found: ${fileToTry}`);
            currentTry++;
            tryNextFile();
        };
        test.src = fileToTry + '?test=' + Date.now(); // Add timestamp to avoid cache
    }
    
    // Start trying files
    tryNextFile();
}

// Modal functions
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function openEventModal(eventName) {
    document.getElementById('eventModalTitle').textContent = eventName;
    openModal('eventDetailsModal');
}

// Logout function
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        window.location.href = 'index.html';
    }
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}