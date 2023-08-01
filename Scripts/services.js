document.addEventListener("DOMContentLoaded", function() {
    // Get references to the carousel items, header, and description
    var carouselItems = document.querySelectorAll(".carousel-item");
    var headerPartOne = document.querySelector(".headerTwo-partOne");
    var headerPartTwo = document.querySelector(".headerTwo-partTwo");
    var carouselDescription = document.getElementById("carouselDescription");

    // Function to update the headers and description
    function updateHeadersAndDescription() {
        var activeItem = document.querySelector(".carousel-item.active");
        var altText = activeItem.querySelector(".carousel-img").alt;
        var altParts = altText.split("', '");

        
        carouselDescription.textContent = altParts[1].substring(0, altParts[1].length - 1);
        headerPartTwo.textContent = altParts[0].substring(1);
    }

    // Event listener for the Bootstrap Carousel "slid" event
    var myCarousel = document.getElementById("myCarousel");
    myCarousel.addEventListener("slid.bs.carousel", function() {
        updateHeadersAndDescription();
    });
    
    updateHeadersAndDescription();
});