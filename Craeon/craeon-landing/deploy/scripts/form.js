document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('stepForm');
    const steps = form.querySelectorAll('.form-step');
    
    // Show first step initially
    steps[0].classList.add('active');
    
    // Handle next buttons
    const nextButtons = form.querySelectorAll('.next-btn');
    nextButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const currentStep = e.target.closest('.form-step');
            const inputs = currentStep.querySelectorAll('input, textarea');
            
            // Validate current step
            let isValid = true;
            inputs.forEach(input => {
                if (!input.checkValidity()) {
                    isValid = false;
                    input.reportValidity();
                }
            });
            
            if (isValid) {
                currentStep.classList.remove('active');
                currentStep.nextElementSibling.classList.add('active');
            }
        });
    });
    
    // Handle back buttons
    const backButtons = form.querySelectorAll('.back-btn');
    backButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const currentStep = e.target.closest('.form-step');
            currentStep.classList.remove('active');
            currentStep.previousElementSibling.classList.add('active');
        });
    });
    
    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = {
            name: form.querySelector('#name').value,
            email: form.querySelector('#email').value,
            message: form.querySelector('#message').value
        };
        
        // Add your form submission logic here
        console.log('Form Data:', formData);
        
        // Show success message (you can customize this)
        alert('Thank you for your submission! We will be in touch soon.');
        form.reset();
        
        // Reset to first step
        steps.forEach(step => step.classList.remove('active'));
        steps[0].classList.add('active');
    });
});