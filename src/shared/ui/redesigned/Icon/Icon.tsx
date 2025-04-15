import React, { FC, memo, SVGProps } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconBaseProps extends SVGProps<SVGElement> {
    className?: string;
    Svg: FC<SVGProps<SVGElement>>;
    'data-testid'?: string;
}

interface NonClickableIconProps extends IconBaseProps {
    clickable?: false;
}

interface ClickableBaseProps extends IconBaseProps {
    clickable: true;
    onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableBaseProps;

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        width = 32,
        height = 32,
        clickable,
        'data-testid': dataTestId,
        ...otherProps
    } = props;
    console.log(`dataTestId: ${JSON.stringify(dataTestId)}`);

    const icon = (
        <Svg
            className={classNames(cls.Icon, {}, [className])}
            width={width}
            height={height}
            {...otherProps}
            onClick={undefined}
        />
    );

    if (clickable) {
        return (
            <button
                type="button"
                className={cls.button}
                onClick={props.onClick}
                style={{ height, width }}
                data-testid={dataTestId}
            >
                {icon}
            </button>
        );
    }

    return icon;
});
