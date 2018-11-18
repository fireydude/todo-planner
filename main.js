
  Vue.component('todo-item', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['todo'],
    template: '<li>{{ todo.message }}</li>'
  });

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
      hello: 'hello world'
    },
    methods: {
        reverseList: function() {

            let reversedList = [];
            this.list.reverse().forEach(element => {
                reversedList.push({
                    message: element.message
                });
            });
            this.list = reversedList;
        }
    }
  });
