(function ($) {

    'use strict';

    $(document).ready(function () {

        // Init here.
        var $body = $('body'),
            $main = $('#main'),
            $content = $('#main_content'),
            $site = $('html, body'),
            smoothState;

        smoothState = $main.smoothState({
            onBefore: function($anchor, $container) {

              $site.animate({scrollTop: 0});

            },
            onStart: {
                duration: 400,
                render: function (url, $container) {
                    $main.addClass('out');
                }
            },
            onReady: {
                duration: 0,
                render: function ($container, $newContent) {
                    $container.html($newContent);
                    $container.removeClass('out');

                    let hash = window.location.hash;
                    if (hash != "") {
                      history.pushState("", document.title, window.location.pathname);
                      $('html, body').animate({
                          scrollTop: $(hash).offset().top+310
                      }, 2000);
                    }

                    const observer = lozad();
                    observer.observe();

                }
            },
        }).data('smoothState');

    });

}(jQuery));
