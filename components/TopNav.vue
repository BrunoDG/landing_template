<template>
    <div id="TopNav" class="fixed bg-transparent z-30 flex items-center w-full h-[80px] shadow-sm">
        <div class="px-6 w-full h-[80px] flex items-center justify-between">
            <div class="flex items-center">
                <img :src="theCompany.logo" alt="Company logo" class="w-[60px] h-[60px]" />
                <p class="mx-4 text-4xl">
                    {{ theCompany.name }}
                </p>
            </div>
            <div class="flex items-center mx-2">
                <NuxtLink to="#"
                    class="inline-block px-8 py-4 bg-[#c40000] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#dddede] hover:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                    Contact us
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Company {
    name: string;
    logo: string;
    website: string;
    email: string;
}

const theCompany: Company = {
    name: "Company",
    logo: "/images/logo_transparent.png",
    website: "https://company.com",
    email: "contact@company.com",
};
</script>