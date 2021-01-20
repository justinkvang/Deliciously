// Foundation 
$(document).foundation();

// Press keyboard enter Main page search bar
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

// on click function for search bars
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

        for (let di = 0; di < 10; di++) {

            $(`#card${di}ImageID`).attr("src", response.drinks[di].strDrinkThumb);
            $(`#drinkCard${di}TitleID`).text(response.drinks[di].strDrink);

            var ingredients = []
                for (let i = 1; i < 16; i++) {
                    
                if (response.drinks[di][`strIngredient${i}`] === null) {
                    break;
                }
                // pulling ingredients and measurements 
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
    }
    )
});

