// Modal and navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const dashboardBtn = document.querySelector('.dashboard-btn');
    const newsletterBtn = document.querySelector('.newsletter-btn');
    const dashboardModal = document.getElementById('dashboardModal');
    const newsletterModal = document.getElementById('newsletterModal');
    const closeBtns = document.querySelectorAll('.close-btn');
    
    // Navigation elements
    const teamLink = document.getElementById('teamLink');
    const protocolLink = document.getElementById('protocolLink');
    const teamContent = document.getElementById('teamContent');
    const protocolContent = document.getElementById('protocolContent');
    
    // Page switching functionality
    teamLink.addEventListener('click', function(e) {
        e.preventDefault();
        teamContent.style.display = 'block';
        protocolContent.style.display = 'none';
        teamLink.classList.add('active');
        protocolLink.classList.remove('active');
    });
    
    protocolLink.addEventListener('click', function(e) {
        e.preventDefault();
        protocolContent.style.display = 'block';
        teamContent.style.display = 'none';
        protocolLink.classList.add('active');
        teamLink.classList.remove('active');
    });

    // Open dashboard modal
    dashboardBtn.addEventListener('click', function() {
        dashboardModal.style.display = 'block';
    });

    // Open newsletter modal
    newsletterBtn.addEventListener('click', function() {
        newsletterModal.style.display = 'block';
    });

    // Close modals
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            dashboardModal.style.display = 'none';
            newsletterModal.style.display = 'none';
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === dashboardModal) {
            dashboardModal.style.display = 'none';
        }
        if (event.target === newsletterModal) {
            newsletterModal.style.display = 'none';
        }
    });

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        alert('Thank you for subscribing! We\'ll send our latest reports to ' + email);
        newsletterModal.style.display = 'none';
        this.reset();
    });
});

// Team tab functionality
function setActiveTab(element) {
    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.team-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Add active class to clicked tab
    element.classList.add('active');
    
    // Filter team members
    const filter = element.getAttribute('data-filter');
    const teamCards = document.querySelectorAll('.team-card');
    
    teamCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}