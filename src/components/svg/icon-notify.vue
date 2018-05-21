<template>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 :view-box.camel="viewBox" style="enable-background:new 0 0 50 36;" xml:space="preserve">
        <title>notify</title>
        <path fill="#FFBA1A" style="fill: var(--color1, #FFBA1A)" d="M45,0H5C2.2,0,0,2.2,0,4.9v26.2C0,33.8,2.2,36,5,36h40c2.8,0,5-2.2,5-4.9V4.9C50,2.2,47.8,0,45,0z"
            />
        <g>
            <path fill="#DB9A16" style="fill: var(--color2, #DB9A16)" d="M45,36H5c-2.8,0-5-2.2-5-4.9V4.9C0,2.2,2.2,0,5,0h40c2.8,0,5,2.2,5,4.9v26.2C50,33.8,47.8,36,45,36z M5,3
                C3.9,3,3,3.9,3,4.9v26.2C3,32.1,3.9,33,5,33h40c1.1,0,2-0.9,2-1.9V4.9C47,3.9,46.1,3,45,3H5z"/>
        </g>
        <polygon fill="#BF8000" style="fill: var(--color2, #BF8000)"  points="25,23 7,10.9 7,6 25,18 43,6 43,10.9 "/>
    </svg>
</template>

<script>
    export default {
        data(){
            return{
                viewBox:"0 0 50 36"
            }
        }
    }
</script>
