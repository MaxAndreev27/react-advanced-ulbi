declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
    import { FC, SVGProps } from "react";
    const SVG: FC<SVGProps<SVGElement>>;
    export default SVG;

    // import React from 'react';
    // const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    // export default SVG;
}