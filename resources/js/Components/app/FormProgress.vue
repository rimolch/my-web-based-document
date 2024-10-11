<template>
 <div v-if="form.progress"
      class="absolute border-gray-900 border right-8 bottom-4 bg-white shadow-lg rounded flex flex-col w-[240px] p-2">
     <div class="text-xs mb-2">Uploading {{form.files.length}} files
     </div>
     <div class="h-3 bg-green-500 rounded-md">
         <div class="h-full active:bg-gray-900 rounded-md transition-all" :style ="{width: form.progress.percentage +'%'}">
         </div>

     </div>
 </div>
</template>


<script setup>


const props = defineProps({
    form: Object
})

</script>


<style scoped>

</style>
