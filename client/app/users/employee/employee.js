Template.employeeRegistration.events({
  'submit form': function(event){
      event.preventDefault();
      var name = $('[name=name]').val();
      var surname = $('[name=surname]').val();
      var email = $('[name=email]').val();
      var password = $('[name=password]').val();

      var options = {
        email:email,
        password:password,
        profile: {
          name:name,
          surname: surname,
          type:'2'
      }
    };
      var userId = Accounts.createUser(options);
      Router.go('verification');
  }
});
