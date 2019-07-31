$(function() {
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: {
                devoured: true
            }
        }).then(
            function() {
                console.log("Burger is now Devoured!");
                location.reload()
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault()

        let input = $("#makeBurger").val().trim()

        // Prevent burger name being too long

        if(input.length > 20) {
            alert("Please make your burger 20 characters or less.")
        } else {
            var newBurger = {
                burger_name: $("#makeBurger").val().trim()
            };
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(function() {
                console.log(newBurger)
                location.reload();
            });
        }
    })
})