/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    $(function () {
        if ((!$('#pageBanner').length) || $('#pageTitle').length) {
            $('.header').addClass('isolatedHeader');
        }
    });

    $(function () {
        $('.customMessageWrapper').hide();
        $('select#quantity').on('change', function () {

            if (this.value === 'standardJar') {
                $('.customMessageWrapper').show();
            } else {
                $('.customMessageWrapper').hide();
            }
        })
    });

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {

    // modal 
    $(function () {
        $('.btn-modal').click(function (e) {
            e.preventDefault();
            var modalId = $(this).attr('data-modal-id');
            $(`#${modalId}`).removeAttr('class').addClass('modalMainFigure five');
            $('body').addClass('modal-active');
        })

        $('.btn-remove-modal').click(function () {
            $(this).closest('.modalMainFigure').addClass('out');
            $('body').removeClass('modal-active');
            $('.from-body').removeClass('displayShow');
            $('.login-body').addClass('displayShow');
        });

        $('#register').click(function (e) {
            e.preventDefault();
            $(this).closest('.from-body').removeClass('displayShow');
            $('.register-body').addClass('displayShow');
        });

        $('#forgot').click(function (e) {
            e.preventDefault();
            $(this).closest('.from-body').removeClass('displayShow');
            $('.forgot-body').addClass('displayShow');
        });
    });


    $(function () {
        if ($('.tab-a').length) {
            $('.tab-a').click(function () {
                $(".tab").removeClass('tab-active');
                $(".tab[data-id='" + $(this).attr('data-id') + "']").addClass("tab-active");
                $(".tab-a").removeClass('active-a');
                $(this).addClass('active-a');
            });
        }
    });

    // Add smooth scrolling to all links
    $(".contentInfoWrapper li a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });


});
