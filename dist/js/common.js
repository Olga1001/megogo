$(document).ready(function () {

    //slider
    $('.sections').fullpage({
        licenseKey: 'YOUR_KEY_HERE',
        navigation: false,
        scrollOverflow: true,
        scrollHorizontally: true,
        scrollBar: false,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6' ,'page7' ,'page8' ,'page9'],
    });

    //burger
    $(".burger").click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });

    //arrow down
    $(document).on('click', '#moveTo', function(){
        fullpage_api.moveTo('page2', 1);
    });
});
