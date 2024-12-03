document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    
    startButton.addEventListener('click', () => {
        // Collect all the settings
        const settings = {
            filters: {
                firstCreator: document.getElementById('firstCreator').checked,
                devOut: document.getElementById('devOut').checked,
                fundedCex: document.getElementById('fundedCex').checked,
                uniqueSocials: document.getElementById('uniqueSocials').checked,
                atLeastOneSocial: document.getElementById('atLeastOneSocial').checked,
                websiteWorking: document.getElementById('websiteWorking').checked,
                uniqueImage: document.getElementById('uniqueImage').checked,
                uniqueName: document.getElementById('uniqueName').checked
            },
            parameters: {
                marketCap: document.getElementById('marketCap').value,
                minHolders: document.getElementById('minHolders').value,
                maxDevBuy: document.getElementById('maxDevBuy').value,
                minDevBuy: document.getElementById('minDevBuy').value,
                maxCoinAge: document.getElementById('maxCoinAge').value
            },
            webhookUrl: document.getElementById('webhookUrl').value
        };

        // Validate webhook URL
        if (!settings.webhookUrl) {
            alert('Please enter a Discord webhook URL');
            return;
        }

        // Here you would implement the actual monitoring logic
        console.log('Starting monitor with settings:', settings);
        startButton.textContent = 'Monitoring...';
        startButton.disabled = true;
    });

    // Add input validation for number fields
    const numberInputs = document.querySelectorAll('input[type="number"]');
    numberInputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.value < 0) input.value = 0;
        });
    });

    // Add this new code for the guide modal
    const modal = document.getElementById('guideModal');
    const closeButton = document.getElementById('closeGuide');
    
    // Add this new code for the guide button
    const guideBtn = document.querySelector('.guide-btn');
    
    function showModal() {
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }

    function hideModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }

    // Show modal on page load
    setTimeout(showModal, 500);
    
    // Show modal when clicking the guide button
    guideBtn.addEventListener('click', showModal);
    
    // Close modal when clicking the close button
    closeButton.addEventListener('click', hideModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideModal();
        }
    });
});