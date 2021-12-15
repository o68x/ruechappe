import sveltePreprocess from 'svelte-preprocess';

export default {
    preprocess: sveltePreprocess(),
    vite: {
        build: {
            'sourcemap': false,
        },
    },
    buildOptions: {
        'sourcemap': false,
    }
};
