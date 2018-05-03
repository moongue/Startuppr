$(window).on('load', function () {
    slider();
    viewDiv();
    slidClient();
});

// function viewDiv(){
//     document.getElementsByClassName("hidden-network").style.display = "block";
// };

function slider() {
$('.sliders').slick();
};

function slidClient() {
    $('.slide-client').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
};


function viewDiv(){
    $('btn').click(function(){
        $(".hidden-block").display('block');
    });
};

// function network() {
// $('.btn').click(function(){
//     $(".hidden-network").fadeToggle(100);
// });
// }