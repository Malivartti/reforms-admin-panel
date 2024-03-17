import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import RuFLagIcon from 'shared/assets/icons/flags/ru.svg';
import EnFlagIcon from 'shared/assets/icons/flags/en.svg';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { i18n } = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            onClick={toggleLang}
        >
            {i18n.language === 'ru' ? <RuFLagIcon /> : <EnFlagIcon />}
        </Button>
    );
};
