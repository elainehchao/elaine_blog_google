function loadHeading() {
    $("#header").load("components.html #header_component");
}

function loadSideNav(selected_page) {
    if (selected_page || selected_page != '') {
        $("#right_container").load("components.html #side_nav", function () {
            $("#" + selected_page + "_nav").addClass("selected");
        });
    }

}
