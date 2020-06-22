
function getResults(){
    var userSearchTerm = $("#search-term").val();
    var numInput = parseInt($("#record-num"));


    var apiKey = "ak1TtO904cMZl4y60G9IkMOSdkawNvWG";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + userSearchTerm + "&api-key=" + apiKey;
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(result){
        $('#search-results').empty();
        for (let i=0; i<numInput; i++) {
            console.log(i)
            //grab results from API
            console.log(result);
            var title = result.response.docs[i].headline.main;
            console.log(title);
            var authorName = result.response.docs[i].byline.original;
            console.log(authorName);
            var resultUrl = result.response.docs[i].web_url;
            console.log(resultUrl);
            //display results to page
            var displayDiv = $(`<div class="result-div">`)
            displayDiv.append($('<h3 class="resultTitle">').text(title))
            displayDiv.append($('<p class="resultBiline">').text(authorName))
            displayDiv.append($(`<a href="${resultUrl}" target="blank">`).text(`Link to article`))
            $('#search-results').append(displayDiv)
        }
    });
}

$('#search-button').click(function(){
    getResults();
});

$('#clear-button').click(function(){
    $('#search-results').empty();
})