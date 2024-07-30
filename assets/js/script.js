$(document).ready(function () {
  function hoverEffect(selector) {
    $(selector).hover(
      function () {
        $(selector).not(this).addClass("not-active").removeClass("active");
        $(this).addClass("active").removeClass("not-active");
      },
      function () {
        if (!$(selector + ":hover").length) {
          $(selector).removeClass("active not-active");
        }
      }
    );
  }

  hoverEffect(".job-text");
  hoverEffect(".role-cell");
});

$(document).ready(function () {
  $(".contact-btn").click(function () {
    $(".contact-popup").addClass("active");
  });

  $(".btn-exit").click(function () {
    $(".contact-popup").removeClass("active");
  });
});
