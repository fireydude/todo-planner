Vue.component('todo-edit', {
    name: 'edit',
    props: ['todo'],
    template: `<input v-model="todo.message" placeholder="new item">`
});