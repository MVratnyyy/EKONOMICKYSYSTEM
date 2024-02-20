document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('vypocetDPH').addEventListener('click', function() {
        const cenaBezDPH = parseFloat(document.getElementById('cenaBezDPH').value);
        const sazbaDPH = parseFloat(document.getElementById('sazbaDPH').value);

        const dph = cenaBezDPH * (sazbaDPH / 100);
        const cenaSDPH = cenaBezDPH + dph;

        document.getElementById('dph_result').innerHTML = `Celková cena s DPH: ${cenaSDPH.toFixed(2)} CZK<br>Rozdíl (DPH): ${dph.toFixed(2)} CZK`;
    });
});
