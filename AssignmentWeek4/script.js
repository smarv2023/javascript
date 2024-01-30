const apiKey = '68a78becfd24ee594deb7e84';
var country = `USD`;// Default
var api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${country}`;
var histories = new Array();



// This will change the Main currency when you choose from fromCurrency select/option.
// If you delete this it will default to USD as main currency.
function currencyManager() {
    country = fromCurrency.value;
    api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${country}`;
}

// This class will take both dropdow currency selection and key array of currency
class CurrencyList {
    constructor(fromToCurrencies, currency) {
        this.fromToCurrencies = fromToCurrencies;
        this.currency = currency;
        this.addCurrencyList = function() {
            if (this.currency.length > this.fromToCurrencies.length) {
                for (var i = 0; i < this.currency.length; i++) {
                    let option = document.createElement("option");
                    option.text = currency[i];
                    this.fromToCurrencies.add(option);
                }
            }
        };
    }
}

class CurrencyConverter {
    constructor(currencies, amount, output) {
        this.currencies = currencies;
        this.amount = amount;
        this.output = output;
    }

    convert(fromCurrency, toCurrency) {
        if (this.amount) {
            var total1 = this.currencies[fromCurrency.value] * this.amount;
            var total2 = this.currencies[toCurrency.value] * this.amount;
            this.output.innerHTML = fromCurrency.value + " " + total1 + " = " + toCurrency.value + " " + total2;
            return total2;
            
        } else {
            this.output.innerHTML = "Please enter the amount.";
        }
    }
}

class TrasactionHistory {
    constructor(sourceCurrency, targetCurrency, amount, result) {
        this.sourceCurrency = sourceCurrency;
        this.targetCurrency = targetCurrency;
        this.amount = amount;
        this.result = result;
        this.update = function() {
            var timeStamp = new Date();
            let DateTime = `${timeStamp.getFullYear()}-${timeStamp.getMonth() + 1}-${timeStamp.getDate()} ${timeStamp.getHours()}:${timeStamp.getMinutes()}:${timeStamp.getSeconds()}`;
            if (this.result) {
                var transactionHistory = document.getElementById("history");
                var transaction = {sourceCurrency, targetCurrency, amount, result, DateTime};
                histories.push(transaction);
                // PrintOut History
                let text = "<ul>";
                for (let i = 0; i < histories.length; i++) {
                    let outputHistory = JSON.stringify(histories[i]);
                    outputHistory = outputHistory.replace(/[{},'"]+/g , " ");
                    text += "<li>" + outputHistory + " " + "</li>";
                    //text += "<li>" + Object.values(histories[i]) + "</li>";
                }
                text += "</ul>";
                transactionHistory.innerHTML = text;
                console.log(histories);
            }
        };
    }
}

async function selectCurrency() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency");
    const toCurrency = document.getElementById("toCurrency");
    var output = document.getElementById("output");

    try {

        const response = await fetch(api);
        const data = await response.json();
        let currencies = data.conversion_rates;
        // Put array key
        let currency = Object.keys(currencies);
  
        // Populate the dropdow with list of currency
        var from = new CurrencyList(fromCurrency, currency);
        from.addCurrencyList();

        var to = new CurrencyList(toCurrency, currency, response);
        to.addCurrencyList();

        // Conver the currency
        var convert = new CurrencyConverter(currencies, amount, output);
        var result = convert.convert(fromCurrency, toCurrency);

        // Capture all the results and put it in array
        var transactions = new TrasactionHistory(fromCurrency.value, toCurrency.value, amount, result);

        transactions.update();

        
      
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
        
    function deleteList() {
        var list = document.getElementsByTagName("li");
        var i = list.length-1;
        if (i >= 0) {
            list[i].remove();
            histories.splice(i);
        } else {
            alert("Nothing to delete.");
        }
    };
        

window.onload = selectCurrency;
