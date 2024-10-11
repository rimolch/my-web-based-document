
<template>
    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semi bold text-xl text-gray-800 leading-tight">Dashboard</h2>
        </template>
        <div class="py-12"> <!-- Changed to bg-gray-200 -->
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-gray-200 overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900 text-center">You're logged in!</div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
</script>
