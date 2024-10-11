<template>
    <AuthenticatedLayout>
        <nav class="flex items-center justify-between p-1 mb-3">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
                <li v-for="ans of ancestors.data" :key="ans.id" class="inline-flex items-center">
                    <Link v-if="!ans.parent_id" :href="route('myFiles')"
                          class="inline-flex items-center text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-600 dark:hover:text-blue">
                        <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                        </svg>
                        My Files
                    </Link>
                    <div v-else class="flex items-center">
                        <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <Link :href="route('myFiles', { folder: ans.path })"
                              class="ml-1 text-sm font-medium text-gray-800 hover:text-blue-600 md:ml-4 dark:text-gray-600 dark:hover:text-blue">
                            {{ ans.name }}
                        </Link>
                    </div>
                </li>
            </ol>
            <div>
                <ShareFilesButton :all-selected="allSelected" :selected-ids="selectedIds" />
                <DownloadFilesButton :all="allSelected" :ids="selectedIds" class="mr-2" />
                <DeleteFilesButton :delete-all="allSelected" :delete-ids="selectedIds" @delete="onDelete" />
            </div>
        </nav>
        <div class="flex-2 overflow-auto">
            <table class="min-w-full">
                <thead class="bg-gray-50 border-gray-500">
                <tr class="bg-gray-200">
                    <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left w-[30px] mx-w-[30px] pr-0">
                        <Checkbox @change="onSelectAllChange" v-model:checked="allSelected" />
                    </th>
                    <th class="text-sm font-medium text-gray-1000 px-6 py-4 text-left">Name</th>
                    <th class="text-sm font-medium text-gray-1000 px-6 py-4 text-left">File</th>
                    <th class="text-sm font-medium text-gray-1000 px-6 py-4 text-left">Size</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="file in sortedFiles" :key="file.id"
                    @click="$event => toggleFileSelect(file)"
                    @dblclick="openFolder(file)"
                    class="border-b transition duration-300 ease-in-out hover:bg-green-100 cursor-pointer bg-gray-300"
                    :class="(selected[file.id] || allSelected) ? 'bg-blue-100' : 'bg-gray'">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-[30px] mx-w-[30px] pr-0">
                        <Checkbox @change="$event => onSelectCheckboxChange(file)" v-model="selected[file.id]" :checked="selected[file.id] || allSelected" />
                    </td>
                    <td class="text-gray-900 px-6 py-5 whitespace-nowrap text-sm font-medium inline-flex items-center justify-center">{{ file.name }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <FileIcon :file="file" />
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ file.size }}</td>
                </tr>
                </tbody>
            </table>
            <div v-if="!filteredFiles.length" class="py-8 text-center text-lg text-gray-700">
                There is no file in this folder
            </div>
            <div ref="loadMoreIntersect"></div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
// Imports
import { Link, router } from '@inertiajs/vue3';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import FileIcon from "@/Components/app/FileIcon.vue";
import { computed, onMounted, onUpdated, ref } from "vue";
import { httpGet } from "@/Helper/http-helper.js";
import Checkbox from "@/Components/Checkbox.vue";
import DeleteFilesButton from "@/Components/app/DeleteFilesButton.vue";
import DownloadFilesButton from "@/Components/app/DownloadFilesButton.vue";
import ShareFilesButton from "@/Components/app/ShareFilesButton.vue";
import {emitter, ON_SEARCH} from "@/event-bus.js";

// Refs
const allSelected = ref(false);
const selected = ref({});
const loadMoreIntersect = ref(null);

// Props & Emit
const props = defineProps({
    files: Object,
    folder: Object,
    ancestors: Object
});

const allFiles = ref({
    data: props.files.data,
    next: props.files.links.next
});

