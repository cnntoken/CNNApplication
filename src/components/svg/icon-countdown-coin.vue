<template>
    <svg  :view-box.camel="viewBox" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>countdown-coin</title>
        <path fill="#faab0c" style="fill: var(--color1, #faab0c)" d="M29.333 16c0 7.364-5.97 13.333-13.333 13.333s-13.333-5.97-13.333-13.333c0-7.364 5.97-13.333 13.333-13.333s13.333 5.97 13.333 13.333z"></path>
        <path fill="none" stroke="#ffee13" stroke-width="2.6667" stroke-miterlimit="4" stroke-linecap="butt" stroke-linejoin="miter" style="stroke: var(--color2, #ffee13)" d="M30.667 16c0 8.1-6.567 14.667-14.667 14.667s-14.667-6.566-14.667-14.667c0-8.1 6.566-14.667 14.667-14.667s14.667 6.566 14.667 14.667z"></path>
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