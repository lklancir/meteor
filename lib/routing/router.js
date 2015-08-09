
//Main template layout - later loading template
Router.configure({
    layoutTemplate: 'main'
});

Router.route('/', {
    name: 'home',
    template: 'home',
    layoutTemplate: 'main'
});

Router.route('/signup', {
    name: 'signup',
    template: 'signup',
    layoutTemplate:'createAccount'
});

Router.route('/login', {
    name: 'login',
    template: 'login'
});

Router.route('/jobs', {
    name: 'publicJobs',
    template: 'publicJobs',
    layoutTemplate:'createAccount'
});

Router.route("/signup/employer", {
  name:"employerRegistration",
  template:"employerRegistration",
  layoutTemplate:'createAccount',
  // onAfterAction:function(){
  //   if (! Meteor.userId()) {
  //       this.setLayout("createAccount");
  //       this.render('verification');
  //   }
  // }
});

Router.route("/signup/employee", {
  name:"employeeRegistration",
  template:"employeeRegistration",
  layoutTemplate:'createAccount'


});


Router.route("/signup/verification", {
  name:"verification",
  template:"verification",
  layoutTemplate:'createAccount'

});


Router.route("/employer/profile", {
  name:"employerProfile",
  template:"employerProfile",
  layoutTemplate:'employerLayout',
  // controller:"ProfileController",
    data: function(){
      var currentuser = Meteor.userId();
      Meteor.call("getEmployer", currentuser, function(error, result){
        if(error){
          console.log("error", error);
        }
        if(result){
           return result;
        }
      });

    },
    onBeforeAction:function(){

        var user = Meteor.userId();
        Meteor.call("userAccessDeniedEmployer", user, function(error, result){
          if(error){
            console.log("error", error);
          }
          if(result){
             Router.go("verification");
          }
        });
        this.next();

        // if(!user || !Roles.userIsInRole(user, ['employer'])) {
        //       Router.go("verification");
        // }
        // else {
        //   this.next();
        // }
        // return true;

    },


});

Router.route("/employer/post-a-job", {
  name:"addJob",
  template:"addJob",
  layoutTemplate:'employerLayout'

});

// My Jobs routes

Router.route("/employer/active-jobs", {
  name:"activeJobs",
  template:"activeJobs",
  layoutTemplate:'myJobs'

});

Router.route("/employer/unactive-jobs", {
  name:"unactiveJobs",
  template:"unactiveJobs",
  layoutTemplate:'myJobs'

});

Router.route("/employer/expired-jobs", {
  name:"expiredJobs",
  template:"expiredJobs",
  layoutTemplate:'myJobs'

});


//--------EMPLOYEE ROUTES--------
Router.route("/employee/profile", {
  name:"employeeProfile",
  template:"employeeProfile",
  layoutTemplate:'employeeLayout',
  // controller:"ProfileController",
    waitOn: function(){
      return Meteor.subscribe("userProfile", Meteor.userId());
    },
    data: function(){
      return Meteor.users.findOne({
          _id:Meteor.userId()
      });
    },
    onBeforeAction:function(){

        var user = Meteor.userId();
        Meteor.call("userAccessDeniedEmployee", user, function(error, result){
          if(error){
            console.log("error", error);
          }
          if(result){
             Router.go("verification");
          }
        });
        this.next();

        // if(!user || !Roles.userIsInRole(user, ['employer'])) {
        //       Router.go("verification");
        // }
        // else {
        //   this.next();
        // }
        // return true;

    },


});



Router.route("/employee/jobs", {
  name:"jobs",
  template:"jobs",
  layoutTemplate:'employeeLayout'

});



Router.route("/employee/appliedJobs", {
  name:"appliedJobs",
  template:"appliedJobs",
  layoutTemplate:'employeeLayout'

});

// WHY THIS ROUTE HAS TO BE LAST???
Router.route("/employee/:_id", {
  name:"employeeProfilePublic",
  template:"employeeProfile",
  layoutTemplate:'employeeLayout',
  waitOn:function(){

      return Meteor.subscribe("userProfile",this.params._id);
  },
  data:function(){
      var UID=Router.current().params._id;
      return Meteor.users.findOne({
          _id:UID
      });
  }

});


// ----------JOBS----------
Router.route("/jobs/:jobTitle", {
  name:"jobsDetailed",
  template:"jobsDetailed",
  waitOn:function(){

      return Meteor.subscribe("jobs");
  },
  data:function(){
      var jobTitle=Router.current().params.jobTitle;
      return Jobs.findOne({
          jobTitle:jobTitle
      });
  },
  //Since jobs are universal to both employer and employee we have to determine
  //the type of user and render the layout template accordingly
  onBeforeAction: function(){
    if (Meteor.user().profile.type == 1){
          this.layout("employerLayout");
      }
    if(Meteor.user().profile.type == 2){
          this.layout("employeeLayout");
      }
    this.next();
  }

});
