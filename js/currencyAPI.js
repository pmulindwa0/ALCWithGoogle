class CurrencyAPI{

    async getCurrenciesList(){
        const url = await fetch('https://free.currencyconverterapi.com/api/v5/currencies');

        const currencies = await url.json();

        return currencies;
    }

    async queryAPI(from, to, amount){
        const url = await fetch(`https://free.currencyconverterapi.com/api/v5/convert?q=${from}_${to}&compact=y`);
        let value = await url.json();

        return value;
    }
}