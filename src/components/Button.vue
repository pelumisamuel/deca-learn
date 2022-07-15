<template>
  <button
    type="button"
    class="inline-block px-6 py-2.5 w-full bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-white hover:text-purple-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:text-white focus:outline-none focus:ring-0 active:bg-blue-800 active:text-white active:shadow-lg transition duration-150 ease-in-out"
  >
    {{ content }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    content: String,
  },
}
</script>
