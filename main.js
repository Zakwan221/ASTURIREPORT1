/**
 * MINIMAL JavaScript - ONLY NAVIGATION BUTTONS - NO VISUAL CHANGES
 * Adds only Back to Dashboard and Print buttons without modifying report appearance
 */

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    createNavigationButtons();
});

/**
 * Create ONLY the Back to Dashboard and Print buttons
 */
function createNavigationButtons() {
    // Create Back to Dashboard button
    const backButton = document.createElement('button');
    backButton.className = 'back-to-dashboard';
    backButton.innerHTML = '← Back to Dashboard';
    backButton.onclick = goBackToDashboard;
    document.body.appendChild(backButton);
    
    // Create Print button
    const printButton = document.createElement('button');
    printButton.className = 'print-button';
    printButton.innerHTML = '🖨️ Print Report';
    printButton.onclick = printReport;
    document.body.appendChild(printButton);
}

/**
 * Navigate back to the main dashboard (index.html)
 */
function goBackToDashboard() {
    // Add loading state
    const button = document.querySelector('.back-to-dashboard');
    if (button) {
        const originalText = button.innerHTML;
        button.innerHTML = '<span class="loading"></span> Going back...';
        button.disabled = true;
    }
    
    // Navigate back to index.html
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 500);
}

/**
 * Print the current report
 */
function printReport() {
    // Add loading state
    const button = document.querySelector('.print-button');
    if (button) {
        const originalText = button.innerHTML;
        button.innerHTML = '<span class="loading"></span> Preparing...';
        button.disabled = true;
        
        // Trigger print dialog
        setTimeout(() => {
            window.print();
            
            // Reset button after print dialog
            setTimeout(() => {
                button.innerHTML = originalText;
                button.disabled = false;
            }, 1000);
        }, 500);
    }
}