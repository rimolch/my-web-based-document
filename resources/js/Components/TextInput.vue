<template>
    <input
        type="text"
        class="border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-md shadow-sm"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        ref="input"
    />
</template>

<script setup>
import { onMounted, ref, defineProps, defineEmits, defineExpose } from 'vue';

const props = defineProps({
    modelValue: {
        type: String,
        required: true,
    },
});

const emit = defineEmits(['update:modelValue']);
const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<style scoped>
</style>

<!--<template>-->
<!--    <input-->
<!--        type="text"-->
<!--        class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"-->
<!--        :value="modelValue"-->
<!--        @input="$emit('update:modelValue', $event.target.value)"-->
<!--        ref="input"-->
<!--    />-->
<!--</template>-->

<!--<script setup>-->
<!--import { onMounted, ref } from 'vue';-->

<!--defineProps({-->
<!--    modelValue: {-->
<!--        type: String,-->
<!--        required: true,-->
<!--    },-->
<!--});-->

<!--defineEmits(['update:modelValue']);-->

<!--const input = ref(null);-->

<!--onMounted(() => {-->
<!--    if (input.value.hasAttribute('autofocus')) {-->
<!--        input.value.focus();-->
<!--    }-->
<!--});-->

<!--defineExpose({ focus: () => input.value.focus() });-->
<!--</script>-->


