<template>
    <nav class="min-w-[200px] pr-5 bg-gray-300 rounded-lg" >
            <Link :href="route('myFiles')" class="h-[80px] px-3 mx-2 flex items-center gap-3 text-gray-1000">
                   <ApplicationLogo
                    class="block h-10 w-auto fill-current text-gray-1000"
                  />
<!--             CU EEE CLOUD--> WBDMS
            </Link>
        <div class="px-3">
            <CreateNewDropdown/>
            <div class ="py-3">
                <NavLink :href="route('myFiles')"            >My Files</NavLink>
                <NavLink :href="route('file.sharedWithMe')"  >Shared With</NavLink>
                <NavLink :href="route('file.sharedByMe')"    >Shared By</NavLink>
                <NavLink :href="route('trash')"              >Trash</NavLink>
            </div>
        </div>
    </nav>
</template>

<script setup>
import {Link} from "@inertiajs/vue3";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import CreateNewDropdown from "@/Components/app/CreateNewDropdown.vue";
import NavLink from "@/Components/NavLink.vue";

</script>

<style scoped>

</style>
