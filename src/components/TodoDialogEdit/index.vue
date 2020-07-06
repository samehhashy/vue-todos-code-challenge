<template>
  <AppDialog @close="close" :is-active="isActive" size="md">
    <template>
      <v-container>
        <v-form @submit.prevent="onSubmit">
          <v-row>
            <v-col>
              <v-text-field
                :value="todoItem.title"
                outlined
                label="Item Title *"
                @input="onTitleEdit"
              />
            </v-col>
            <v-col cols="2" class="pt-5">
              <TodoColorPicker
                :current-color="newTodoItem.color || todoItem.color"
                @color-pick="onColorPick"
              />
            </v-col>
          </v-row>

          <v-btn depressed type="submit" color="accent" class="ma-2">
            Save
          </v-btn>
          <v-btn depressed color="warning" class="ma-2" @click="close">
            Cancel
          </v-btn>
        </v-form>
      </v-container>
    </template>
  </AppDialog>
</template>

<script>
import AppDialog from "@/components/AppDialog";
import TodoColorPicker from "@/components/TodoColorPicker";
import Todo from "@/models/Todo";

export default {
  components: { AppDialog, TodoColorPicker },

  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    itemId: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      newTodoItem: {
        title: "",
        color: ""
      }
    };
  },

  computed: {
    todoItem() {
      if (this.itemId) {
        return Todo.find(this.itemId);
      } else return "";
    }
  },

  watch: {
    todoItem: {
      immediate: true,
      deep: true,
      handler(item) {
        Object.assign(this.newTodoItem, item);
      }
    }
  },

  methods: {
    onColorPick(newColor) {
      this.newTodoItem.color = newColor;
    },

    close() {
      this.newTodoItem = { title: "", color: "" };
      this.$emit("close");
    },

    onTitleEdit(newTitle) {
      this.newTodoItem.title = newTitle;
    },

    assignItem() {
      this.newTodoItem = { ...this.todoItem };
    },

    onSubmit() {
      Todo.update({ where: this.itemId, data: this.newTodoItem });
      this.close();
    }
  }
};
</script>
