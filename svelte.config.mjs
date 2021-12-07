import sveltePreprocess from 'svelte-preprocess';

export default {
    preprocess: sveltePreprocess(),
    vite: {
        build: {
            'sourcemap': true,
        },
    },
    buildOptions: {
        'sourcemap': true,
    }
};
