// https://nuxt.com/docs/api/configuration/nuxt-config

const sassSettings = {
    verbose: false,
    quietDeps: true,
    includePaths: ["./node_modules/bootstrap/scss/"],
};

export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    ...sassSettings,
                },
                sass: {
                    ...sassSettings,
                },
            },
        },
    },
    css: ["~/assets/style/bootstrap_import.scss"],
});
