let records = [];

document.getElementById('financeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const amount = parseInt(document.getElementById('amount').value);
    const type = document.getElementById('type').value;
    const category = document.getElementById('category').value;

    records.push({ type, amount, category });
    updateDashboard(records);
    document.getElementById('financeForm').reset();
});

function updateDashboard(displayRecords) {
    let income = displayRecords.filter(record => record.type === 'income').reduce((acc, record) => acc + record.amount, 0);
    let expense = displayRecords.filter(record => record.type === 'expense').reduce((acc, record) => acc + record.amount, 0);
    let total = income - expense;

    document.getElementById('incomeValue').textContent = `${income} CZK`;
    document.getElementById('expenseValue').textContent = `${expense} CZK`;
    document.getElementById('totalValue').textContent = `${total} CZK`;
}

function applyFilters() {
    const filterCategory = document.getElementById('filterCategory').value;
    const minAmount = document.getElementById('minAmount').value ? parseInt(document.getElementById('minAmount').value) : 0;
    const maxAmount = document.getElementById('maxAmount').value ? parseInt(document.getElementById('maxAmount').value) : Infinity;

    const filteredRecords = records.filter(record => {
        const amountCondition = record.amount >= minAmount && record.amount <= maxAmount;
        const categoryCondition = filterCategory === 'vše' || record.category === filterCategory;
        return amountCondition && categoryCondition;
    });

    updateDashboard(filteredRecords);
}
