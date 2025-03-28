import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';
import UserIcon from '../../assets/icons/user-filled.svg';
import { Icon } from '@/shared/ui/Icon';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    fallbackInverted?: boolean;
}

export const Avatar = ({ className, src, size, alt, fallbackInverted }: AvatarProps) => {
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size || 100,
            height: size || 100,
        }),
        [size],
    );

    const fallback = <Skeleton width={size} height={size} border={'50%'} />;
    const errorFallback = (
        <Icon inverted={fallbackInverted} Svg={UserIcon} width={size} height={size} />
    );

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            className={classNames(cls.Avatar, mods, [className])}
            alt={alt}
            style={styles}
        />
    );
};
