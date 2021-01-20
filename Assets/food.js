// Press keyboard enter main page
$("#searchTerm").keypress(function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        $("#searchBtn").click();
    }
});

// Press keyboard enter cards page
$("#navSearch").keypress(function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        $("#searchBtn2").click();
    }
});

// food recipe search function
$(".searchBtnClass").on("click", function () {
    var foodKeyword = $("#searchTerm").val();

    $("#container1").hide();
    $('#searchTerm').remove();

    var newSearchBox = $('<input>');
    newSearchBox.attr('id', 'searchTerm');
    newSearchBox.attr('class', 'searchTerm');
    newSearchBox.attr('type', 'search');
    newSearchBox.attr('placeholder', 'Search');
    newSearchBox.css('height', '2.5rem')

    $("#navSearch").prepend(newSearchBox);

    $("#navSearch").css("display", "flex")
    $(".container").css("display", "grid")

    var queryURL = "https://api.edamam.com/search?q=" + foodKeyword + "&app_id=254ee167&app_key=2753a296392ca0118d13115188aa926c";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        for (let i = 0; i < 9; i++) {

            // Populates the recipe with images and links
            console.log(response.hits[i].recipe.image);
            $(`#card${i}ImageLinkID`).attr("href", response.hits[i].recipe.url);
            $(`#card${i}ImageID`).attr("src", response.hits[i].recipe.image);
            $(`#card${i}TitleLinkID`).text(response.hits[i].recipe.label);
            $(`#card${i}SourceID`).text("Source: " + response.hits[i].recipe.source);
            $(`#card${i}TitleLinkID`).attr("href", response.hits[i].recipe.url);
        }
    })
});