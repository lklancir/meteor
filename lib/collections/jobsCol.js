Jobs = new Meteor.Collection("jobs");

Meteor.methods({
  addJob: function (jobData) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Jobs.insert(jobData);
  },
  employeeJobApply: function(jobId){
    var job = Jobs.findOne({_id:"jobId"});


    Jobs.update({_id:jobId}, {$push:{
      applicants: {
        $each: [Meteor.userId()]
      }
    }});
  },
  employeeJobCancelApply: function(jobId){

    Jobs.update({_id:jobId}, {$pull:{
      applicants: {
        $in: [Meteor.userId()]
      }
    }});
  }



});


// Jobs.update({_id:jobId}, {$addToSet:{ applicants: { $each: [userId] }});
