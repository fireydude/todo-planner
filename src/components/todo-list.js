Vue.component('todo-list', {
    props: ['list'],
    template: `
    <ol>
        <todo-item v-for="todo in list" v-bind:todo="todo" v-bind:key="todo.id"></todo-item>
    </ol>`
})