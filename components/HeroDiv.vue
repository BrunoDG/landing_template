<template>
    <div id="HeroDiv">
        <div class="background-radius-gradient">
            <div class="px-6 py-12 md:px-12 text-center lg:text-left font-spartan">
                <div class="container mx-auto xl:px-28">
                    <h1 class="text-3xl md:text-4xl xl:text-5xl tracking-tight mt-20 text-white font-semibold xl:w-[90%] w-full">
                        {{ company.title }}
                    </h1>
                    <div class="grid lg:grid-cols-2 gap-4Í items-center">
                        <div class="mt-12 lg:mt-0">
                            <div v-for="text in company.paragraphs" class="text-sm md:text-md xl:text-lg">
                                <p class="mb-4">
                                    {{ text }}
                                </p>
                            </div>
                            <div class="text-xs md:text-sm grid grid-cols-2 py-4">
                                <div class="relative px-1">
                                    <ul class="w-full">
                                        <li v-for="item in company.descriptions" class="w-full pb-1">
                                            <div class="flex flex-nowrap">
                                                <div class="relative top-0 left-0">
                                                    <Icon name="ph:diamond-fill" width="12" style="color:#c40000;" />
                                                </div>
                                                <div class="pl-2">
                                                    {{ item }}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="mb-12 lg:mb-0">
                            <img :src="company.img" class="w-full rounded-lg" alt="" />
                        </div>
                    </div>
                    <div class="my-2 text-left justify-start">
                        <h2 class="text-md md:text-lg xl:text-xl mb-6">
                            {{ company.catchphrase }}
                        </h2>
                        <a href="#contact" class="
                            inline-block 
                            px-7 
                            py-3 
                            mr-2 
                            bg-[#c40000] 
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
                            ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" role="button">
                            Get in touch
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    title: String,
    hasVideo: Boolean,
    image: String,
    //video: String,
    //videoTitle: String,
});

const company = {
    title: props.title || '',
    paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu nisl nunc mi ipsum faucibus vitae aliquet nec.',
        'Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. Id consectetur purus ut faucibus pulvinar elementum integer.',
    ],
    descriptions: [],
    catchphrase: '',
    img: props.image || '',
    //videoSrc: props.video || '',
    //videoTitle: props.videoTitle || '',
};
</script>