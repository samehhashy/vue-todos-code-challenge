<template>
  <v-form
    @submit.prevent="submitHandler"
    v-model="validation.isValid"
    ref="todoForm"
  >
    <v-text-field
      v-model="form.title"
      label="Add a new item"
      outlined
      rounded
      color="secondary"
      :rules="validation.title"
      autofocus
    >
      <template #append>
        <TodoColorPicker
          @color-pick="form.color = $event"
          :current-color="form.color || undefined"
        />
        <v-btn
          fab
          depressed
          small
          color="accent"
          type="submit"
          :disabled="!validation.isValid"
        >
          <v-icon size="28">mdi-plus</v-icon>
        </v-btn>
      </template>
    </v-text-field>
  </v-form>
</template>

<script>
import TodoColorPicker from "@/components/TodoColorPicker";
import { mapGetters } from "vuex";
import Todo from "@/models/Todo";
import { generateId } from "@/utils/helpers";

export default {
  components: { TodoColorPicker },

  data() {
    return {
      form: {
        title: "",
        color: "#" + this.$vuetify.theme.themes.light.secondary
      },

      validation: {
        rules: [
          v => Boolean(v) || "Cannot be empty",
          v => v.length <= 100 || "Cannot be more than 100 characters"
        ],
        title: [],
        isValid: true
      }
    };
  },

  computed: {
    ...mapGetters(["selectedUserId"])
  },

  methods: {
    submitHandler() {
      this.validateForm();
      setTimeout(() => this.addItem());
    },

    validateForm() {
      this.validation.title = this.validation.rules;
      this.$refs.todoForm.validate();
    },

    addItem() {
      if (this.validation.isValid) {
        const userId = this.selectedUserId;
        this.form.user_id = userId;
        this.form.id = generateId(Todo.all());
        Todo.insert({ data: this.form });
        this.resetForm();
      }
    },

    resetForm() {
      // will not reset the color because
      // the user is likely to use the same last color
      this.form.title = "";
      this.$refs.todoForm.resetValidation();
      this.validation.title = [];
    }
  }
};
</script>
