import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import React, { ReactNode } from 'react';
import { Overlay } from '@/shared/ui/redesigned/Overlay';
import { Portal } from '@/shared/ui/redesigned/Portal';
import cls from './Modal.module.scss';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy } = props;
    const { close, isClosing, isMounted } = useModal({
        animationDelay: 300,
        onClose,
        isOpen,
    });

    const { theme } = useTheme();

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}>
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
