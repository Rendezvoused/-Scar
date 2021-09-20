</script><!-- fonts --><link href="https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;700&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap" rel="stylesheet"><!-- icon font -- http://suiomi.com/font --><link href="//solrainha.github.io/saturnicons/saturnicons.css" rel="stylesheet"><!-- tooltips --><script src="https://static.tumblr.com/iuw14ew/VSQma1786/jquery.style-my-tooltips.js"></script><script>
    (function($){
        $(document).ready(function(){
            $("a[title], div[title], span[title]").style_my_tooltips({
                tip_follows_cursor:true,
                tip_delay_time:30,
                tip_fade_speed:300,
                attribute:"title"
            });
        });
    })(jQuery);
</script><!-- photosets --><script src="https://static.tumblr.com/qudkd6d/Az6nkemqr/pxuphotoset.min.js"></script><script>
    $(document).ready(function(){
       $('.photo-slideshow').pxuPhotoset({
           lightbox: true,
           rounded: false,
           gutter: '1px',
           borderRadius: '0px',
           photoset: '.photo-slideshow',
           photoWrap: '.photo-data',
           photo: '.pxu-photo'
       });
    });
    
</script><!-- popups --><script>
$(document).ready(function() {
    $('#tr-about').click(function() {
        $('.entries, .popup').fadeOut();
        $('.pop-about').fadeIn();
    });
    
    $('#tr-links').click(function() {
        $('.entries, .popup').fadeOut();
        $('.pop-links').fadeIn();
    });
    
    $('.pop-close').click(function() {
        $('.popup').fadeOut();
        $('.entries').fadeIn();
    });
});
</script>