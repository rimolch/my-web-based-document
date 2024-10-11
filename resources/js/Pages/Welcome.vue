<template>
    <Head title="Welcome to Web Based Document Management System"/>
    <div
    class="relative overflow-auto sm:flex sm:justify-center sm:items-center min-h-screen bg-cover bg-center"
    style="background-image: url('/images/cu.jpg');">
        <div v-if="canLogin" class="sm:fixed sm:top-0 sm:text-left-0 p-6 text-end">
            <Link
                v-if="$page.props.auth.user"
                :href="route('dashboard')"
                class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
            >
                Dashboard
            </Link>
            <template v-else>
                <div class="flex justify-center items-center h-screen">
                    <div class="sm:max-w-md mb-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg overflow-auto">
                        <div class="flex justify-center mb-6 mt-2">
                            <Link href="/">
                                <ApplicationLogo class="w-full h-20 fill-current text-gray-500" />
                            </Link>
                        </div>
                        <div class="pb-5 mt-5 text-center font-bold text-gray-600 hover:text-gray-500 dark:text-gray-900 dark:hover:text-gray focus:outline focus:outline-2">
                            Web Based Document Management System For Educational Institution
                        </div>
                        <div class="mt-5 flex justify-center">
                            <Link
                                v-if="canRegister"
                                :href="route('register')"
                                class="ms-4 font-bold text-gray-600 hover:text-green-400 dark:text-gray-900 dark:hover:text-green focus:outline focus:outline-2 focus:rounded-sm focus:outline-green-500"
                            >
                                <PrimaryButton>Sign Up</PrimaryButton>
                            </Link>
                            &nbsp;
                            Already Registered?

                            <Link
                                :href="route('login')"
                                class="font-bold text-gray-900 hover:text-green-400 dark:text-gray-900 dark:hover:text-green focus:outline focus:outline-2 focus:rounded-sm focus:outline-green-500"
                            >
                                &nbsp;
                                <PrimaryButton>Sign In</PrimaryButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
<script setup>
import { Head, Link } from '@inertiajs/vue3';
import GuestLayout from "@/Layouts/GuestLayout.vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});
</script>

<style>
.bg-dots-darker {
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
}
.bg-cover {
    background-size: cover;
}

.bg-center {
    background-position: center;
}
@media (prefers-color-scheme: dark) {
    .dark\:bg-dots-lighter {
        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
    }
}
</style>
