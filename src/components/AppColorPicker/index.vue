<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    nudge-bottom="20"
  >
    <template #activator="{ on, attrs }">
      <div v-bind="attrs" v-on="on">
        <slot>
          <v-btn>Pick Color</v-btn>
        </slot>
      </div>
    </template>
    <v-card>
      <v-color-picker
        v-bind="$attrs"
        mode="hexa"
        hide-mode-switch
        flat
        :value="color"
        @input="onColorPick"
      />
      <v-card-actions class="d-flex justify-end">
        <v-btn class="ma-3 mt-0" depressed color="accent" @click="menu = false">
          Ok
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  name: "AppColorPicker",

  props: {
    color: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      menu: false
    };
  },

  methods: {
    onColorPick(color) {
      this.$emit("color-pick", color);
    }
  }
};
</script>
