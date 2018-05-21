<template>
    <svg  :view-box.camel="viewBox" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>rank</title>
        <path fill="#ffba1a" style="fill: var(--color1, #ffba1a)" d="M2.133 14.933h6.4c1.178 0 2.133 0.955 2.133 2.133v13.867c0 0.589-0.478 1.067-1.067 1.067h-8.533c-0.589 0-1.067-0.478-1.067-1.067v-13.867c0-1.178 0.955-2.133 2.133-2.133v0zM13.867 0h6.4c1.178 0 2.133 0.955 2.133 2.133v28.8c0 0.589-0.478 1.067-1.067 1.067h-8.533c-0.589 0-1.067-0.478-1.067-1.067v-28.8c0-1.178 0.955-2.133 2.133-2.133zM25.6 8.533h6.4c1.178 0 2.133 0.955 2.133 2.133v20.267c0 0.589-0.478 1.067-1.067 1.067h-8.533c-0.589 0-1.067-0.478-1.067-1.067v-20.267c0-1.178 0.955-2.133 2.133-2.133z"></path>
        <path fill="none" stroke="#db9a16" stroke-width="2.1333" stroke-miterlimit="4" stroke-linecap="butt" stroke-linejoin="miter" style="stroke: var(--color2, #db9a16)" d="M2.133 16c-0.589 0-1.067 0.478-1.067 1.067v13.867h8.533v-13.867c0-0.589-0.478-1.067-1.067-1.067h-6.4zM13.867 1.067c-0.589 0-1.067 0.478-1.067 1.067v28.8h8.533v-28.8c0-0.589-0.478-1.067-1.067-1.067h-6.4zM25.6 9.6c-0.589 0-1.067 0.478-1.067 1.067v20.267h8.533v-20.267c0-0.589-0.478-1.067-1.067-1.067h-6.4z"></path>
        <path fill="#db9a16" style="fill: var(--color2, #db9a16)" d="M2.133 17.067h6.4v4.267h-6.4v-4.267z"></path>
        <path fill="#db9a16" style="fill: var(--color2, #db9a16)" d="M13.867 2.133h6.4v4.267h-6.4v-4.267z"></path>
        <path fill="#db9a16" style="fill: var(--color2, #db9a16)" d="M25.6 10.667h6.4v4.267h-6.4v-4.267z"></path>
    </svg>
</template>

<script>
export default {
  data(){
      return{
          viewBox:"0 0 34 32"
      }
  }
}
</script>