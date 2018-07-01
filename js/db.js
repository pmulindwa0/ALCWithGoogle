const currencyAPIC = new CurrencyAPI();
const uiC = new UI();
var request = indexedDB.open("currencyDB");

request.onupgradeneeded = function() {
  
  var db = request.result;
  var store = db.createObjectStore("currencies", {keyPath: "id"});
  var nameIndex = store.createIndex("by_currencyName", "currencyName", {unique: true});
  var symbolIndex = store.createIndex("by_symbol", "currencySymbol");

  currencyAPIC.getCurrenciesList()
    .then(data =>{
        const results = data.results;
        const currencies = Object.values(results);
        // console.log(currencies);
        
        currencies.forEach(currency => {

          store.put(currency);
        })
    }) 

};

request.onsuccess = function() {
  db = request.result;
};