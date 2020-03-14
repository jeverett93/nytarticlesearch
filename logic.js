// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=1vxgWA2glyFoG94CEDCvNFMssHHmxEpm

// variables

var apiKey = "1vxgWA2glyFoG94CEDCvNFMssHHmxEpm"

var searchTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey


// Variable to track number of articles
var articleCounter = 0;


// functions

function runQuery(numArticles, query){
    $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
        console.log(response);

      })
}



// main process
$("#run-search").on("click", function(){
    runQuery(10, "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=1vxgWA2glyFoG94CEDCvNFMssHHmxEpm");

    return false
});




// pseudocode
// 1. Retrieve user inputs and convert to variables
// 2. Use variables to run AJAX calls to NYT
// 3. Break down NYT object into usable fields
// 4. Dynamically generate content in HTML 