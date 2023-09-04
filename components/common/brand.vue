<template>
    <NuxtLink to="/" class="pl-2 flex flex-shrink-0 items-center capitalize">
        <img class="h-8 w-auto pr-2" src="/img/logo.png" alt="Your Company" v-if="logo" />
        <div :class="size" class="-ml-2">
            <span class="text-white pr-1 font-bold">STUDY</span>
            <span class="text-[#3D5B89] font-bold">PATH</span>
        </div>
    </NuxtLink>
</template>

<script>
export default {
    props: {
        logo: {
            type: Boolean,
            required: true
        },
        size: {
            type: String,
            required: false
        }
    }
}
</script>