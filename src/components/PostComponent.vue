<template>
     <div class="form-component">
        <span>{{postData.title }}</span>
        <p>{{postData.content }}</p>
        
     </div>
</template>

<script>
export default {
    props:{
        postData:{
            type: Object,
            default: function(){
            }
        }
    }
}
</script>