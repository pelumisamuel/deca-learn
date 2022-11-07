<template>
  <div
    class="bg-red-100 rounded-lg font-bold py-2 px-6 mb-4 text-base text-red-700 md:mb-3"
    role="alert"
    :class="color"
  >
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    message: String,
    color: String,
  },
}
</script>
