import { classNames } from 'shared/lib/classNames/classNames';
import React, { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    backgroundColor?: string;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
}

export const Button: FC<ButtonProps> = memo((props) => {
    const {
        className,
        children,
        theme,
        backgroundColor,
        square,
        disabled,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className])}
            style={{ backgroundColor }}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
