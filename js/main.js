

var Profile = Backbone.Model.extend();

var Profiles = Backbone.Collection.extend({
    url: 'http://www.json-generator.com/api/json/get/cgxdfenBGq?indent=2',
    model: Profile
})



var profileView = Backbone.View.extend({
    tagName: "li",
    render: function(){
        this.$el.html(this.model.get("name") + " ------> " + this.model.get("about"));
        return this;
    }
})

var profilesView = Backbone.View.extend({
    render: function(){
        var self = this;
        this.model.each(function(profile){
            var profileview = new profileView({
                model: profile
            });
            self.$el.append(profileview.render().$el);
        });
    }
})

var profiles = new Profiles();

profiles.fetch()
    .then(()=>{
        var profilesview = new profilesView({el: '#profile', model: profiles });
        profilesview.render();
    })

