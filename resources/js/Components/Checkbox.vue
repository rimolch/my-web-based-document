<script setup>
import {computed} from 'vue';

const emit = defineEmits(['update:checked']);

const props = defineProps({
    checked: {
        type: [Array, Boolean],
        required: true,
    },
    value: {
        default: null,
    },
});

// Computed property to manage checked state
const proxyChecked = computed({
    get() {
        return props.checked;
    },
    set(val) {
        emit('update:checked', val);
    },
});

// Method to handle checkbox change
function handleChange(event) {
    // Prevent the checkbox from toggling on double-click
    event.stopPropagation();
    proxyChecked.value = !proxyChecked.value; // Toggle value on single click
}
</script>

<template>
    <input
        type="checkbox"
        :value="value"
        :checked="proxyChecked"
        @change="handleChange"
        class="rounded-full border-gray-900 text-indigo-900 shadow-lg focus:ring-indigo-800"
    />
</template>
