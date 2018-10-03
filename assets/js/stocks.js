
// Initial array of stocks
let stocks = ['FB', 'AAPL', 'TSLA', 'GOOG'];
const validationList = [];  
let queryURL = "https://api.iextrading.com/1.0/ref-data/symbols";

$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function(response){
    for(let i=0;i<response.length;i++) {
        validationList.push(response[i].symbol);
    }
    console.log(validationList);
});

// Function for dumping the JSON content for each button into the div
const displayStockInfo = function () {

  const stock = $(this).attr('data-name');
  let queryURL = `https://api.iextrading.com/1.0/stock/${stock}/batch?types=quote,news&range=10m&last=10`;

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {
        $("#infoArea").empty();
        $('#infoArea').append(`<p><b>Company Name: </b>${response.quote.companyName}</p>`);
        $('#infoArea').append(`<p><b>Latest Price: </b>$${response.quote.latestPrice}</p>`);
        for (let i=0; i<5; i++) {
            $('#infoArea').append(`${response.news[i].headline}</p>`);
        }
    });
}


// Function for displaying stock data
function render() {

  // Deleting the buttons prior to adding new stocks
  // (this is necessary otherwise you will have repeat buttons)
  $('#buttonArea').empty();

  // Looping through the array of stocks
  for (let i = 0; i < stocks.length; i++) {

    // Then dynamically generating buttons for each stock in the array
    // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
    let newButton = $('<button>');

    // Adding a class of stock to our button
    newButton.addClass('stock');

    // Adding a data-attribute
    newButton.attr('data-name', stocks[i]);

    // Providing the initial button text
    newButton.text(stocks[i]);

    // Adding the button to the buttons-view div
    $('#buttonArea').append(newButton);
  }
}

render();

// This function handles events where one button is clicked
const addButton = function(event) {
    for(let i=0; i<validationList.length; i++) {
        if (($("#stock-input").val().trim()) === validationList[i]) {
            // event.preventDefault() prevents the form from trying to submit itself.
            // We're using a form so that the user can hit enter instead of clicking the button if they want
            event.preventDefault();

            // This line will grab the text from the input box
            const stock = $('#stock-input').val().trim();
            
            // The stock from the textbox is then added to our array
            stocks.push(stock);

            // Deletes the contents of the former input
            $('#stock-input').val('');

            // calling render which handles the processing of our stock array
            render();
        } else if (i>validationList.length){
            $('#stock-input').val('Try Again');
        }
    }
}

$('#add-stock').on('click', addButton);

// Function for displaying the stock info
// Using $(document).on instead of $('.stock').on to add event listeners to dynamically generated elements
$(document).on('click', '.stock', displayStockInfo);

// Calling the renderButtons function to display the initial buttons    
