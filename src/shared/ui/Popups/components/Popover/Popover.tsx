import { classNames } from '@/shared/lib/classNames/classNames';
import {
    Popover as HPopover,
    PopoverButton as HPopoverButton,
    PopoverPanel as HPopoverPanel,
} from '@headlessui/react';
import { DropdownDirection } from '@/shared/types/ui';
import { ReactNode } from 'react';
import { mapDirectionClass } from '../../styles/consts';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';

interface PopoverProps {
    className?: string;
    direction?: DropdownDirection;
    trigger: ReactNode;
    children: ReactNode;
}

export function Popover(props: PopoverProps) {
    const { className, trigger, direction = 'bottom right', children } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <HPopover className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
            <HPopoverButton className={popupCls.trigger}>{trigger}</HPopoverButton>

            <HPopoverPanel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </HPopoverPanel>
        </HPopover>
    );
}
