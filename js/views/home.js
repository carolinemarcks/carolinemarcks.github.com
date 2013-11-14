define(['jquery','backbone','handlebars',
        'text!templates/home.template'],
function($,Backbone,Handlebars,home){

    var HomeView,
        _home = Handlebars.compile(home);

    HomeView = Backbone.View.extend({
        el: '#body-container',
        events: {
        },
        render: function(){
            this.$el.html(_home());
        }
    });
    return HomeView;
});
