<template>
    <svg :view-box.camel="viewBox" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>task-complete</title>
        <path fill="#f9d617" style="fill: var(--color1, #f9d617)" d="M18.426 3.004c-1.949-1.868-4.578-3.004-7.492-3.004-6.091 0-10.933 4.96-10.933 11.2 0 8.32 10.933 20.8 10.933 20.8s10.933-12.48 10.933-20.8c0-2.212-0.608-4.263-1.665-5.989l-10.074 12.446-7.223-7.179 1.826-1.857 4.632 3.35 9.065-8.967z"></path>
    </svg>
</template>

<script>
    export default {
        data(){
            return{
                viewBox:"0 0 22 32"
            }
        }
    }
</script>