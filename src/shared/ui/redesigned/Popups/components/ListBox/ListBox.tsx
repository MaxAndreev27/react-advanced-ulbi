import { Fragment, ReactNode, useMemo } from 'react';
import {
    Listbox as HListBox,
    ListboxButton as HListBoxButton,
    ListboxOption as HListboxOption,
    ListboxOptions as HListboxOptions,
} from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Button } from '@/shared/ui/redesigned/Button';
import cls from './ListBox.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';

export interface ListBoxItem<T extends string> {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps<T extends string> {
    items?: ListBoxItem<T>[];
    className?: string;
    value?: T;
    defaultValue?: string;
    onChange: (value: T) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom right',
        label,
    } = props;

    const optionsClasses = [mapDirectionClass[direction], popupCls.menu];

    const selectedItem = useMemo(() => {
        return items?.find((item) => item.value === value);
    }, [items, value]);

    return (
        <HStack gap="4">
            {label && <span>{`${label}`}</span>}
            <HListBox
                disabled={readonly}
                as="div"
                className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
                value={value}
                onChange={onChange}
            >
                <HListBoxButton
                    as={Button}
                    variant="filled"
                    disabled={readonly}
                    addonRight={<Icon Svg={ArrowIcon} />}
                >
                    {selectedItem?.content ?? defaultValue}
                </HListBoxButton>
                <HListboxOptions className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListboxOption
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [popupCls.active]: active,
                                        [popupCls.disabled]: item.disabled,
                                        [popupCls.selected]: selected,
                                    })}
                                >
                                    {selected}
                                    {item.content}
                                </li>
                            )}
                        </HListboxOption>
                    ))}
                </HListboxOptions>
            </HListBox>
        </HStack>
    );
}
