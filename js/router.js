'use strict';

WebCam.Router.map(function () {
  this.resource('WebCam', { path: '/' }, function () {
    // additional child routes    
    // this.route('..');
  });
});

WebCam.WebCamRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('Image');
  },
  
  afterModel: function(recordArray) {
    setInterval(function() {
        recordArray.update();
    }, 300000 ); //3600000
  }
  
});

