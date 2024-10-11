<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>
<style>
.bg-cover {
    background-size: cover;
}

.bg-center {
    background-position: center;
}
</style>
<template>
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 relative w-full overflow-auto sm:flex sm:justify-center px-0 sm:items-center min-h-screen bg-cover bg-center"
         style="background-image: url('/images/cu.jpg');">
        <div
            class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"
        >
            <div class="flex flex-col items-center mb-3">
                <Link href="/" class="flex flex-col items-center">
                    <ApplicationLogo class="w-full h-20 fill-current text-gray-500" />
                    <span class="mt-2">Go To Home</span>
                </Link>
            </div>
            <slot />
        </div>
    </div>
</template>
