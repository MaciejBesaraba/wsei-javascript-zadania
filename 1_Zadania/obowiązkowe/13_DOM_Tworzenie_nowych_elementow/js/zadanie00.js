document.addEventListener("DOMContentLoaded", function () {
    Array.from(document.querySelectorAll('.deleteBtn')).forEach(deleteButton => {
        deleteButton.onclick = function() {
            const tableRow = this.parentElement.parentElement;
            if (tableRow) {
                tableRow.outerHTML = '';
            }
        }
    });
});