document.addEventListener("DOMContentLoaded", function () {

    const invoiceData = document.querySelector('#invoiceData');
    invoiceData.style.display = 'none';

    document.querySelector('#invoice').addEventListener('change', function() {
        if(this.checked) {
            invoiceData.style.display = 'block';
        } else {
            invoiceData.style.display = 'none';
        }
    });
}) ;