<template>
  <div>
    <v-slide-y-transition group v-if="todos.length">
      <TodoItem
        v-for="item in todos"
        :key="item.id"
        :todo-item="item"
        @click:edit="editingItemId = item.id"
        @click:delete="onItemDelete(item.id)"
        @click:toggle="onItemToggle(item.id, item.is_done)"
      />
    </v-slide-y-transition>

    <div v-else>
      <h3 class="text--disabled text-center">
        This user doesn't have any items yet
      </h3>
    </div>

    <TodoDialogEdit
      :item-id="editingItemId"
      @close="editingItemId = ''"
      :is-active="Boolean(editingItemId)"
    />
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
import Todo from "@/models/Todo";
import { mapGetters } from "vuex";
import TodoDialogEdit from "@/components/TodoDialogEdit";

export default {
  components: {
    TodoItem,
    TodoDialogEdit
  },

  data() {
    return {
      deletingItemId: "",
      editingItemId: ""
    };
  },

  computed: {
    ...mapGetters(["selectedUserId"]),

    todos() {
      return Todo.query()
        .where("user_id", this.selectedUserId)
        .orderBy("is_done")
        .orderBy(todo => Number(todo.id.substr(3, todo.id.length - 4)), "desc")
        .get();
    }
  },

  methods: {
    onItemToggle(id, isDone) {
      Todo.update({ where: id, data: { is_done: !isDone } });
    },

    onItemDelete(id) {
      Todo.delete(id);
    }
  }
};
</script>
