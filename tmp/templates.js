Ember.TEMPLATES["account/account"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"partition\">\n  <div class=\"one-third simple-menu\">\n    <div class=\"title\">Account Dashboard</div>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "accountMenu", options) : helperMissing.call(depth0, "outlet", "accountMenu", options))));
  data.buffer.push("\n  </div>\n  <div class=\"two-thirds\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "accountDashboard", options) : helperMissing.call(depth0, "outlet", "accountDashboard", options))));
  data.buffer.push("\n  </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["account/change-password"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"titled-box\">\n  <div class=\"title\">Change Password</div>\n  <div class=\"content\">\n    <form class=\"form-1\" action=\"\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'value': ("oldPassword"),
    'id': ("oldPassword"),
    'placeholder': ("Old password")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      <br>\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'value': ("newPassword"),
    'id': ("newPassword"),
    'placeholder': ("New password")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'value': ("repeatNewPassword"),
    'id': ("repeatNewPassword"),
    'placeholder': ("Repeat new password")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      <button class=\"button-blue\">Change Password</button>\n    </form>\n  </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["account/delete-account"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"titled-box\">\n  <div class=\"title\">Delete Account</div>\n  <div class=\"content\">\n    <form class=\"form-1\" action=\"\">\n      <div class=\"message\">\n        <b>WARNING:</b> This action cannot be undone.\n        If you are absolutely certain, please type \"DELETE\" in the field below.\n      </div>\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("textfield"),
    'value': ("confirmDelete"),
    'id': ("confirmDelete"),
    'placeholder': ("DELETE")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      <button class=\"button-red\">Delete this Account</button>\n    </form>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["admin/account-menu"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Change Password");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Delete Account");
  }

  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("option")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "admin.account.change-password", options) : helperMissing.call(depth0, "link-to", "admin.account.change-password", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("option")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "admin.account.delete-account", options) : helperMissing.call(depth0, "link-to", "admin.account.delete-account", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["admin/menu"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Students");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Tutors");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Account");
  }

  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("link-black")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "admin.students", options) : helperMissing.call(depth0, "link-to", "admin.students", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("link-black")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "admin.tutors", options) : helperMissing.call(depth0, "link-to", "admin.tutors", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("link-black")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "admin.account", options) : helperMissing.call(depth0, "link-to", "admin.account", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<a class=\"button-blue button-large\">Sign Out</a>\n");
  return buffer;
  
});

