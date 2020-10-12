<template>
     <div class="form-component-user">
        <h3>{{postData.fullname}}</h3>
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