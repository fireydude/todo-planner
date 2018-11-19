Vue.component('todo-item', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todo', 'remove'],
  template: `<li>
        <span v-if="!isEditting">{{ todo.message }}</span>
        <todo-edit v-bind:todo="todo" v-if="isEditting"></todo-edit>
        <sui-icon name="edit" v-on:click="toggleEdit" v-if="!isActive" />
        <sui-icon name="add" v-on:click="toggleAdd" v-if="!isActive" />
        <sui-icon name="remove" v-on:click="toggleRemove" v-if="!isActive" />
        <div v-if="isEditting">
          <sui-button primary v-on:click="cancel">Save</sui-button>
          <sui-button v-on:click="cancelEdit">Cancel</sui-button>
        </div>
        <div v-if="isRemoving">
          Are you sure?
          <sui-button primary v-on:click="removeItem">Remove</sui-button>
          <sui-button v-on:click="cancel">Cancel</sui-button>
        </div>
        <todo-list v-bind:list="todo.child"></todo-list>
        <div v-if="isAdding">
          <input v-model="newMessage" placeholder="new item" v-if="isAdding" />
          <sui-button primary v-on:click="addItem">Add New Item</sui-button>
          <sui-button v-on:click="cancel">Cancel</sui-button>
        </div>
      </li>`,
  data: function () {
    return {
      isEditting: false,
      isAdding: false,
      isRemoving: false,
      isActive: false,
      newMessage: '',
      oldMessage: ''
    }
  },
  methods: {
    toggleAdd: function() {
      this.isAdding = true;
      this.isActive = true;
    },
    toggleEdit: function() {
      this.isEditting = true;
      this.isActive = true;
      this.oldMessage = this.todo.message;
    },
    toggleRemove: function() {
      console.log('removing ' + this.todo.message);
      this.isActive = true;
      this.isRemoving = true;
    },
    addItem: function () {

      this.todo.child.push(
        {
          id: this.todo.child.length,
          message: this.newMessage,
          child: []
        }
      );
      this.cancel();
    },
    removeItem: function() {
      console.log('callback to parent, remove ' + this.todo.message);
      this.remove(this.todo);
      this.cancel();
    },
    cancel: function() {
      this.isAdding = false;
      this.isRemoving = false;
      this.isEditting = false;
      this.isActive = false;
    },
    cancelEdit: function() {
      this.cancel();
      this.todo.message = this.oldMessage;
    }
  },
});