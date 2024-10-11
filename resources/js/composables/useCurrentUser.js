import { ref, computed } from 'vue';

export function useCurrentUser() {
    const currentUser = ref({
        email: '',
        role: '',
    });
    const canUploadFiles = computed(() => {
        return currentUser.value.role === 'user';
    });
    // Fetch the current user's data from the application's state or session
    function fetchCurrentUser() {
        // Replace this with your actual logic to fetch the current user's data
        currentUser.value = {
            email: 'rimolcu.ac.24@gmail.com',
            role:'user',
            // Add any other relevant user properties
        };
    }
    fetchCurrentUser();
    return {
        currentUser: computed(() => currentUser.value),
        canUploadFiles,
    };
}
