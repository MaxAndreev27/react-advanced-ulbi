import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    // for svgr 3.3.0 version
    plugins: [react(), svgr({ exportAsDefault: true })],

    // for svgr 4.0.0+ version, but 4+ version not working!!!
    // plugins: [
    //     react(),
    //     svgr({
    //         // svgr options: https://react-svgr.com/docs/options/
    //         svgrOptions: { exportType: 'default', ref: true, svgo: false, titleProp: true },
    //         include: '**/*.svg',
    //     }),
    // ],
    resolve: {
        alias: [{ find: '@', replacement: '/src' }],
    },
    define: {
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://localhost:8000'),
        __PROJECT__: JSON.stringify('frontend'),
    },
});
