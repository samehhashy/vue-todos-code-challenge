<template>
  <div class="todo">
    <v-container>
      <div class="d-flex mb-5">
        <UserSelect />
        <TodoForm class="flex-grow-1 pl-4" />
      </div>
      <TodoList />
    </v-container>
  </div>
</template>

<script>
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import UserSelect from "@/components/UserSelect";
import placeholderData from "@/data";
import User from "@/models/User";

export default {
  components: { TodoForm, TodoList, UserSelect },

  data() {
    return { placeholderData };
  },

  computed: {
    users() {
      return User.all();
    }
  },

  methods: {
    initDB() {
      if (!this.users.length) {
        // making sure the app has some initial data, for demonstration purposes
        User.insert({ data: this.placeholderData });
      }
    }
  },

  created() {
    this.initDB();
  }
};
</script>
