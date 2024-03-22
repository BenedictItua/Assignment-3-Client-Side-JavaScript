document.addEventListener('DOMContentLoaded', function () {
    // Get references to the pickup and delivery buttons and forms
    const pickupBtn = document.getElementById('pickupBtn');
    const deliveryBtn = document.getElementById('deliveryBtn');
    const pickupForm = document.getElementById('pickupForm');
    const deliveryForm = document.getElementById('deliveryForm');
    const orderConfirmation = document.getElementById('orderConfirmation');
    const submitOrderBtn = document.getElementById('submitOrderBtn');

    // Hide forms initially
    pickupForm.style.display = 'none';
    deliveryForm.style.display = 'none';


    // Add event listeners to the buttons to handle clicks
    pickupBtn.addEventListener('click', () => {
        // Show pickup form and hide delivery form
        pickupForm.style.display = 'block';
        deliveryForm.style.display = 'none';
        orderConfirmation.style.display = 'none';
    });

    deliveryBtn.addEventListener('click', () => {
        // Show delivery form and hide pickup form
        pickupForm.style.display = 'none';
        deliveryForm.style.display = 'block';
        orderConfirmation.style.display = 'none';
    });

    // Add event listener to the submit button to simulate order submission
    submitOrderBtn.addEventListener('click', () => {
        // Hide order forms and show confirmation message
        pickupForm.style.display = 'none';
        deliveryForm.style.display = 'none';
        orderConfirmation.style.display = 'block';
    });
});
