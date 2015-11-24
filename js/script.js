/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function($, Drupal, window, document, undefined) {


    // To understand behaviors, see https://drupal.org/node/756722#behaviors
    Drupal.behaviors.my_custom_behavior = {
        attach: function(context, settings) {

                $(window).load(function() {
                    //$("#block-system-main-menu .menu__link:eq(0),#block-menu-menu-footer-menu .menu__link:eq(2)").attr("href", '#block-views-lamour-product-block');
                    // $("#block-system-main-menu .menu__link:eq(1)").attr("href", '#block-views-lamour-product-block');
                    // $("#block-system-main-menu .menu__link:eq(2)").attr("href", '#block-views-lamour-introduction-block');
                    // $("#block-system-main-menu .menu__link:eq(3)").attr("href", '#block-views-lamour-recommend-block');
                    // $("#block-system-main-menu .menu__link:eq(4)").attr("href", '#block-views-lamour-news-block');


                    //$("#block-menu-menu-footer-menu .menu__link:eq(2)").attr("href", '#block-views-lamour-product-block');



                    //menu
                    $("#block-system-main-menu").prepend("<div class='bar'></div>");
                    $("#block-system-main-menu").click(function() {
                        $(this).toggleClass("menu-expanded");
                    });

                    //產品特效箭頭
                    $("#block-views-lamour-introduction-block .views-field-body").click(function() {
                        $(this).toggleClass("views-field-body-expanded");
                    });

                    //認證箭頭
                    $("#block-views-lamour-quality-block .views-field-body").click(function() {
                        $(this).toggleClass("views-field-body-expanded");
                    });




                    $(".views-row-1 .views-field-title-wrape").click(function() {

                        $(".views-row-1 .views-field-body-wrape").slideToggle("slow");

                    });
                    $(" .views-row-2 .views-field-title-wrape").click(function() {
                        $(".views-row-2 .views-field-body-wrape").slideToggle("slow");
                    });
                    $(" .views-row-3 .views-field-title-wrape").click(function() {
                        $(".views-row-3 .views-field-body-wrape").slideToggle("slow");
                    });



                    //      $('#block-views-lamour-introduction-block .views-row-1').parallax({
                    //     imageSrc: '/sites/default/files/info_ball.jpg'
                    // });



                    //toggle

                    if (window.innerWidth <= 719) {

                        $(" #block-views-lamour-quality-block .views-field-body").click(function() {
                            $("#block-views-lamour-quality-block .view-footer").slideToggle("slow");
                        });

                    }


                    $(" #block-views-lamour-product-block .views-row-1 .views-field-body-1").click(function() {
                        $(".views-row-1 .views-field-body").slideToggle("slow");

                        //$("#block-views-lamour-product-block .views-row-1 .views-field-add-to-cart-form-1").css('top','35%')
                    });

                    $(" #block-views-lamour-product-block .views-row-2 .views-field-body-1").click(function() {
                        $(".views-row-2 .views-field-body").slideToggle("slow");
                    });

                    $(" #block-views-lamour-product-block .views-row-3 .views-field-body-1").click(function() {
                        $(".views-row-3 .views-field-body").slideToggle("slow");
                    });

                    //end for toggle


                });
                // $("#block-system-main-menu .menu__link:first").attr("href", '#block-views-lamour-product-block');
                // $("#block-system-main-menu .menu__link:first").attr("href", '#block-views-lamour-product-block');
                $(document).ready(function() {


                    $("#block-menu-menu-header-menu .menu #item").html("<p>All</p>");
                    $("#block-multiblock-1 .menu #item").html("<p>All</p>");

                    




                });

                // $(function() {
                //     var offset = $(".link-badge-text").offset();
                //     $(".commerce-add-to-cart").click(function(event) {
                //         // var addcar = $(this);
                //         // var img = $('.views-field-field-image-single .field-content').find('img').attr('src');
                //         var flyer = $('<img class="u-flyer" src="/sites/all/themes/lamour/images/cart.jpg">');
                //         flyer.fly({
                //             start: {
                //                 left: event.pageX,
                //                 top: event.pageY
                //             },
                //             end: {
                //                 left: offset.left + 10,
                //                 top: offset.top + 10,
                //                 width: 0,
                //                 height: 0
                //             },
                //             // onEnd: function(){
                //             //  $("#msg").show().animate({width: '250px'}, 200).fadeOut(1000);
                //             //  addcar.css("cursor","default").removeClass('orange').unbind('click');
                //             //  this.destory();
                //             // }
                //         });
                //     });

                // }); //購物車飛


                $('#block-system-main-menu a[href^="#"],#block-menu-menu-footer-menu a[href^="#"]').on('click', function(event) {
                    var target = $($(this).attr('href'));

                    if (target.length) {
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                    }

                }); // a 移動ＧＯ


            } //attach: function(context, settings)
    };


})(jQuery, Drupal, this, this.document);
