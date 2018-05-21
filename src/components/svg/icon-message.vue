<template>
    <svg :view-box.camel="viewBox" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>message</title>
        <path fill="#5c9fee" style="fill: var(--color1, #5c9fee)" d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path>
        <path fill="#fff" style="fill: var(--color2, #fff)" d="M24.96 11.36c0-0.96-0.8-1.76-1.792-1.76h-14.336c-0.992 0-1.792 0.768-1.792 1.76v9.312c0 0.96 0.8 1.76 1.792 1.76h14.336c0.992 0 1.792-0.768 1.792-1.76v-9.312z"></path>
        <path fill="#5c9fee" style="fill: var(--color1, #5c9fee)" d="M23.776 12.8l-7.776 4.64-7.776-4.64v-1.76l7.776 4.512 7.776-4.512v1.76z"></path>
    </svg>
</template>

<script>
export default {
  data(){
      return{
          viewBox:"0 0 32 32"
      }
  }
}
</script>
