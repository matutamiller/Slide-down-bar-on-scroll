window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
    // When the user scrolls down 20px from the top of the document,  the navbar slides down
  } else {
    document.getElementById("navbar").style.top = "-50px";
    // When the user scrolls to the top of the page, the navbar slides up  (50px out of the top view)
  }
}