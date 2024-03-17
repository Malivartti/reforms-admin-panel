import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import PlusIcon from 'shared/assets/icons/plus.svg';
import { TextField } from 'shared/ui/TextField/TextField';
import { useTranslation } from 'react-i18next';
import cls from './TelegramBotsPageHead.module.scss';

interface TelegramBotsPageHeadProps {
    className?: string;
}

export const TelegramBotsPageHead = ({ className }: TelegramBotsPageHeadProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.TelegramBotsPageHead, {}, [className])}>
            <Button theme={ThemeButton.CONTAINED} StartIcon={PlusIcon}>{t('Новый бот')}</Button>
        </div>
    );
};
