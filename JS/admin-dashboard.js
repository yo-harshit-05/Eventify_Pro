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

function openApprovalModal(approvalName) {
    alert(`Opening details for: ${approvalName}`);
    // In a real application, this would open a specific approval modal
}

function approveApproval(approvalName) {
    if (confirm(`Are you sure you want to approve ${approvalName}?`)) {
        alert(`${approvalName} has been approved!`);
        // In a real application, this would send an approval to the server
    }
}

function rejectApproval(approvalName) {
    if (confirm(`Are you sure you want to reject ${approvalName}?`)) {
        alert(`${approvalName} has been rejected!`);
        // In a real application, this would send a rejection to the server
    }
}

// Settings tab functionality
function openSettingsTab(tabName) {
    // Hide all settings content
    const settingsContents = document.querySelectorAll('.settings-content');
    settingsContents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all tabs
    const settingsTabs = document.querySelectorAll('.settings-tab');
    settingsTabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected tab content and activate tab
    document.getElementById(`${tabName}-settings`).classList.add('active');
    event.target.classList.add('active');
}

// Close modal when clicking outside of it
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

// Sample data for demonstration
document.addEventListener('DOMContentLoaded', function () {
    console.log('Admin dashboard loaded');
});