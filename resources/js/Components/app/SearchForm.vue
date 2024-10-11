<template>
    <div class="w-[400px] h-[90px] bg-gray-300 flex items-center relative">
        <span class="absolute left-3 text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                <path fill="#616161" d="M34.6 28.1H38.6V45.1H34.6z" transform="rotate(-45.001 36.586 36.587)"></path>
                <path fill="#616161" d="M20 4A16 16 0 1 0 20 36A16 16 0 1 0 20 4Z"></path>
                <path fill="#37474F" d="M36.2 32.1H40.2V44.4H36.2z" transform="rotate(-45.001 38.24 38.24)"></path>
                <path fill="#64B5F6" d="M20 7A13 13 0 1 0 20 33A13 13 0 1 0 20 7Z"></path>
                <path fill="#BBDEFB" d="M26.9,14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2,1.2-6.9,3.2c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.4,1.1,0.3,1.4-0.1C16,13.9,17.9,13,20,13s4,0.9,5.4,2.5c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.5-0.1,0.6-0.2C27.2,15.3,27.2,14.6,26.9,14.2z"></path>
            </svg>
        </span>
        <TextInput
            type="text"
            class="block w-full pl-9 bg-gray-200"
            v-model="searchInput"
            @input="onInputChange"
            placeholder="Search for files and folders"
            ref="searchInputRef"
        />
    </div>
</template>

<script setup>
import TextInput from "@/Components/TextInput.vue";
import { router } from "@inertiajs/vue3";
import { ref, onMounted, nextTick } from "vue";
import { emitter, ON_SEARCH } from "@/event-bus.js";
import FileIcon from "@/Components/app/FileIcon.vue";

const searchInput = ref('');
const searchInputRef = ref(null); // Reference for the input

// Debounce function
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Emit search query
const emitSearch = debounce((query) => {
    const params = new URLSearchParams(window.location.search);
    params.set('search', query);
    router.get(window.location.pathname + '?' + params.toString());
    emitter.emit(ON_SEARCH, query);
}, 300);

function onInputChange(event) {
    searchInput.value = event.target.value; // Update the reactive value
    emitSearch(searchInput.value);
}

onMounted(() => {
    const params = new URLSearchParams(window.location.search);
    searchInput.value = params.get('search') || '';
    nextTick(() => {
        searchInputRef.value.focus();
        // searchInputRef.value.setSelectionRange(searchInput.value.length, searchInput.value.length);
    });
});
</script>

<style scoped>
input::placeholder {
    color: #6b7280; /* Change this to the desired gray color */
    opacity:1; /* Ensures the opacity is full */
    font-weight: bold;
}
</style>


<!--<template>-->
<!--    <div class="w-[400px] h-[80px] bg-gray-300 flex items-center relative">-->
<!--        <span class="absolute left-3 text-gray-600">-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">-->
<!--                <path fill="#616161" d="M34.6 28.1H38.6V45.1H34.6z" transform="rotate(-45.001 36.586 36.587)"></path>-->
<!--                <path fill="#616161" d="M20 4A16 16 0 1 0 20 36A16 16 0 1 0 20 4Z"></path>-->
<!--                <path fill="#37474F" d="M36.2 32.1H40.2V44.4H36.2z" transform="rotate(-45.001 38.24 38.24)"></path>-->
<!--                <path fill="#64B5F6" d="M20 7A13 13 0 1 0 20 33A13 13 0 1 0 20 7Z"></path>-->
<!--                <path fill="#BBDEFB" d="M26.9,14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2,1.2-6.9,3.2c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.4,1.1,0.3,1.4-0.1C16,13.9,17.9,13,20,13s4,0.9,5.4,2.5c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.5-0.1,0.6-0.2C27.2,15.3,27.2,14.6,26.9,14.2z"></path>-->
<!--            </svg>-->
<!--        </span>-->
<!--        <TextInput-->
<!--            type="text"-->
<!--            class="block w-full pl-10"-->
<!--            v-model="searchInput"-->
<!--            @input="onInputChange"-->
<!--            placeholder="Search for files and folders"-->
<!--        />-->
<!--    </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import TextInput from "@/Components/TextInput.vue";-->
<!--import { router } from "@inertiajs/vue3";-->
<!--import { ref, onMounted } from "vue";-->
<!--import { emitter, ON_SEARCH } from "@/event-bus.js";-->

<!--const searchInput = ref('');-->

<!--// Debounce function-->
<!--function debounce(func, delay) {-->
<!--    let timeout;-->
<!--    return function (...args) {-->
<!--        clearTimeout(timeout);-->
<!--        timeout = setTimeout(() => {-->
<!--            func.apply(this, args);-->
<!--        }, delay);-->
<!--    };-->
<!--}-->

<!--// Emit search query-->
<!--const emitSearch = debounce((query) => {-->
<!--    const params = new URLSearchParams(window.location.search);-->
<!--    params.set('search', query);-->
<!--    router.get(window.location.pathname + '?' + params.toString());-->
<!--    emitter.emit(ON_SEARCH, query);-->
<!--}, 300);-->

<!--function onInputChange() {-->
<!--    emitSearch(searchInput.value);-->
<!--}-->

<!--// Initialize search value from URL-->
<!--onMounted(() => {-->
<!--    const params = new URLSearchParams(window.location.search);-->
<!--    searchInput.value = params.get('search') || '';-->
<!--});-->
<!--</script>-->

<!--<style scoped>-->
<!--</style>-->


<!--<template>-->
<!--     <div class="w-[400px] h-[80px] bg-gray-300 flex items-center">-->
<!--         <TextInput type="text"-->
<!--                    class="block w-full mr-2"-->
<!--                    v-model="search"-->
<!--                    autocomplete-->
<!--                    @keyup.enter.prevent = "onSearch"-->
<!--                    placeholder="Search for files and folders"/>-->

<!--     </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import TextInput from "@/Components/TextInput.vue";-->

<!--import {router, useForm} from "@inertiajs/vue3";-->
<!--import {onMounted, ref} from "vue";-->
<!--import {emitter, ON_SEARCH} from "@/event-bus.js";-->


<!--let params = ''-->

<!--//Refs-->
<!-- const search =ref('')-->


<!--function onSearch() {-->
<!--    params.set('search', search.value)-->
<!--    router.get(window.location.pathname + '?' + params.toString())-->
<!--    emitter.emit(ON_SEARCH, search.value)-->
<!--}-->

<!--//Hooks-->
<!--onMounted(()=>{-->
<!--    params = new URLSearchParams(window.location.search)-->
<!--    search.value = params.get('search')-->
<!--})-->
<!--</script>-->
<!--<style scoped>-->

<!--</style>-->
