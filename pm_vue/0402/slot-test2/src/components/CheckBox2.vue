<script setup>
const props = defineProps(['id', 'checked']);
const emit = defineEmits(['check-changed']);
</script>

<template>
  <div>
    <input
      type="checkbox"
      :value="id"
      :checked="checked"
      @change="$emit('check-changed', { id, checked: $event.target.checked })"
    />
    <slot>item</slot>
  </div>
</template>
