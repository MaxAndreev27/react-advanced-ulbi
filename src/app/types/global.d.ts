declare module '*.scss' {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
    import { FC, SVGProps } from 'react';

    const SVG: FC<SVGProps<SVGElement>>;
    export default SVG;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;
