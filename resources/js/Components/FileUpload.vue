<template>
    <MenuItem v-slot="{ active }">
        <a href="#" class="text-gray-700 block px-4 py-2 text-sm relative">
            Upload Files
            <input @change="onChange" type="file" class="absolute left-0 sm:top-0 bottom-0 sm:right-0 cursor-pointer opacity-0" multiple>
        </a>
    </MenuItem>
<!--    <div>-->
<!--        <h1>Welcome, {{ props.auth.user.name }}!</h1>-->
<!--        <p v-if="isEmailMatch">-->
<!--            Your email address ({{ currentUserEmail }}) matches the given email.-->
<!--        </p>-->
<!--        <p v-else>-->
<!--            Your email address ({{ currentUserEmail }}) does not match the given email.-->
<!--        </p>-->
<!--    </div>-->
</template>

<script setup>
import { usePage } from '@inertiajs/vue3';
import {emitter, FILE_UPLOAD_STARTED, showErrorDialog} from "@/event-bus.js";
import {MenuItem} from "@headlessui/vue";

const { props } = usePage();
const currentUserEmail = props.auth.user.email;

 function  onChange(ev){
        if(currentUserEmail === 'rimolcu.ac.24@gmail.com'){
            emitter.emit(FILE_UPLOAD_STARTED, ev.target.files);
        }else{
            showErrorDialog('You are not allowed to upload the file');
        }
 }
</script>
