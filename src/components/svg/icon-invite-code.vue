<template>
    <svg :view-box.camel="viewBox" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>icon-invite-code</title>
        <path fill="#cca3ab" style="fill: var(--color1, #cca3ab)" d="M48 22.71v7.29c0 1.105-0.895 2-2 2h-44c-1.105 0-2-0.895-2-2v-7.29c2.892-0.861 5-3.539 5-6.71s-2.108-5.85-5-6.71v-7.29c0-1.105 0.895-2 2-2v0h44c1.105 0 2 0.895 2 2v7.29c-2.892 0.861-5 3.539-5 6.71s2.108 5.85 5 6.71z"></path>
    </svg>
</template>

<script>
    export default {
        data(){
            return{
                viewBox:"0 0 48 32"
            }
        }
    }
</script>