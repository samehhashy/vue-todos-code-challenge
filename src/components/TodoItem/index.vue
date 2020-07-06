<template>
  <div class="todo-item">
    <v-hover>
      <template v-slot="{ hover }">
        <v-card :elevation="hover ? 10 : 0" outlined color="light">
          <div
            class="todo-item__color-label"
            :style="`backgroundColor: ${todoItem.color}`"
          />
          <v-container fluid>
            <v-row no-gutters justify="space-between">
              <v-col class="d-flex align-center">
                <h1
                  class="todo-item__title"
                  v-text="todoItem.title"
                  :class="{ 'todo-item--is-done': todoItem.is_done }"
                />
              </v-col>

              <v-col cols="5" sm="3" class="d-flex align-center justify-end">
                <div class="todo-item__actions">
                  <v-btn
                    class="todo-item__actions__btn"
                    :color="todoItem.is_done ? 'accent' : 'disabled'"
                    fab
                    x-small
                    depressed
                    @click="$emit('click:toggle')"
                  >
                    <v-icon>mdi-check</v-icon>
                  </v-btn>
                  <v-btn
                    class="todo-item__actions__btn"
                    color="secondary"
                    fab
                    x-small
                    depressed
                    @click="$emit('click:edit')"
                  >
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn
                    class="todo-item__actions__btn"
                    color="error"
                    fab
                    x-small
                    depressed
                    @click="$emit('click:delete')"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </template>
    </v-hover>
  </div>
</template>

<script>
export default {
  props: {
    todoItem: {
      type: Object,
      required: true
    }
  }
};
</script>
