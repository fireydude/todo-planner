
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
                    { id: 0, message: "declarations", child: [] },
                    { id: 1, message: "interactions", child: [] }
                ]
            },
            { id: 1, message: "learn Vue CLI", child: [] },
            { id: 2, message: "build Folder size app with dotnet core backend", child: [] },
            { id: 3, message: "learn Elektron", child: [] },
            { id: 4, message: "build cross platform Folder Size app", child: [] },
        ]
    }
});
