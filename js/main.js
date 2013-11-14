define(['jquery', 'underscore', 'backbone',
        'text!html/layout.html',
        'text!html/home.html',
        'text!html/projects.html',
        'bootstrap'],
function($, _, Backbone,
    layout, home, projects){
    var Router = Backbone.Router.extend({
        DEFAULT_ROUTE: '',
        routes: {
            ''  : function(){
                $("#body-container").html(home);
            },
            'projects'  : function(){
                $("#body-container").html(projects);
            }
        },
        initialize  : function(){
            $("body").html(layout);
            Backbone.history.start({root: window.location.pathname});
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
