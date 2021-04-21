$(document).ready(function () {
  $("#back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  });
});

//NAVBAR FUNCTION
$(document).ready(function () {
  $("#sidebar").toggleClass("active-my");
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active-my");
    // $(this).toggleClass("active-my");
  });
});
