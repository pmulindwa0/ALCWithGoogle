const currencyAPI = new CurrencyAPI();
const ui = new UI();

const form = document.getElementById('form');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const from = document.getElementById('fromcurrency').value;
    const to = document.getElementById('tocurrency').value;
    const amount = document.getElementById('amount').value;

    // console.log(`${amount} from ${from} to ${to}`);
    currencyAPI.queryAPI(from, to, amount)
    .then(data => {
        // console.log(data);
        ui.displayCurrency(data, amount);
    });

})