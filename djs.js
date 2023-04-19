var djs = {
    d: [],
    init: function(){
        this.initConsole();
        this.stack.add("Hello");
        this.stack.add("World!");
        this.stack.view();
    },
    initConsole: function(){
        var c = document.getElementById("djs-console");
        d["console"] = c;
        if( c == null ){return;}
        c.classList = "djs-console";
    },
    viewData: function(){
        console.log(this.d);
    },
    stack: {
        q: [],
        add: function(fctName, sOptions = ""){
            this.q.push({fct: fctName, arg: sOptions});
        },
        getNext: function(){

        },
        run: function(){

        },
        view: function(){
            alert(this.q.join(", "));
        }
    }
}