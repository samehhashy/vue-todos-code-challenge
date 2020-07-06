<template>
  <AppColorPicker @color-pick="onColorPick" :color="currentColor">
    <template>
      <v-btn fab depressed x-small dark :color="currentColor" class="mx-2 mt-1">
        <v-icon size="20">mdi-palette</v-icon>
      </v-btn>
    </template>
  </AppColorPicker>
</template>

<script>
import AppColorPicker from "@/components/AppColorPicker";

export default {
  components: { AppColorPicker },

  props: {
    currentColor: {
      type: String,
      default: "secondary"
    }
  },

  methods: {
    onColorPick(color) {
      this.$emit("color-pick", color);
    }
  }
};
</script>
