$(function () {
  // devour burger
  $(".change-devour").on("click", function (event) {
    console.log("You clicked the devour button");

    let id = $(this).data("id");
    let newBurger = $(this).data("newburger");

    let newDevourState = {
      devoured: newBurger,
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState,
    }).then(function () {
      console.log("changed sleep to", newBurger);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $("#add-burger-button").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
      burger_name: $("#burger").val().trim(),
      //   devoured: $("[name=sleepy]:checked").val().trim(),
      devoured: false,
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  //   $(".delete-cat").on("click", function (event) {
  //     var id = $(this).data("id");

  //     // Send the DELETE request.
  //     $.ajax("/api/cats/" + id, {
  //       type: "DELETE",
  //     }).then(function () {
  //       console.log("deleted cat", id);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     });
  //   });
});
