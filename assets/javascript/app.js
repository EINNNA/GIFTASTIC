// ++++++++++++++++++++++++++++++++++++++ BUTTONS ++++++++++++++++++++++++++++++++++++++

//CAT

function getImages(item) {
    var animal = item;
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    animal + "&api_key=Dhd2SLNR0fVtYar0yWsKWhLyFQM65fuo&limit=6";
    console.log(queryURL);
  
    $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
          var images = '';
          // for loop was not running
          $.each(response.data, function( index, value ) {
            var image = '<img src="' + value.images.fixed_height_still.url + '">';
            images = images + image;
          });
          $("#images").html(images);
        });
    };
  
  
  // ++++++++++++++++++++++++++++++++++++++ SUBMITTING ++++++++++++++++++++++++++++++++++++++
  
  function addAnimal() {
    event.preventDefault();
    var newSubmit = $("#submitAnimal").val();
    var addButton = '<button onclick="getImages(`' + newSubmit + '`)">' + newSubmit + '</button>';
    $(".buttonClub").append(addButton);
    getImages(newSubmit);
  };