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

    Jobs.update({_id:jobId}, {$push:{
      applicants: {
        $each: [Meteor.userId()]
      }
    }});

    Jobs.update({_id:jobId}, {$inc:{ applicantsCount: 1

    }});

  },
  employeeJobCancelApply: function(jobId){

    Jobs.update({_id:jobId}, {$pull:{
      applicants: {
        $in: [Meteor.userId()]
      }
    }});

    Jobs.update({_id:jobId}, {$set:{ applicantsCount: 0

    }});
  },

  jobDeactivate: function(jobId){
    Jobs.update({_id:jobId}, {$set:{ jobStatus: {active: false, unactive: true, expired: false}

    }});
  },

  jobActivate: function(jobId){
    Jobs.update({_id:jobId}, {$set:{ jobStatus: {active: true, unactive: false, expired: false}

    }});
  }



});


// Jobs.update({_id:jobId}, {$addToSet:{ applicants: { $each: [userId] }});
