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