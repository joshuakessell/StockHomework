# Stock Search Application Homework


Overview

You're being tasked with creating a fully fleshed out, crypto currency web application for your client. This application will use the iexTrading API to make a dynamic web page that populates with crypto currency information of the user's choice. To finish this task, you must call the cryptoCurrency API and use JavaScript and jQuery to change the HTML of your site.


Before You Begin

Hit the iexTrading API.

Fool around with the iexTrading API. iexTrading API.

Be sure to read about Batch and Reference Data (for validation)

Make sure you switch the protocol in the query URL from http to https, or the app may not work properly when deployed to Github Pages.

You should have a high-level understanding of how this assignment works before attempting to code it.


Submission on BCS


Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!



Instructions


Before you can make any part of our site work, you need to create an array of strings, each one related to a stock symbol that interests you. Save it to a variable called stocksList.
Your app should take the stocks in this array and create buttons in your HTML.



Try using a loop that appends a button for each string in the array.



When the user clicks on a button, the page should grab the company name, logo, price, and up to 10 news articles related to the stock from the iexTrading API and place them on the page.
Make a seperate iexTrading API call that will retrieve all stock symbols available in iexTrading and store it into an array called validationList. 
Add a form to your page that takes the value from a user input box and adds it into your stocksList array only if the input exists in our validationList. Hint: You'll want to make sure the user input is always capitalized. Then make a function call that takes each topic in the array remakes the buttons on the page.
Deploy your assignment to Github Pages.
Rejoice! You just made something really cool.





Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Adding a README.md as well as adding this homework to your portfolio are required as well and more information can be found below.

