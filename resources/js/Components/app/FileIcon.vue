<template>
        <span class="w-6 h-6 inline-flex items-center justify-center mr-2">
<!--            <svg  v-if="file.is_folder" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />-->
<!--           </svg>-->
<!--            <svg v-if="file.is_folder" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">-->
<!--  <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />-->
<!--</svg>-->

            <svg v-if="file.is_folder"
                 viewBox="0 0 1024 1024"
                 class="icon"
                 version="1.1"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="#000000">
                <g id="SVGRepo_bgCarrier"

                   stroke-width="0">

                </g>
                <g id="SVGRepo_tracerCarrier"
                                                           stroke-linecap="round"
                                                           stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M853.333333 256H469.333333l-85.333333-85.333333H170.666667c-46.933333 0-85.333333 38.4-85.333334 85.333333v170.666667h853.333334v-85.333334c0-46.933333-38.4-85.333333-85.333334-85.333333z" fill="#FFA000"></path>
                    <path d="M853.333333 256H170.666667c-46.933333 0-85.333333 38.4-85.333334 85.333333v426.666667c0 46.933333 38.4 85.333333 85.333334 85.333333h682.666666c46.933333 0 85.333333-38.4 85.333334-85.333333V341.333333c0-46.933333-38.4-85.333333-85.333334-85.333333z" fill="#FFCA28">

                    </path></g>
            </svg>

           <template v-else>
               <img class="max-w-full" v-if="isImage(file)" :src="`/images/icons/image.png`">
               <img class="max-w-full" v-else-if="isAudio(file)" :src="`/images/icons/volume.png`">
               <img class="max-w-full" v-else-if="isPDF(file)" :src="`/images/icons/pdf.png`">
               <img class="max-w-full" v-else-if="isVideo(file)" :src="`/images/icons/montage.png`">
               <img class="max-w-full" v-else-if="isWord(file)" :src="`/images/icons/word.png`">
               <img class="max-w-full" v-else-if="isExcel(file)" :src="`/images/icons/excel.png`">
               <img class="max-w-full" v-else-if="isZip(file)" :src="`/images/icons/zip.png`">
               <img class="max-w-full" v-else-if="isText(file)" :src="`/images/icons/txt-file.png`">
               <img class="max-w-full" v-else-if="isPPT(file)" :src="`/images/icons/ppt.png`">
               <img class="max-w-full" v-else :src="`/images/icons/attach-file.png`">
           </template>
        </span>
</template>

<script setup>

//Imports

import {isAudio, isExcel, isImage, isPDF, isPPT, isText, isVideo, isWord, isZip} from "@/Helper/file-helper.js";

//Uses

//Refs

//Props & Emit


const {file} = defineProps({
    file: Object
})

//Computed

//Methods

//Hooks

</script>


<style scoped>

</style>
