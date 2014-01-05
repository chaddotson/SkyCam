window.WebCam = Ember.Application.create();

//WebCam.ApplicationAdapter = DS.FixtureAdapter.extend();


WebCam.ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: '~webcam/',
  host: 'http://www.cdotson.com/webcam/',
    buildURL: function() {
        //var normalURL = this._super.apply(this, arguments);
        //return normalURL + '.php';
        
        return "pics.php"
    }
});