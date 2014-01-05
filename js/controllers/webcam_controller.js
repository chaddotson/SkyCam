WebCam.WebCamController = Ember.ArrayController.extend({

    selectedIndex: 0,
    selected: null,
    
    actions: {
        doClick: function (context) {
           
            this.set('selectedImage', context);
            
        },
        
        doUpdate: function()
        {
            this.store.update();
        }
    },

    
    firstImage: function() {
        //alert(this.get('firstObject').get('imageURL'));
        return this.get('firstObject');
    }.property('[]'),
  
    selectedImage: function() {
        if( this.get('selected') == null )
        {
            this.set('selected', this.get('firstObject'));
            return this.get('firstObject');
        }
        else
            return selected;
        
    }.property('selectedImage')
  
});

