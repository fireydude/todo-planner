var app = new Vue({
    el: '#app',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString(),
      list: [
          { message: "learn Vue basics" },
          { message: "learn Vue CLI" },
          { message: "build Folder size app with dotnet core backend" },
          { message: "learn Elektron" },
          { message: "build cross platform Folder Size app" },
      ]
    },
    methods: {
        reverseList: function() {

            let reversedList = [];
            console.log(this.list.length);
            for(i = this.list.length-1; i >= 0; i = i-1)
            {
                console.log('list item: ', this.list[i]);
                reversedList.push({
                    message: this.list[i].message
                });
            }
            this.list = reversedList;
            console.log(this.list.length);
        }
    }
  });