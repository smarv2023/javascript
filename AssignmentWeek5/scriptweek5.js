$(document).ready(function () {
    try {
        var api = 'https://jsonplaceholder.typicode.com/users';
        $.get(api, function (data) {
            console.log(data);

            var names = $("#listOfNames");
            var availableNames = data.map(post => post.name);
            console.log("availableNames");

            // Initialize Autocomplete widget
            $("#searchInput").autocomplete({
                source: availableNames,
                //The autocomplete ui contains information about the selected date.
                //The event will handle the event of selecting the suggested names.
                select: function (event, ui) {
                    // Handle selection from the autocomplete list
                    var selectedName = ui.item.value;
                    displayUserInfo(selectedName);
                }
            });

            // Function to display user information
            function displayUserInfo(name) {
                var user = data.find(post => post.name === name);
                if (user) {
                    names.html(`<li>${user.name}<br>${user.username}<br>${user.email}<br>${user.address.street}, ${user.address.city}</li>`);
                }
            }
        });
    } catch (err) {
        console.log(err.message);
    }
});