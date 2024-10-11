<template>
    <div>
        <h1>File Manager</h1>
        <input type="file" @change="uploadFile" v-if="canUploadFiles" />
        <p v-else>You do not have permission to upload files.</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            canUploadFiles: false,
        };
    },
    mounted() {
        this.checkUploadPermission();
    },
    methods: {
        checkUploadPermission() {
                // Make a request to the server to check the user's permission
            axios.get('/api/permissions')
                .then((response) => {
                    this.canUploadFiles = response.data.can_upload_files;
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        uploadFile(event) {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append('file', file);

            axios.post('/upload', formData)
                .then((response) => {
                    console.log(response.data.message);
                })
                .catch((error) => {
                    console.error(error);
                });
        },
    },
};
</script>
