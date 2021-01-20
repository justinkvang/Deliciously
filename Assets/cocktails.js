$(document).foundation();
// PRESS ENTER TO SEARCH TERM, NOT WORKING YET
$("#searchTerm").keypress(function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        $("#searchBtn").click();
    }
});

$(".searchBtnClass").on("click", function (event) {
    event.preventDefault();
    var drinkKeyword = $("#searchTerm").val();

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

    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkKeyword;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var drinkTitle = response.drinks[0].strDrink;
        var mixInstructions = response.drinks[0].strInstructions;
        console.log(response);
        // console.log(drinkTitle);
        // console.log(mixInstructions);
        for (let di = 0; di < 10; di++) {
            // console.log(di);
            console.log(response.drinks[di].strImageSource);
            console.log(response.drinks[di].strDrink);

            $(`#card${di}ImageID`).attr("src", response.drinks[di].strDrinkThumb);
            $(`#drinkCard${di}TitleID`).text(response.drinks[di].strDrink);

            var ingredients = []
                for (let i = 1; i < 16; i++) {
                // var drinkIndex = response.drink[i];
                    
                if (response.drinks[di][`strIngredient${i}`] === null) {
                    break;
                }

                ingredients[i-1] = (response.drinks[di][`strIngredient${i}`] + ": " + response.drinks[di][`strMeasure${i}`]);

            }
            $(`#drinkCard${di}ModalTitleID`).text(response.drinks[di].strDrink);
            // creating list for ingredients
            let myList = document.querySelector(`#ingredients${di}ID`);
            ingredients.forEach(function(value) {
              let li = document.createElement('li');
              let a = document.createElement('p');
              a.classList.add('ui-all');
              a.tabIndex = -1;
              a.innerText = value; 
              li.appendChild(a);
              myList.appendChild(li);
            });

            $(`#instructions${di}ID`).text(response.drinks[di].strInstructions);

        }
        
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



    }
    )
});

    // var deliciously = document.querySelector("#submitBtn1")
    // deliciously.addEventListener("click", function(){

    // var description = document.querySelector("#container1")
    // description.style.display = "none"

    // var questionChoice = document.querySelector('.container')
    //     questionChoice.style.display = "block"



// });
