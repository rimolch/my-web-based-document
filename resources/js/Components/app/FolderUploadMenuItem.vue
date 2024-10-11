<template>
    <MenuItem v-slot="{ active }">
        <a href="#" class ="text-gray-700 block px-4 py-2 text-sm relative">
            Upload Folder
            <input @change ="onChange" type="file" class="absolute left-0 sm:top-0 bottom-0 sm:right-0 cursor-pointer opacity-0" multiple directory webkitdirectory>
        </a>
    </MenuItem>
</template>

<script setup>

import {MenuItem} from "@headlessui/vue";
import {emitter, FILE_UPLOAD_STARTED, showErrorDialog} from "@/event-bus.js";
import {usePage} from "@inertiajs/vue3";

const { props } = usePage();
const currentUserEmail = props.auth.user.email;

function onChange(ev){
    if(currentUserEmail === 'rimolcu.ac.24@gmail.com'){
        emitter.emit(FILE_UPLOAD_STARTED, ev.target.files);
    }else{
        showErrorDialog('You are not allowed to upload the folder');
    }
}

</script>


<style scoped>

</style>
