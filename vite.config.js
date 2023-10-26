import { resolve } from "path";
import autoprefixer from 'autoprefixer';

export default {
    root: resolve(__dirname, "src"),
    build: {
        outDir: "../dist",
    },
    css: {
        postcss: {
            plugins: [
                autoprefixer
            ],
        }
    },
};
