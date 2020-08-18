jQuery(document).ready(function() {
    jQuery("button#dark-mode").click(function() {
        jQuery("body").removeClass();
        jQuery("body").addClass("dark-mode");
    });
    jQuery("button#original-mode").click(function() {
        jQuery("body").removeClass();
        jQuery("body").addClass("original-mode");
    });
});