<template>
    <svg :view-box.camel="viewBox" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>arc</title>
        <path d="M0 0h1440c-236.533 21.2-476.8 32-720 32-243.333 0-483.467-10.8-720-32z"></path>
    </svg>
</template>

<script>
export default {
  data(){
      return{
          viewBox:"0 0 1440 32"
      }
  }
}
</script>