const searchQuery = ref('');
const filteredFiles = computed(() => {
    if (!searchQuery.value) {
        return allFiles.value.data;
    }
    return allFiles.value.data.filter(file =>
        file.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});
// Computed for selected IDs
const selectedIds = computed(() => Object.entries(selected.value).filter(a => a[1]).map(a => a[0]));

// Computed for sorted files
const sortedFiles = computed(() => {
    return [...allFiles.value.data].sort((a, b) => a.name.localeCompare(b.name));
});

// onMounted(() => {
//     emitter.on(ON_SEARCH, (query) => {
//         searchQuery.value = query;
//     });
// });
// Methods
function openFolder(file) {
    if (!file.is_folder) {
        return;
    }
    router.visit(route('myFiles', { folder: file.path }));
}

function loadMore() {
    if (allFiles.value.next === null) {
        return;
    }
    httpGet(allFiles.value.next)
        .then(res => {
            allFiles.value.data = [...allFiles.value.data, ...res.data];
            allFiles.value.next = res.links.next;
        });
}

function onSelectAllChange() {
    allFiles.value.data.forEach(f => {
        selected.value[f.id] = allSelected.value;
    });
}

function toggleFileSelect(file) {
    selected.value[file.id] = !selected.value[file.id];
    onSelectCheckboxChange(file);
}

function onSelectCheckboxChange(file) {
    if (!selected.value[file.id]) {
        allSelected.value = false;
    } else {
        let checked = true;
        for (let file of allFiles.value.data) {
            if (!selected.value[file.id]) {
                checked = false;
                break;
            }
        }
        allSelected.value = checked;
    }
}

function onDelete() {
    allSelected.value = false;
    selected.value = {};
}

// Hooks
onUpdated(() => {
    allFiles.value = {
        data: props.files.data,
        next: props.files.links.next
    };
});
// Infinite scroll observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => entry.isIntersecting && loadMore());
}, {
    rootMargin: '-250px 0px 0px 0px'
});
onMounted(() => {
    emitter.on(ON_SEARCH, (query) => {
        searchQuery.value = query;
    });
    // const observer = new IntersectionObserver((entries) => entries.forEach(entry => entry.isIntersecting && loadMore()), {
    //     rootMargin: '-250px 0px 0px 0px'
    // });
    observer.observe(loadMoreIntersect.value);
});
</script>

<style scoped>
</style>
<!--<template>-->
<!--    <AuthenticatedLayout>-->
<!--        <nav class="flex items-center justify-between p-1 mb-3">-->
<!--                 <ol class="inline-flex items-center space-x-1 md:space-x-3">-->
<!--                     <li v-for="ans of ancestors.data" :key="ans.id" class="inline-flex items-center">-->
<!--                         <Link v-if="!ans.parent_id" :href="route('myFiles')"-->
<!--                               class="inline-flex items-center text-sm font-medium text-gray-600 hover:text-blue-600-->
<!--                               dark:text-gray-600 dark:hover:text-blue">-->
<!--                             <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"-->
<!--                              xmlns="http://www.w3.org/2000/svg">-->
<!--                                 <path-->
<!--                                     d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001-->
<!--                                       1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l-->
<!--                                       .293.293a1 1 0 001.414-1.414l-7-7z">-->
<!--                                 </path>-->
<!--                             </svg>-->
<!--                             My Files-->
<!--                         </Link>-->
<!--                         <div v-else class="flex items-center">-->
<!--                             <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill ="currentColor" viewBox="0 0 20-->
<!--                             20" xmlns ="http://www.w3.org/2000/svg">-->
<!--                                 <path fill-rule = "evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1-->
<!--                                       1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule ="evenodd">-->
<!--                                 </path>-->
<!--                             </svg>-->
<!--                             <Link :href="route('myFiles',{folder: ans.path})"-->
<!--                                   class="ml-1 text-sm font-medium text-gray-800 hover:text-blue-600 md:ml-4 dark:text-gray-600 dark:hover:text-blue">-->
<!--                                 {{ans.name}}-->
<!--                             </Link>-->

