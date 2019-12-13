<template>
    <div>
        <input type="file" @change="go" />
        <div>
            <pre>{{ result }}</pre>
        </div>
        <button class="bg-black px-3 py-2 rounded">
            <span
                class="text-xs font-copy font-medium tracking-widest leading-normal text-white"
                >GO</span
            >
        </button>
    </div>
</template>

<script>
import csv from 'csvtojson';
export default {
    data: function() {
        return {
            result: {},
        };
    },
    methods: {
        async go($event) {
            const file = $event.target.files[0];
            const reader = new FileReader();
            reader.onload = async e => {
                this.result = await csv().fromString(e.target.result);
            };
            reader.readAsText(file);
        },
    },
};
</script>