Ember.TEMPLATES["admin/students"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"heading-bar\">\n  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("search"),
    'type': ("textfield"),
    'value': ("headingBarSearch"),
    'id': ("headingBarSearch"),
    'placeholder': ("Search Students")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'class': depth0,'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n</div>\n<div class=\"partition\">\n  <div class=\"one-third\">\n    <div class=\"titled-box\">\n      <div class=\"title\">Add Credits</div>\n      <div class=\"content\">\n        <form class=\"form-1\" action=\"\">\n          ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("textfield"),
    'value': ("additionalCredits"),
    'id': ("additionalCredits"),
    'placeholder': ("Number of Credits")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n          Now select a student from the list\n        </form>\n      </div>\n    </div>\n    <div class=\"titled-box\">\n      <div class=\"title\">Download Excel Report</div>\n      <div class=\"content\">\n        <form class=\"form-1\" action=\"\">\n          Start Date\n          ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("textfield"),
    'value': ("reportDateStart"),
    'id': ("reportDateStart"),
    'placeholder': ("Day-Month-Year")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n          End Date\n          ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("textfield"),
    'value': ("reportDateEnd"),
    'id': ("reportDateEnd"),
    'placeholder': ("Day-Month-Year")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n          <div class=\"text\">\n            Select a Student, or\n          </div>\n          <button class=\"button-green\">Download (All Students)</button>\n        </form>\n      </div>\n    </div>\n  </div>\n  <div class=\"two-thirds\">\n    <table cellspacing=\"0\" class=\"student-list\">\n        <tr class=\"student\">\n          <td>Andreas Stocker <br> <span class=\"email\">andreas@stockers.org</span></td>\n          <td>4 Credits <a class=\"button-blue add-credits\">+ 10</a></td>\n          <td><a class=\"link-black\">Download Report</a></td>\n        </tr>\n    </table>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["admin/tutors"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"heading-bar\">\n  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("search"),
    'type': ("textfield"),
    'value': ("headingBarSearch"),
    'id': ("headingBarSearch"),
    'placeholder': ("Search Tutors")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'class': depth0,'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n</div>\n<div class=\"partition\">\n  <div class=\"one-third\">\n    <div class=\"titled-box\">\n      <div class=\"title\">Hourly Tutor Payment</div>\n      <div class=\"content\">\n        <form class=\"form-1\" action=\"\">\n          ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("halved"),
    'type': ("textfield"),
    'value': ("hourlyTutorRate"),
    'id': ("hourlyTutorRate"),
    'placeholder': ("JD per Hour")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'class': depth0,'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n          <button class=\"button-blue button-large\">Update</button>\n        </form>\n      </div>\n    </div>\n    <div class=\"titled-box\">\n      <div class=\"title\">Download Excel Report</div>\n      <div class=\"content\">\n        <form class=\"form-1\" action=\"\">\n          Start Date\n          ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("textfield"),
    'value': ("reportDateStart"),
    'id': ("reportDateStart"),
    'placeholder': ("Day-Month-Year")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n          End Date\n          ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("textfield"),
    'value': ("reportDateEnd"),
    'id': ("reportDateEnd"),
    'placeholder': ("Day-Month-Year")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n          <div class=\"text\">\n            Select a Tutor, or\n          </div>\n          <button class=\"button-green\">Download (All Tutors)</button>\n        </form>\n      </div>\n    </div>\n  </div>\n  <div class=\"two-thirds\">\n    <table cellspacing=\"0\" class=\"student-list\">\n      <tr class=\"student\">\n        <td>Kamal Suleiman<br> <span class=\"email\">kamal@komensky.net</span></td>\n        <td>15 JD Owed <a class=\"button-blue add-credits\">Paid</a></td>\n        <td><a class=\"link-black\">Download Report</a></td>\n      </tr>\n    </table>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"upper-bar\">\n  <span class=\"website-name\">eLingua</span>\n  <span class=\"right\">");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "upperMenu", options) : helperMissing.call(depth0, "outlet", "upperMenu", options))));
  data.buffer.push("</span>\n</div>\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["components/field-validated"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <div class=\"field-validated\">\n    ");
  stack1 = helpers.each.call(depth0, "error", "in", "field.errors", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <div>");
  stack1 = helpers._triageMustache.call(depth0, "error", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n    ");
  return buffer;
  }

  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = helpers.unless.call(depth0, "field.valid", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["default-menu"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Login");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Sign Up");
  }

  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("link-black")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "login", options) : helperMissing.call(depth0, "link-to", "login", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("button-blue button-large")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "sign-up", options) : helperMissing.call(depth0, "link-to", "sign-up", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("eLingua Account");
  }

  data.buffer.push("<div class=\"partition\">\n  <div class=\"one-third simple-menu\">\n    <div class=\"title\">Authentication Methods</div>\n    <a class=\"option\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "facebookLogin", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Facebook</a>\n    <a class=\"option\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "googleLogin", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Google</a>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("option")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "login", options) : helperMissing.call(depth0, "link-to", "login", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <div class=\"two-thirds\">\n    <div class=\"titled-box\">\n      <div class=\"title\">eLingua Account Login</div>\n      <div class=\"content\">\n        <form class=\"form-1\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n          ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("email"),
    'value': ("emailAddress"),
    'id': ("emailAddress"),
    'placeholder': ("Email address")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'value': ("password"),
    'id': ("password"),
    'placeholder': ("Password")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n          <button type=\"submit\" class=\"button-blue\">Login</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["sign-up"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("eLingua Account");
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("textfield"),
    'value': ("form.fields.fullName.value"),
    'placeholder': ("Full name")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n          ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("email"),
    'value': ("form.fields.emailAddress.value"),
    'placeholder': ("Email address")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n          ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'value': ("form.fields.password.value"),
    'placeholder': ("Password")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n          ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'value': ("form.fields.repeatPassword.value"),
    'placeholder': ("Repeat password")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n          ");
  return buffer;
  }

  data.buffer.push("<div class=\"partition\">\n  <div class=\"one-third simple-menu\">\n    <div class=\"title\">Authentication Methods</div>\n    <a class=\"option\">Facebook</a>\n    <a class=\"option\">Google</a>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("option")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "sign-up", options) : helperMissing.call(depth0, "link-to", "sign-up", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <div class=\"two-thirds\">\n    <div class=\"titled-box\">\n      <div class=\"title\">eLingua Account Sign Up</div>\n      <div class=\"content\">\n        <form class=\"form-1\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createAccount", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n          ");
  stack1 = (helper = helpers['field-validated'] || (depth0 && depth0['field-validated']),options={hash:{
    'field': ("form.fields.fullName")
  },hashTypes:{'field': "ID"},hashContexts:{'field': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "field-validated", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['field-validated'] || (depth0 && depth0['field-validated']),options={hash:{
    'field': ("form.fields.emailAddress")
  },hashTypes:{'field': "ID"},hashContexts:{'field': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "field-validated", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['field-validated'] || (depth0 && depth0['field-validated']),options={hash:{
    'field': ("form.fields.password")
  },hashTypes:{'field': "ID"},hashContexts:{'field': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "field-validated", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['field-validated'] || (depth0 && depth0['field-validated']),options={hash:{
    'field': ("form.fields.repeatPassword")
  },hashTypes:{'field': "ID"},hashContexts:{'field': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "field-validated", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          <button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":button-blue form.valid::disabled")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">Sign Up</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["student/account-menu"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Change Password");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Delete Account");
  }

  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("option")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "student.account.change-password", options) : helperMissing.call(depth0, "link-to", "student.account.change-password", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("option")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "student.account.delete-account", options) : helperMissing.call(depth0, "link-to", "student.account.delete-account", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["student/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n          <div class=\"hour\">\n            <div class=\"text\">\n              <div class=\"datetime\">Monday 13:00 - 14:00</div>\n              <div class=\"time-remaining\">Starts in 1 Day</div>\n              <div class=\"email\">kamal@komensky.org</div>\n            </div>\n            <div class=\"remove\">X</div>\n          </div>\n        ");
  }

  data.buffer.push("<div class=\"heading-bar\">\n  <span class=\"label\" title=\"Tutoring Hours\">Remaining Credits:</span>\n  <span class=\"value\">5</span>\n  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("search"),
    'type': ("textfield"),
    'value': ("headingBarSearch"),
    'id': ("headingBarSearch"),
    'placeholder': ("Search Tutors")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'class': depth0,'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n</div>\n<div class=\"partition\">\n  <div class=\"one-third\">\n    <div class=\"titled-box\">\n      <div class=\"title\">Weekly Tutoring Hours</div>\n      <div class=\"content scheduled-hours\">\n        ");
  stack1 = helpers.each.call(depth0, "test", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n    </div>\n    <div class=\"titled-box\">\n      <div class=\"title\">Download Excel Report</div>\n      <div class=\"content\">\n        <form class=\"form-1\" action=\"\">\n          Start Date\n          ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("textfield"),
    'value': ("reportDateStart"),
    'id': ("reportDateStart"),
    'placeholder': ("Day-Month-Year")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n          End Date\n          ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("textfield"),
    'value': ("reportDateEnd"),
    'id': ("reportDateEnd"),
    'placeholder': ("Day-Month-Year")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n          <button class=\"button-green\">Download</button>\n        </form>\n      </div>\n    </div>\n  </div>\n  <div class=\"two-thirds tutor-hour-selection\">\n    <div class=\"tutor\">\n      <div class=\"img-container\">\n        <img src=\"/images/kamal.png\" alt=\"Kamal\"/>\n      </div>\n      <div class=\"text\">\n        <div class=\"tutor-name\">\n          Kamal Suleiman\n        </div>\n        <div class=\"days-available\">\n          <span class=\"selected-day-title\">\n            <a class=\"day\">All</a> (5)\n          </span>\n          <span>\n            <a class=\"day\">Monday</a> (5)\n          </span>\n          <span>\n            <a class=\"day\">Tuesday</a> (5)\n          </span>\n        </div>\n        <table cellspacing=\"0\" class=\"selected-day\">\n          <tr class=\"available-hour\">\n            <td>Monday</td>\n            <td>13:00 - 14:00</td>\n            <td class=\"add-to-schedule\">Add to Schedule</td>\n          </tr>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["student/menu"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("Tutors");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Account");
  }

  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("link-black")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "student.index", options) : helperMissing.call(depth0, "link-to", "student.index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("link-black")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "student.account", options) : helperMissing.call(depth0, "link-to", "student.account", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<a class=\"button-blue button-large\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logout", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Sign Out</a>\n");
  return buffer;
  
});

Ember.TEMPLATES["tutor/account-menu"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Change Password");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Delete Account");
  }

  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("option")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "tutor.account.change-password", options) : helperMissing.call(depth0, "link-to", "tutor.account.change-password", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("option")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "tutor.account.delete-account", options) : helperMissing.call(depth0, "link-to", "tutor.account.delete-account", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["tutor/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n      <div class=\"hour\">\n        <div>\n          <span class=\"student-name\">Andreas Stocker</span>\n          <span class=\"right\">\n            <span class=\"begins-in\">begins in</span> 1 Hour\n          </span>\n        </div>\n        <div>\n          <span class=\"datetime\">Monday 13:00 - 14:00</span>\n          <span class=\"right\">\n            <button class=\"button-red remove\">Remove</button>\n          </span>\n        </div>\n      </div>\n    ");
  }

  data.buffer.push("<div class=\"heading-bar\">\n  <span class=\"label\">Credits Earned this Month:</span>\n  <span class=\"value\">29</span>\n  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("search"),
    'type': ("textfield"),
    'value': ("headingBarSearch"),
    'id': ("headingBarSearch"),
    'placeholder': ("Search Students")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'class': depth0,'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n</div>\n<div class=\"partition\">\n  <div class=\"one-third\">\n    <div class=\"titled-box\">\n      <div class=\"title\">Add Tutoring Hours</div>\n      <div class=\"content\">\n        <form class=\"form-1\" action=\"\">\n          <select name=\"\" id=\"\">\n            <option value=\"\">Monday</option>\n          </select>\n          <b>\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("textfield"),
    'class': ("time-range"),
    'value': ("filterStartingTime"),
    'id': ("filterStartingTime"),
    'placeholder': ("00")
  },hashTypes:{'type': "STRING",'class': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'class': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            :00\n          </b>\n          <span class=\"time-range-label\">to</span>\n          <b>\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("textfield"),
    'class': ("time-range"),
    'value': ("filterEndingTime"),
    'id': ("filterEndingTime"),
    'placeholder': ("00")
  },hashTypes:{'type': "STRING",'class': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'class': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            :00\n          </b><br>\n          <button class=\"button-blue\">Add Hours</button>\n        </form>\n      </div>\n    </div>\n    <div class=\"titled-box\">\n      <div class=\"title\">Download Excel Report</div>\n      <div class=\"content\">\n        <form class=\"form-1\" action=\"\">\n          Start Date\n          ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("textfield"),
    'value': ("reportDateStart"),
    'id': ("reportDateStart"),
    'placeholder': ("Day-Month-Year")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n          End Date\n          ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("textfield"),
    'value': ("reportDateEnd"),
    'id': ("reportDateEnd"),
    'placeholder': ("Day-Month-Year")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n          <button class=\"button-green\">Download</button>\n        </form>\n      </div>\n    </div>\n  </div>\n  <div class=\"two-thirds tutors-available-hours\">\n    ");
  stack1 = helpers.each.call(depth0, "test", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <br>\n    <button class=\"button-blue\">Show More</button>\n  </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["tutor/menu"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Tutoring Hours");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Account");
  }

  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("link-black")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "tutor.index", options) : helperMissing.call(depth0, "link-to", "tutor.index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("link-black")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "tutor.account", options) : helperMissing.call(depth0, "link-to", "tutor.account", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<a class=\"button-blue button-large\">Sign Out</a>\n");
  return buffer;
  
});