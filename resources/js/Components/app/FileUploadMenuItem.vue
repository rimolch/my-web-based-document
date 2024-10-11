<template>
    <MenuItem v-slot="{ active }">
        <a href="#"  class ="text-gray-700 block px-4 py-2 text-sm relative">
            Upload Files
            <input @change ="onChange" type="file" class="absolute left-0 sm:top-0 bottom-0 sm:right-0 cursor-pointer opacity-0" multiple>
        </a>
    </MenuItem>
</template>

<script setup>

import {MenuItem} from "@headlessui/vue";
import {emitter, FILE_UPLOAD_STARTED} from "@/event-bus.js";

function onChange(ev){
   // console.log(ev.target.files);
   emitter.emit(FILE_UPLOAD_STARTED, ev.target.files)
}


</script>
<style scoped>

</style>
