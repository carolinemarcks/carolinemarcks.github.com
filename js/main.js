define(['jquery', 'underscore', 'handlebars', 'backbone',
        './views/home',
        'text!templates/layout.template',
        'bootstrap'],
function($, _, Handlebars, Backbone,
    HomeView,
    layout){
    var _layout = Handlebars.compile(layout);
    var Router = Backbone.Router.extend({
        DEFAULT_ROUTE: '',
        routes: {
            ''  : 'home',
        },
        initialize  : function(){
            $("body").html(_layout());
            Backbone.history.start({root: window.location.pathname});
        },
        home        : function(){
            if(!this.homeView) this.homeView = new HomeView();
            this.homeView.render();
        }
    });

    function Main(){
        this.router = new Router();
    };

    Main.prototype.run = function(){
        console.log("running...");
    };

    return new Main();
});
