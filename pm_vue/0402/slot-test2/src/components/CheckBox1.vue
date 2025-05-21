<script setup>
// import { defineProps, emit } from 'vue';
const props = defineProps(['id', 'checked', 'label']);
const emit = defineEmits(['check-changed']);
</script>

<template>
  <div>
    <input
      type="checkbox"
      :value="id"
      :checked="checked"
      @change="emit('check-changed', { id, checked: $event.target.checked })"
    />
    <span
      v-if="checked === true"
      style="color: blue; text-decoration: underline"
    >
      <i>{{ label }}</i>
    </span>
    <span v-else style="color: gray">{{ label }}</span>
  </div>
</template>
<!-- template안에서 이벤트 객체를 사용하고 싶으면  $event.target 이러케 사용함 -->
