
Vue.use(SemanticUIVue);
var app = new Vue({
    el: '#app',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString(),
        list: [
            {
                id: 0, 
                message: "learn Vue basics",
                child: [
                    { id: 0, message: "declarations" },
                    { id: 1, message: "interactions" }
                ]
            },
            { id: 1, message: "learn Vue CLI" },
            { id: 2, message: "build Folder size app with dotnet core backend" },
            { id: 3, message: "learn Elektron" },
            { id: 4, message: "build cross platform Folder Size app" },
        ]
    }
});
