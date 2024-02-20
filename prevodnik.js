document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cc_convert').addEventListener('click', function() {
        const amount = parseFloat(document.getElementById('cc_amount').value);
        const fromCurrency = document.getElementById('cc_fromCurrency').value;
        const toCurrency = document.getElementById('cc_toCurrency').value;
        const exchangeRates = {
            "EUR": { "USD": 1.1, "CZK": 25 },
            "USD": { "EUR": 0.9, "CZK": 22.5 },
            "CZK": { "EUR": 0.04, "USD": 0.044 }
        };

        if (!exchangeRates[fromCurrency] || !exchangeRates[fromCurrency][toCurrency]) {
            document.getElementById('cc_result').innerText = 'Převod pro tuto měnovou kombinaci není dostupný.';
            return;
        }

        const rate = exchangeRates[fromCurrency][toCurrency];
        const convertedAmount = rate * amount;
        document.getElementById('cc_result').innerText = `Převedená částka: ${convertedAmount.toFixed(2)} ${toCurrency}`;
    });
});
