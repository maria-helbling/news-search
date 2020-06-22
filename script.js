
// $(search-button).click(function(){
//     getResults();

//     // title author and url grab

// });

function getResults(){
    var userSearchTerm = $("#search-term").val();
    var numInput = parseInt($("#record-num"));

    var apiKey = "ak1TtO904cMZl4y60G9IkMOSdkawNvWG";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + "pizza" + "&api-key=" + apiKey;
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(result){
        console.log(result);
        var title = result.response.docs[3].headline.main;
        console.log(title);
        var authorName = result.response.docs[3].byline.original;
        console.log(authorName);
        var resultUrl = result.response.docs[3].web_url;
        console.log(resultUrl);
    });
}

var startYear = parseInt($("#start-year")) + "0101";
var endYear = parseInt($("#end-year")) + "0101";

if (startYear === "" && endYear === ""){
    getResults();
} else {
    function getYearResults(){
        var userSearchTerm = $("#search-term").val();
        var numInput = parseInt($("#record-num"));
    
        var apiKey = "ak1TtO904cMZl4y60G9IkMOSdkawNvWG";
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + "pizza" + "&begin_date=" + startYear + "&end_date=" + endYear +"&api-key=" + apiKey;
        console.log(queryURL);
    
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(result){
            console.log(result);
            var title = result.response.docs[3].headline.main;
            console.log(title);
            var authorName = result.response.docs[3].byline.original;
            console.log(authorName);
            var resultUrl = result.response.docs[3].web_url;
            console.log(resultUrl);
        });
    }
}
