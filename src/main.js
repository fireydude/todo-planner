
Vue.use(SemanticUIVue);
var app = new Vue({
    el: '#app',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString(),
      list: [
          { id: 0, message: "learn Vue basics" },
          { id: 1, message: "learn Vue CLI" },
          { id: 2, message: "build Folder size app with dotnet core backend" },
          { id: 3, message: "learn Elektron" },
          { id: 4, message: "build cross platform Folder Size app" },
      ],
      newMessage: ''
    },
    methods: {
        addItem: function() {

            console.log(this.newMessage)
            this.list.push(
                {
                    id: this.list.length,
                    message: this.newMessage
                }
            );
        }
    }
  });