'use client'

import { Languages, Check, ChevronDown } from 'lucide-react'
import * as Select from '@radix-ui/react-select'
import clsx from 'clsx'
import { useTransition } from 'react'
import { Locale } from '@/lib/i18n/config'
import { setUserLocale } from 'src/lib/i18n/oper'

type Props = {
    defaultValue: string
    items: Array<{ value: string; label: string }>
    label: string
}

export default function LocaleSwitcherSelect({ defaultValue, items, label }: Props) {
    const [isPending, startTransition] = useTransition()

    function onChange(value: string) {
        const locale = value as Locale
        startTransition(() => {
            setUserLocale(locale)
        })
    }

    return (
        <div className="relative group">
            <Select.Root defaultValue={defaultValue} onValueChange={onChange}>
                <Select.Trigger
                    aria-label={label}
                    className={clsx(
                        'inline-flex items-center justify-between gap-2 rounded-sm p-2 transition-colors',
                        'hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500',
                        isPending && 'pointer-events-none opacity-60'
                    )}
                >
                    <Languages className="h-6 w-6 text-slate-600 transition-colors group-hover:text-slate-900" />
                    <Select.Icon asChild>
                        <ChevronDown className="h-4 w-4 opacity-70" />
                    </Select.Icon>
                </Select.Trigger>

                <Select.Portal>
                    <Select.Content
                        align="end"
                        position="popper"
                        sideOffset={5}
                        className="z-50 min-w-[8rem] overflow-hidden rounded-sm bg-white shadow-md border border-slate-200"
                    >
                        <Select.Viewport className="p-1">
                            {items.map((item) => (
                                <Select.Item
                                    key={item.value}
                                    value={item.value}
                                    className={clsx(
                                        'relative flex items-center px-3 py-2 text-sm rounded-sm',
                                        'cursor-default select-none outline-none',
                                        'hover:bg-slate-100 focus:bg-slate-100'
                                    )}
                                >
                                    <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                                        <Check className="h-4 w-4" />
                                    </Select.ItemIndicator>
                                    <Select.ItemText className="ml-6">{item.label}</Select.ItemText>
                                </Select.Item>
                            ))}
                        </Select.Viewport>
                        <Select.Arrow className="fill-white" />
                    </Select.Content>
                </Select.Portal>
            </Select.Root>
        </div>
    )
}
