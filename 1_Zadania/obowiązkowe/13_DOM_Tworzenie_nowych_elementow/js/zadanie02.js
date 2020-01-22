document.addEventListener("DOMContentLoaded", function () {

    const table = document.querySelector('#orders');
    const inOrderId = document.querySelector('#orderId');
    const inItem = document.querySelector('#item');
    const inQuantity = document.querySelector('#quantity');

    document.querySelector('#addBtn').onclick = function() {
        const orderData = getOrderData();
        if (orderData) {
            appendRow(table, orderData);
        } else {
            alert('Dodane zamówienie nie jest kompletne!');
        }
    }

    function appendRow(table, columnsData) {
        const row = document.createElement('tr');
        columnsData.forEach(columnData => {
            appendColumn(row, columnData);
        });
        table.appendChild(row);
    }

    function appendColumn(row, data) {
        const column = document.createElement('td');
        column.innerHTML = data;
        row.appendChild(column);
    }

    function getOrderData() {
        const orderData = [inOrderId.value, inItem.value, inQuantity.value];
        if (orderData.includes('')) {
            return null;
        }
        return orderData;
    }

});