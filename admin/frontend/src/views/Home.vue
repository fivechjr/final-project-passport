<template>
    <div class="text-sm my-10 w-full flex flex-col items-center">
        <input class="select-none" type="file" @change="go" />
        <div class="p-10 border rounded-lg my-10">
            <div id="code" class="flex overflow-scroll">
                <pre>{{ result }}</pre>
            </div>
        </div>
        <button
            class="select-none flex items-center justify-center bg-black px-3 py-2 rounded"
        >
            <span
                class="text-xs font-copy font-medium tracking-widest leading-normal text-white"
                >RUN QUERY</span
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

<style lang="less" scoped>
#code {
    width: 500px;
    height: 500px;
}

button {
    min-width: 150px;
    height: 35px;
}
</style>
