Vue.component('todo-item', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todo'],
  template: `<li>
        {{ todo.message }}
        <input v-model="newMessage" placeholder="new item">
        <sui-button primary v-on:click="addItem">Add New Item</sui-button>
        <todo-list v-bind:list="todo.child"></todo-list>
      </li>`,
  data: function () {
    return {
      newMessage: ''
    }
  },
  methods: {
    addItem: function () {

      this.todo.child.push(
        {
          id: this.todo.child.length,
          message: this.newMessage,
          child: []
        }
      );
    }
  },
});