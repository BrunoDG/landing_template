<template>
    <div id="DownloadFile" class="py-20 mx-auto md:px-6 background-radius-gradient">
        <div class="grid lg:grid-cols-2 gap-12 items-center ">
            <div data-aos="fade-right" data-aos-duration="500" class="mx-32 text-white">
                <div class="text-md md:text-lg xl:text-xl pb-12">
                    Download the file!
                </div>
                <div class="text-2xl md:text-3xl xl:text-4xl">
                    Fill your email and
                </div>
                <div class="text-3xl md:text-4xl font-bold xl:text-5xl pb-12">
                    download our pdf!
                </div>
                <div class="grow-0 shrink-0 basis-auto w-full">
                    <VForm @submit="validateAndDownload">
                        <div class="relative py-4">
                            <VField name="email" :rules="isRequired"
                                class="peer placeholder-transparent bg-transparent h-12 mb-4 w-full border-b-2 border-gray-300 text-white focus:outline-none focus:borer-rose-600"
                                placeholder=" please type your email" />
                            <label for="email"
                                class="absolute left-0 -top-3.5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                Enter your e-mail *
                            </label>
                            <VErrorMessage name="email" class="font-bold text-black" data-aos="fade-left"/>
                        </div>
                        <button type="submit"
                            class="inline-block px-7 py-3 bg-[#c40000] text-white font-medium rounded-md transition duration-150 ease-in-out mb-2 md:mr-2">Download</button>
                    </VForm>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="500" class="mb-12 lg:mb-0">
                <img src="/images/download_file.jpg" class="w-full h-full" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">


const isRequired = (value: string) => {
    if (value && value.trim()) {
        return true;
    }

    return "Field is required";
}

const validateAndDownload = (value: string) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!regex.test(value)) {
        return 'This field must be a valid email';
    } else {
        const link = document.createElement('a')
        link.href = 'files/thanks.pdf'
        link.download = 'thanks.pdf'
        link.target = '_blank'
        link.click()
        return true;
    }
}

</script>
