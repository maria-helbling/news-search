//display results
$('#result-div').empty();
for (i=0; i<numInput; i++) {
    let displyaDiv = ($(`<div class="result-div" id="result${i}">`))
    displayDiv.append($('<h3 class="resultTitle">').text(title))
    displayDiv.append($('<p class="resultBiline">').text(authorName))
    displayDiv.append($(`<a href=""${resultUrl}>`))
    $('#result-div').append(displayDiv)
}



