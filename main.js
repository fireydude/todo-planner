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
    }
  });