import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import React, { ButtonHTMLAttributes, FC, ForwardedRef, forwardRef, memo, ReactNode } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline-red',
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
    fullWidth?: boolean;
}
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Button: FC<ButtonProps> = forwardRef((props, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        backgroundColor,
        square,
        disabled,
        fullWidth,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className])}
            style={{ backgroundColor }}
            disabled={disabled}
            {...otherProps}
            ref={ref}
        >
            {children}
        </button>
    );
});
