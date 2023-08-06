<template>
   <component :is="icon" class="fill-current" />
 </template>
 
 <script>
 import { defineAsyncComponent } from "vue";
 export default {
   name: "Icon",
   props: {
     name: {
       type: String,
       required: true
     }
   },
   setup(props) {
     const icon = defineAsyncComponent(() => import(`../../../assets/icons/${props.name}.svg?component`))
 
     return { icon }
   }
 };
 </script>
 