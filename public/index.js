$(document).ready(function() {
    $("#contact").on('submit', function(e) {
        e.preventDefault();
        let name = $('#name').val();
        let email = $('#email').val();
        let message = $('#message').val();

        $.ajax({
            url: "http://localhost:3000/portfolio",

            success: function(result) {

                location.reload()

            },
            method: "POST",
            data: {
                name,
                email,
                message
            }
        });

    })
})