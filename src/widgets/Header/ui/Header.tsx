import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Header.module.scss';

interface HeaderProps {
    className?: string;
    title: string;
}

export const Header = ({ className, title }: HeaderProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Header, {}, [className])}>
            <h2 className={cls.title}>{t(title)}</h2>
        </div>
    );
};
