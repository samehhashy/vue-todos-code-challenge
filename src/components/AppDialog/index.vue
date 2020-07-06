<template>
  <v-dialog
    @keydown.esc="close"
    @click:outside="close"
    :max-width="maxWidth"
    :value="isActive"
  >
    <v-card class="dialog">
      <v-card-title class="dialog__title">
        <h3>
          {{ title }}
        </h3>
        <v-spacer />
        <v-btn depressed fab small color="secondary" @click="$emit('close')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        <slot />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "sm",
      validator: val => ["sm", "md", "lg"].indexOf(val) !== -1
    }
  },

  methods: {
    close() {
      this.$emit("close");
    }
  },

  computed: {
    maxWidth() {
      switch (this.size) {
        case "md":
          return 600;
        case "lg":
          return 960;
        default:
          return 325; // a.k.a "sm"
      }
    }
  }
};
</script>
