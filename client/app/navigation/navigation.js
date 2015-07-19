if (Meteor.isClient) {
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
