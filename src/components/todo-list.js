Vue.component('todo-list', {
    props: ['list'],
    template: `
    <ol>
        <todo-item v-for="todo in list" v-bind:todo="todo" v-bind:key="todo.id" v-bind:remove="removeItem"></todo-item>
    </ol>`,
    methods: {
        removeItem: function(todo) {
            console.log('remove item', todo);
            var indexOfItem = this.list.indexOf(todo);
            if(indexOfItem > 0) {
                this.list.splice(indexOfItem, 1);
            }
        }
    }
})