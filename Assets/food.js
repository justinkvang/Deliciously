// PRESS ENTER TO SEARCH TERM, NOT WORKING YET
$("#searchTerm").keypress(function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        $("#searchBtn").click();
    }
});

// food recipe search function
$(".searchBtnClass").on("click", function () {
    var foodKeyword = $("#searchTerm").val();

    $("#container1").hide();
    $('#searchTerm').remove();

    // <input id="searchTerm" class="searchTerm" type="search" placeholder="Search">

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
    //write js code here

    // Food API get function
    // var foodKeyword = "tofu";
    // var queryURL = "https://api.edamam.com/search?q=" + foodKeyword + "&app_id=254ee167&app_key=2753a296392ca0118d13115188aa926c"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        for (let i = 0; i < 9; i++) {
            // var recList = response.hits[i];
            // const ingredArr = []; I need to populate an array from here that can be defined in a variable
            // let ingredArr = $(recList.recipe.ingredientLines);
            // console.log(recList);
            // console.log(response);
            // console.log(recList.recipe.label);
            // console.log(recList.recipe.ingredientLines);
            // console.log(recList.recipe.image);
            // $("#recipeInfo").text(JSON.stringify(response)); --> to display items (currently only showing words)

            // Populates the recipe with images and links
            console.log(response.hits[i].recipe.image);
            $(`#card${i}ImageLinkID`).attr("href", response.hits[i].recipe.url);
            $(`#card${i}ImageID`).attr("src", response.hits[i].recipe.image);
            $(`#card${i}TitleLinkID`).text(response.hits[i].recipe.label);
            $(`#card${i}SourceID`).text("Source: " + response.hits[i].recipe.source);
            $(`#card${i}TitleLinkID`).attr("href", response.hits[i].recipe.url);
        }


        // var queryURL = "https://api.edamam.com/search?q=" + foodKeyword + "&app_id=254ee167&app_key=2753a296392ca0118d13115188aa926c";

        // $.ajax({
        //     url: queryURL,
        //     method: "GET"
        // }).then(function (response) {
        //     console.log(response);
        //     for (let i = 0; i < response.hits.length; i++) {
        //         var recList = response.hits[i];
        // const ingredArr = []; I need to populate an array from here that can be defined in a variable
        // let ingredArr = $(recList.recipe.ingredientLines);
        // console.log(recList);
        // console.log(recList.recipe.label);
        // console.log(recList.recipe.ingredientLines);
        // console.log(recList.recipe.image);
        // $("#recipeInfo").text(JSON.stringify(response)); --> to display items (currently only showing words)
        // }
    })
});

    // Grabbing the info from the Food API
    // Psuedo code - I will pull the recipe 1names from the hits array, 
    // 2ingredients from the recipe ingredientLines array, a 3photo from the recipe.image


    // Drink API get function


// });

// $(".searchBtnClass").on("click", function (event) {
//     event.preventDefault();
// var drinkKeyword = $(".searchTerm").val();
// var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkKeyword;

// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function (response) {
//     console.log(response);
//     console.log(response.drinks[0]);
//     console.log(response.drinks[0].strDrink);

//     for (let i=1; i<16; i++){
//         console.log(i);

//         if (response.drinks[0][`strIngredient${i}`] == null){
//             break;
//         }
//         let ingredient = document.createElement(`ons-list-item`);
//         ingredient.innerHTML = response.drinks[0][`strIngredient${i}`];


//     }
    // To use this api we need to create a function that digs through an 
    // object within an array to pull ingredients and measurements without pulling the null values.
    // for (let i = 1; i < 16; i++) {
    //     if(response.drinks[0][`strIngredient${i}`]== null){
    //         break;
    //     }
    //     console.log(drinkNum.strIngredient1);
    //     console.log(drinkNum);


        // for (let ind = 0; ind < $(drinkNum.length); ind++) {
        //     var strIngredArr = drinkNum.strIngredient[ind];
        //     console.log(strIngredArr);
        //     console.log(drinkNum);



//     }
// )
// });

    // var deliciously = document.querySelector("#submitBtn1")
    // deliciously.addEventListener("click", function(){

    // var description = document.querySelector("#container1")
    // description.style.display = "none"

    // var questionChoice = document.querySelector('.container')
    //     questionChoice.style.display = "block"



// });
