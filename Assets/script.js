// food recipe search function
$("#recipeButton").on("click", function (event) {
    event.preventDefault()
    var foodKeyword = $("#RecipeName").val();
var queryURL = "https://api.edamam.com/search?q=" + foodKeyword + "&app_id=254ee167&app_key=2753a296392ca0118d13115188aa926c";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    for (let i = 0; i < response.hits.length; i++) {
        var recList = response.hits[i];
        console.log(recList.recipe.label);
        console.log(recList.recipe.ingredientLines);
        console.log(recList.recipe.image);
    // $("#recipeInfo").text(JSON.stringify(response)); --> to display items (currently only showing words)
    }
});


// Drink API get function
var drinkKeyword = "margarita";
var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkKeyword;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});

});