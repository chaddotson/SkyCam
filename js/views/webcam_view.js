WebCam.ImageView = Ember.View.extend({
    classNameBindings: ['selectedImage'],
    selectedImage: function() {
        return WebCam.Selected;
    }.property("selectedImage")
});
