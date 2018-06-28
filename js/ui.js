class UI{
    constructor(){
        this.init();
    }
    init(){
        this.printCurrencies();
    }

    printCurrencies(){
       currencyAPI.getCurrenciesList()
       .then(data =>{
           const results = data.results;
           const currencies = Object.values(results);
           
           // Build the <select> from the REST API
           const selectfrom = document.getElementById('fromcurrency');
           const selectto = document.getElementById('tocurrency');

           currencies.forEach(currency => {
            
                // add the <option>
                const option = document.createElement('option');
                option.value = currency.id;
                option.appendChild(document.createTextNode(currency.currencyName));
                selectto.appendChild(option);
           })
           currencies.forEach(currency => {
               
                // add the <option>
                const option = document.createElement('option');
                option.value = currency.id;
                option.appendChild(document.createTextNode(currency.currencyName));
                selectfrom.appendChild(option);
           })
       }) 
    }
    displayCurrency(data, amount){
        let val = Object.values(data)[0].val;
        let output = val*amount;
        const display = document.getElementById('output');

        display.appendChild(document.createTextNode(output));

    }
}