import { Icon } from '../.nuxt/components';
<template>
    <div id="ContactUs" class="py-32 mx-auto md:px-6 background-radius-gradient">
        <div class="text-white">
            <div class="flex flex-wrap">
                <div class="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                    <div>
                        <h2 class="text-3xl my-20">Partner with Us</h2>
                    </div>
                    <div>
                        <div class="grid grid-cols-3 w-[50%]">
                            <div class="text-lg w-full h-full">
                                Follow Us
                            </div>
                            <div class="grid grid-cols-2 w-full relative -top-2">
                                <div
                                    class="bg-transparent hover:bg-blue-500 rounded-full w-12 h-12 duration-500 text-center py-[6px]">
                                    <NuxtLink id="linkedin" to="https://www.linkedin.com/in/brunodg89" target="_blank"
                                        class="text-white text-2xl">
                                        <Icon name="fa6-brands:linkedin" />
                                    </NuxtLink>
                                </div>
                                <div
                                    class="bg-transparent hover:bg-gradient-to-b hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 w-12 h-12 rounded-full duration-500 text-center py-[6px]">
                                    <NuxtLink id="instagram" to="https://www.instagram.com/brunodg/" target="_blank"
                                        class="text-2xl text-white">
                                        <Icon name="fa6-brands:instagram" />
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div class="grow-0 shrink-0 basis-auto md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                    <VForm @submit="onSubmit">
                        <div class="relative">
                            <VField autocomplete="off" id="name" name="name" type="text"
                                class="peer placeholder-transparent bg-transparent h-12 mb-4 w-full border-b-2 border-gray-300 text-white focus:outline-none focus:borer-rose-600"
                                placeholder="Name" />
                            <label for="name"
                                class="absolute left-0 -top-3.5 text-white text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
                        </div>
                        <div class="relative">
                            <VField autocomplete="off" id="companyName" name="companyName" type="text"
                                class="peer placeholder-transparent bg-transparent h-12 mb-4 w-full border-b-2 border-gray-300 text-white focus:outline-none focus:borer-rose-600"
                                placeholder="Company Name" />
                            <label for="companyName"
                                class="absolute left-0 -top-3.5 text-white text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Company
                                Name</label>
                        </div>
                        <div class="relative">
                            <VField autocomplete="off" id="email" name="email" type="text"
                                class="peer placeholder-transparent bg-transparent h-12 mb-4 w-full border-b-2 border-gray-300 text-white focus:outline-none focus:borer-rose-600"
                                placeholder="Email address" />
                            <label for="email"
                                class="absolute left-0 -top-3.5 text-white text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email
                                Address</label>
                            <VErrorMessage name="email" class="font-bold text-black" data-aos="fade-left"/>
                        </div>
                        <div class="relative">
                            <VField autocomplete="off" id="phone" name="phone" type="text"
                                class="peer placeholder-transparent bg-transparent h-12 mb-4 w-full border-b-2 border-gray-300 text-white focus:outline-none focus:borer-rose-600"
                                placeholder="Password" />
                            <label for="phone"
                                class="absolute left-0 -top-3.5 text-white text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Phone</label>
                        </div>
                        <div class="relative mb-12" data-te-input-wrapper-init>
                            <textarea
                                class="peer placeholder-transparent bg-transparent h-[100px] w-full border-b-2 border-gray-300 text-white focus:outline-none focus:borer-rose-600"
                                id="textArea" rows="3" placeholder="Your Message" />
                            <label for="textArea"
                                class="absolute left-0 -top-3.5 text-white text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Your
                                Message</label>
                        </div>
                        <button 
                            type="submit"
                            class="inline-block relative left-[80%] px-7 py-3 bg-[#C40000] text-white font-medium rounded-md transition duration-150 ease-in-out mb-2 md:mr-2">Submit</button>
                    </VForm>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    linkedin: String,
    instagram: String,
    email: String,
});

const onSubmit = (values: any) => {
    console.table(JSON.stringify(values, null, 2));
};

const validateEmail = (value: string) => {
    if (!value) {
        return "This field is required";
    }

    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regex.test(value)) {
        return "This field must have a valid email";
    }

    return true;
}

</script>