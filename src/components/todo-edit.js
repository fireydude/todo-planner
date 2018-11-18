Vue.component('todo-edit', {
    name: 'edit',
    props: ['todo'],
    template: `<div>
    <input v-model="todo.message" placeholder="new item">
    </div>`
});