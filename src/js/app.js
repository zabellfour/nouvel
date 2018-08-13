import DE from './modules/dots';

(($) => {
    'use strict';

    // When DOM is ready
    $(() => {

        const submitBtn = document.getElementById('submit-form-btn');

        var form = document.getElementById('incription-form');
        // Loop over them and prevent submission

        submitBtn.addEventListener('click', function() {

            if (form.checkValidity() === false) {

                event.preventDefault();
                event.stopPropagation();
            } else {

                AjaxFormRequest('result', 'incription-form', 'form-to-email.php')
            }
            form.classList.add('was-validated');
        }, false);


        (function iOS_CaretBug() {

            var ua = navigator.userAgent,
            scrollTopPosition,
            iOS = /iPad|iPhone|iPod/.test(ua),
            iOS11 = /OS 11_0|OS 11_1|OS 11_2/.test(ua);
    
            // ios 11 bug caret position
            if ( iOS && iOS11 ) {
    
                $(document.body).on('show.bs.modal', function(e) {
                    if ( $(e.target).hasClass('inputModal') ) {
                        // Get scroll position before moving top
                        scrollTopPosition = $(document).scrollTop();
    
                        // Add CSS to body "position: fixed"
                        $("body").addClass("iosBugFixCaret");
                    }
                });
    
                $(document.body).on('hide.bs.modal', function(e) {
                    if ( $(e.target).hasClass('inputModal') ) {         
                        // Remove CSS to body "position: fixed"
                        $("body").removeClass("iosBugFixCaret");
    
                        //Go back to initial position in document
                        $(document).scrollTop(scrollTopPosition);
                    }
                });
    
            }
        })();

        function AjaxFormRequest(result_id, formMain, url) {

            jQuery.ajax({
                url: url,
                type: "POST",
                dataType: "html",
                data: jQuery("#" + formMain).serialize(),
                success: function(response) {
                    document.getElementById(result_id).innerHTML = response;
                },
                error: function(response) {
                    document.getElementById(result_id).innerHTML = "<span class='error'>Error while form sending. Reload page and repeat.</error>";
                }
            });
            $(':input', '#formMain').not(':button, :submit, :reset, :hidden').val('').attr("required", false);

        }
    });

})(jQuery);