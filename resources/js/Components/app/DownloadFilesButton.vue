<template>
    <button @click ="download"
                   class="inline-flex items-center px-2 py-2 text-sm font-medium text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mr-2">
            <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
            <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
        </svg>
        &nbsp;
        Download
    </button>
</template>
<script setup>

//Imports
import {usePage} from "@inertiajs/vue3";
import {httpGet} from "@/Helper/http-helper.js";
import {showErrorDialog} from "@/event-bus.js";


//Uses

const page = usePage();

//Refs



//Props & Emit
const props = defineProps({
    all: {
        type: Boolean,
        required: false,
        default: false
    },
    ids: {
        type: Array,
        required: false
    },
    sharedWithMe: false,
    sharedByMe: false,
})



//Methods
function download() {
    if (!props.all && props.ids.length === 0) {
        showErrorDialog('Please select at least one file to download')
        return;
    }
    const p = new URLSearchParams();

    if(page.props.folder?.id) {
        p.append('parent_id', page.props.folder?.id)
    }
    if (props.all) {
        p.append('all', props.all ? 1 : 0);
    } else {
        for (let id of props.ids) {
            p.append('ids[]', id)
        }
    }
    let url = route('file.download');
    if(props.sharedWithMe) {
        url =route('file.downloadSharedWithMe')
    } else if(props.sharedByMe){
        url = route('file.downloadSharedByMe')
    }
    httpGet(url + '?'+p.toString())
        .then(res => {
            console.log(res);
            if (!res.url) return;

            const a = document.createElement('a');
            a.download = res.filename;
            a.href = res.url;
            a.click();
        })
}

//Hooks
</script>


<style scoped>

</style>
