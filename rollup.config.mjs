import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser"

const dev = process.env.ROLLUP_WATCH == "true";

export default {
    input:"src/austria-public-transport-card.ts",
    output: {
        file: "dist/austria-public-transport-card.js",
        format:"es",
    },
    plugins:[
        resolve(),
        typescript(),
        !dev && terser(),
    ],
};