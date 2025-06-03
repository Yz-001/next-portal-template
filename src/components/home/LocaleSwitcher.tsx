import { useLocale } from 'next-intl'
import LocaleSwitcherSelect from './LocaleSwitcherSelect'

export default function LocaleSwitcher() {
    const locale = useLocale()

    return (
        <LocaleSwitcherSelect
            defaultValue={locale}
            items={[
                {
                    value: 'en',
                    label: ' en'
                },
                {
                    value: 'zh',
                    label: ' zh'
                }
            ]}
            label="语言切换"
        />
    )
}
