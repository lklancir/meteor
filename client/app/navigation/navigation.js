if (Meteor.isClient) {

    //on document ready trick!
    Meteor.startup(function () {

        //manpulation of navigation - shrinks size of nav
        $(window).scroll(function() {
            if ($(document).scrollTop() > 50) {
                $('nav').addClass('nav-shrink');
            } else {
                $('nav').removeClass('nav-shrink');
            }
        });

        //LOGIN form
        //  when clicked outside login form closes login popup
        $(document).on('click', function(event) {
            var target = event.target;
            if (!$(event.target).closest('div#login-dropdown-list').length) {
                var target_class = $(target).attr('class');
                if (!$('.'+target_class).parents('div#login-buttons').length) {
                    $('a.login-close-text').trigger('click');
                }
            }
        });

    });


    Template.mainNav.events({
        "click .navigation_search": function (event) {
          // This function is called when navigation search is changed (quicksearch)
          // classes used: .navigation_search, .ns_selected, .ns_text

          var code = event.target.parentElement.attributes.code.value; // collect clicked item code
          $('li.navigation_search').removeClass("ns_selected"); // remove selection from both quicksearch
          $('li.navigation_search[code="' + code + '"]').addClass('ns_selected'); // add selection to clicked
          $('input.ns_text').attr('placeholder', code == 'employer' ? 'Traži poslodavce' : 'Traži posloprimce'); // update text in search
        },

        "submit .ns_submit_form": function (event) {
          console.log("test submit");
          return false;
        },
    });

}
