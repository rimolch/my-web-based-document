<template>
    <Menu as="div" class="relative block text-left">
        <MenuButton
            class="flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold
                     text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            Select
        </MenuButton>
        <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
        >
            <MenuItems
                class="absolute left-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
            >
                <div class="rounded-lg relative ">
                    <div class="px-1 py-1 hover:bg-blue-200 cursor-pointer">
                        Download
                    </div>
                    <div class="px-1 py-1 hover:bg-blue-200 cursor-pointer">
                        Delete
                    </div>
                </div>
            </MenuItems>
        </transition>
    </Menu>
</template>

<script setup>

import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/vue";

import DownloadFilesButton from "@/Components/app/DownloadFilesButton.vue";
import DeleteFilesButton from "@/Components/app/DeleteFilesButton.vue";


</script>

<style scoped>

</style>
