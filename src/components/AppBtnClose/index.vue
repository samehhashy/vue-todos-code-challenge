<template>
  <div class="close-btn d-flex">
    <v-spacer />
    <v-btn
      depressed
      fab
      small
      color="secondary"
      @click="$emit('close')"
      class="ma-4"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {};
</script>
