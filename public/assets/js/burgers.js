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

  $(".create-form").on("submit", (event) => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("you clicked the add burger button");

    const newBurger = {
      burger_name: $("#new-burger").val().trim(),
      //   devoured: $("[name=sleepy]:checked").val().trim(),
      devoured: false,
    };

    console.log("New Burger is:");
    console.log(newBurger);

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
});