<!--                         </div>-->
<!--                     </li>-->
<!--                 </ol>-->
<!--           <div>-->
<!--               <ShareFilesButton :all-selected="allSelected" :selected-ids="selectedIds" />-->
<!--               <DownloadFilesButton :all="allSelected" :ids="selectedIds" class="mr-2"/>-->
<!--               <DeleteFilesButton :delete-all="allSelected" :delete-ids="selectedIds" @delete="onDelete"/>-->
<!--           </div>-->
<!--        </nav>-->
<!--        <div class="flex-2 overflow-auto">-->
<!--            <table class="min-w-full">-->
<!--                <thead class ="bg-gray-50 border-gray-500">-->
<!--                <tr class="bg-gray-200">-->
<!--                    <th class ="text-sm font-medium text-gray-900 px-6 py-4 text-left w-[30px] mx-w-[30px] pr-0">-->
<!--                        <Checkbox @change="onSelectAllChange" v-model:checked="allSelected"/>-->
<!--                    </th>-->
<!--                    <th class ="text-sm font-medium text-gray-1000 px-6 py-4 text-left">-->
<!--                        Name-->
<!--                    </th>-->
<!--&lt;!&ndash;                    <th class ="text-sm font-medium text-gray-400-900 px-6 py-4 text-left">&ndash;&gt;-->
<!--&lt;!&ndash;                        Owner&ndash;&gt;-->
<!--&lt;!&ndash;                    </th>&ndash;&gt;-->
<!--&lt;!&ndash;                    <th class ="text-sm font-medium text-gray-900 px-6 py-4 text-left">&ndash;&gt;-->
<!--&lt;!&ndash;                        Uploaded Time&ndash;&gt;-->
<!--&lt;!&ndash;                    </th>&ndash;&gt;-->
<!--                    <th class ="text-sm font-medium text-gray-1000 px-6 py-4 text-left">-->
<!--                        File-->
<!--                    </th>-->
<!--                    <th class ="text-sm font-medium text-gray-1000 px-6 py-4 text-left">-->
<!--                        Size-->
<!--                    </th>-->

<!--                </tr>-->
<!--                </thead>-->
<!--                <tbody>-->
<!--                <tr v-for = "file of allFiles.data" :key="file.id"-->
<!--                    @click = "$event => toggleFileSelect(file)"-->
<!--                    @dblclick ="openFolder(file)"-->
<!--                    class="border-b transition duration-300 ease-in-out-->
<!--                        hover:bg-green-100 cursor-pointer bg-gray-300"-->
<!--                        :class="(selected[file.id] || allSelected) ? 'bg-blue-100' : 'bg-gray'">-->
<!--                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium-->
<!--                 text-gray-900 w-[30px] mx-w-[30px] pr-0">-->
<!--                        <Checkbox @change = "$event => onSelectCheckboxChange(file)" v-model="selected[file.id]" :checked="selected[file.id] || allSelected" />-->
<!--                    </td>-->
<!--                    <td class="text-gray-900 px-6 py-5 whitespace-nowrap top-0 left-0 position-absolute width-50px text-sm font-medium inline-flex items-center justify-center">-->

<!--&lt;!&ndash;                        <FileIcon :file="file"/>&ndash;&gt;-->

<!--                        {{file.name}}-->

<!--                    </td>-->
<!--&lt;!&ndash;                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium&ndash;&gt;-->
<!--&lt;!&ndash;                 text-gray-900 ">&ndash;&gt;-->
<!--&lt;!&ndash;                        {{ file.owner}}&ndash;&gt;-->
<!--&lt;!&ndash;                    </td>&ndash;&gt;-->
<!--&lt;!&ndash;                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium&ndash;&gt;-->
<!--&lt;!&ndash;                 text-gray-900">&ndash;&gt;-->
<!--&lt;!&ndash;                        {{file.updated_at}}&ndash;&gt;-->
<!--&lt;!&ndash;                    </td>&ndash;&gt;-->
<!--                    <td class=" px-6 py-4 whitespace-nowrap text-sm font-medium-->
<!--                 text-gray-900">-->
<!--                        <FileIcon :file="file"/>-->
<!--                    </td>-->
<!--                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium-->
<!--                 text-gray-900">-->
<!--                        {{file.size}}-->
<!--                    </td>-->
<!--                </tr>-->
<!--                </tbody>-->
<!--            </table>-->
<!--          <div v-if="!allFiles.data.length" class="py-8 text-center text-lg text-gray-700 ">-->
<!--              There is no file in this folder-->
<!--          </div>-->
<!--            <div ref="loadMoreIntersect"></div>-->
<!--        </div>-->
<!--    </AuthenticatedLayout>-->
<!--</template>-->

