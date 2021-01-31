let index = 0;
const totalWorkItems = $(".work-item").length;


$(document).ready(function() {


    //set lightbox img max height
    const wHeight = $(window).height();
    $(".lightbox-img").css("max-height", wHeight + "px");

    // lightbox
    $(".work-item-inner").click(function() {
        index = $(this).parent(".work-item").index();
        $(".lightbox").addClass("open");
        lightboxSlideShow();
    });
    $(".lightbox .prev").click(function() {
        if (index == 0) {
            index = totalWorkItems - 1;
        } else {
            index--;
        }
        lightboxSlideShow();
    });
    $(".lightbox .next").click(function() {
        if (index == totalWorkItems - 1) {
            index = 0;
        } else {
            index++;
        }
        lightboxSlideShow();
    });
    //  close lightbox
    $(".lightbox-close").click(function() {
        $(".lightbox").removeClass("open");
    });

    // close light bok when clicked outside of img-box
    $(".lightbox").click(function(event) {
        if ($(event.target).hasClass("lightbox")) {
            $(this).removeClass("open");
        }
    });
});

function lightboxSlideShow() {
    const imgSrc = $(".work-item").eq(index).find("img").attr("data-large");
    const category = $(".work-item").eq(index).find("h4").html();
    $(".lightbox-img").attr("src", imgSrc);
    $(".lightbox-category").html(category)
    $(".lightbox-counter").html(totalWorkItems + "/" + (index + 1));
}

function validation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message1 = document.getElementById("error_message1");
    var error_message2 = document.getElementById("error_message2");
    var error_message3 = document.getElementById("error_message3");
    var text;

    error_message1.style.padding = "10px";
    error_message2.style.padding = "10px";
    error_message3.style.padding = "10px";

    if (name.length < 5) {
        text = "please enter valid name &#9888;";
        error_message1.innerHTML = text;
        return false;
    } else {
        $(this).removeClass("error_message1");
    }
    if (email.indexOf('@') == -1) {
        text = "please enter valid E-mail &#9888;";
        error_message2.innerHTML = text;
        return false;
    }
    if (email.indexOf('.') == -1) {
        text = "please enter valid E-mail &#9888;";
        error_message2.innerHTML = text;
        return false;
    }
    if (message.length <= 40) {
        text = "please enter more than 40 characters &#9888;";
        error_message3.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully!");
    return true;
}