<template>
    <div
        id="Showcase"
        class="py-8 mx-auto md:px-6 background-radius-gradient bg-cover font-montserrat text-white">
        <div class="text-5xl ml-36 mt-20 mb-14">
            Showcase
        </div>
        <div class="flex w-full">
            <div class="w-[5%] px-4 mx-2 my-auto">
            </div>
            <div id="features" class="w-[90%] mx-auto mb-12">
                <ul id="tabs" class="inline-flex px-1 pt-2 w-full border-b border-white">
                    <li v-for="item in exampleCases" :key="item.id" :id="item.id.toString()"
                        class="rounded-t text-center text-sm w-full pb-[0.375rem] my-[9px]">
                        <span class="px-4 py-4 font-semibold"
                            :class="isOpen === item.id ? 'border-b-2 font-montserrat border-[#FF059F]' : ''"
                            @click.prevent="isOpen = item.id">
                            {{ item.tab }}
                        </span>
                    </li>
                </ul>
                <div class="my-4">
                    <template v-for="item in exampleCases" :key="item.id">
                        <div v-show="isOpen === item.id">
                            <h2 class="text-2xl font-semibold text-center lg:text-left w-1/2">
                                {{ item.title }}
                            </h2>
                            <div class="grid gap-8 lg:grid-cols-2 items-center">
                                <div v-show="isOpen === item.id" class="relative">
                                    <div v-for="text in item.summary">
                                        <p class="my-4 text-lg text-center lg:text-left">
                                            {{ text }}
                                        </p>
                                    </div>
                                    <NuxtLink :to="item.link" class="
                                    inline-block 
                                    px-7 
                                    py-3 
                                    mr-2 
                                    bg-[#ff059f] 
                                    text-white 
                                    font-medium 
                                    text-sm 
                                    leading-snug 
                                    rounded 
                                    shadow-md 
                                    hover:bg-gray-300 
                                    hover:shadow-lg 
                                    focus:bg-gray-300 
                                    focus:shadow-lg 
                                    focus:outline-none 
                                    focus:ring-0 
                                    active:bg-gray-400 
                                    active:shadow-lg 
                                    transition 
                                    duration-150 
                                    ease-in-out" 
                                    data-mdb-ripple="true" 
                                    data-mdb-ripple-color="light" 
                                    role="button">
                                        Read more
                                    </NuxtLink>
                                </div>
                                <div class="relative" v-if="isOpen === item.id">
                                    <img class="z-10 h-[400px]" :src="item.image" />
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
            <div class="w-[5%] px-4 mx-2 my-auto">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import exampleCases from '~/data/cases'
let isOpen = ref(1);
</script>
