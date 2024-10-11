<template>
      <button @click ="onDeleteClick"
              class="inline-flex items-center px-2 py-2 text-sm font-medium text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
               class="w-4 h-4 mr-2">
              <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
          </svg>
          Delete
      </button>
    <ConfirmationDialog :show="showDeleteDialog"
                        message="Are you sure you want to delete selected files?"
                        @cancel="onDeleteCancel"
                        @confirm="onDeleteConfirm">
    </ConfirmationDialog>
</template>
<script setup>

//Imports
import ConfirmationDialog from "@/Components/ConfirmationDialog.vue";
import {ref} from "vue";
import {useForm, usePage} from "@inertiajs/vue3";
import {showErrorDialog, showSuccessNotification} from "@/event-bus.js";


//Uses

const page = usePage();
const deleteFilesForm = useForm({
    all: null,
    ids: [],
    parent_id: null
})

//Refs
const showDeleteDialog = ref(false)


//Props & Emit
const props = defineProps({
    deleteAll: {
        type: Boolean,
        required: false,
        default: false
    },
    deleteIds: {
        type: Array,
        required: false
    }
})

const emit = defineEmits(["delete"])


//Methods
function onDeleteClick() {
    if (!props.deleteAll && !props.deleteIds.length) {
        showErrorDialog('Please select at least one file to delete')
        return
    }
    showDeleteDialog.value = true;
}

function onDeleteCancel() {
    showDeleteDialog.value = false;
}

function onDeleteConfirm() {
    if(page.props.folder?.id){
        deleteFilesForm.parent_id = page.props.folder?.id;
    }
    // deleteFilesForm.parent_id = page.props.folder?.id
    if (props.deleteAll) {
        deleteFilesForm.all = true;
    } else {
        deleteFilesForm.ids = props.deleteIds;
    }
    deleteFilesForm.delete(route("file.delete"),{
        onSuccess: () => {
            showDeleteDialog.value = false;
            emit("delete")
            // Todo show success notification
            showSuccessNotification('Selected files have been deleted.')

        },
    });
    console.log("Delete", props.deleteAll, props.deleteIds);
}
//Hooks
</script>


<style scoped>

</style>