<!--<script setup>-->

<!--//Imports-->
<!--import {Link, router} from '@inertiajs/vue3'-->
<!--import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";-->
<!--import FileIcon from "@/Components/app/FileIcon.vue";-->
<!--import {computed, onMounted, onUpdated, ref} from "vue";-->
<!--import {httpGet} from "@/Helper/http-helper.js";-->
<!--import Checkbox from "@/Components/Checkbox.vue";-->
<!--import DeleteFilesButton from "@/Components/app/DeleteFilesButton.vue";-->
<!--import DownloadFilesButton from "@/Components/app/DownloadFilesButton.vue";-->
<!--import ShareFilesButton from "@/Components/app/ShareFilesButton.vue";-->
<!--import FileUpload from "@/Components/FileUpload.vue";-->




<!--//Uses-->


<!--//Refs-->
<!--const allSelected = ref(false);-->
<!--const selected = ref({});-->
<!--const loadMoreIntersect =ref(null)-->

<!--//Props & Emit-->
<!--const props = defineProps({-->
<!--    files: Object,-->
<!--    folder: Object,-->
<!--    ancestors: Object-->
<!--})-->

<!--const allFiles = ref({-->
<!--    data: props.files.data,-->
<!--    next: props.files.links.next-->
<!--})-->

<!--//Computed-->
<!--const selectedIds = computed (()=> Object.entries(selected.value).filter(a => a[1]).map(a => a[0]))-->

<!--//Methods-->
<!-- function openFolder (file){-->
<!--     if (!file.is_folder){-->
<!--         return;-->
<!--     }-->
<!--     router.visit(route('myFiles', {folder: file.path}))-->
<!-- }-->

<!--function loadMore() {-->
<!--    console.log("load more");-->
<!--    console.log(allFiles.value.next);-->

<!--    if (allFiles.value.next === null){-->
<!--        return-->
<!--    }-->
<!--    httpGet(allFiles.value.next)-->
<!--        .then(res=> {-->
<!--             allFiles.value.data =[...allFiles.value.data, ...res.data]-->
<!--            allFiles.value.next = res.links.next-->
<!--        })-->
<!--}-->

<!--function onSelectAllChange() {-->
<!--    allFiles.value.data.forEach(f => {-->
<!--        selected.value[f.id] = allSelected.value-->
<!--    })-->
<!--}-->


<!--function toggleFileSelect(file) {-->
<!--        selected.value[file.id] = !selected.value[file.id]-->
<!--        onSelectCheckboxChange(file)-->
<!--}-->

<!--function onSelectCheckboxChange(file) {-->
<!--      if (!selected.value[file.id]){-->
<!--          allSelected.value = false;-->
<!--      } else {-->
<!--           let checked = true;-->

<!--           for (let file of allFiles.value.data) {-->
<!--               if (!selected.value[file.id]) {-->
<!--                   checked = false;-->
<!--                   break;-->
<!--               }-->
<!--           }-->
<!--           allSelected.value = checked-->
<!--      }-->
<!--}-->

<!--function onDelete() {-->
<!--    allSelected.value = false-->
<!--    selected.value = {}-->
<!--}-->

<!--//Hooks-->
<!--onUpdated(()=>{-->
<!--    allFiles.value = {-->
<!--        data: props.files.data,-->
<!--        next: props.files.links.next-->
<!--    }-->
<!--})-->

<!-- onMounted(() => {-->
<!--     const observer = new IntersectionObserver((entries) => entries.forEach(entry => entry.isIntersecting && loadMore()),{-->
<!--         rootMargin: '-250px 0px 0px 0px'-->
<!--     })-->
<!--     observer.observe(loadMoreIntersect.value)-->
<!-- })-->


<!--</script>-->

<!--<style scoped>-->

<!--</style>-->

