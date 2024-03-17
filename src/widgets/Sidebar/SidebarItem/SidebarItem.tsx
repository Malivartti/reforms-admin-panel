import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../Sidebar/model/types';

interface SidebarItemProps {
    className?: string;
    item: SidebarItemType;
    isActive: boolean;
}

export const SidebarItem = ({ className, item, isActive }: SidebarItemProps) => {
    const { t } = useTranslation();

    return (
        <Link
            className={
                classNames(cls.SidebarItem, { [cls.SidebarItem_active]: isActive }, [className])
            }
            to={item.path}
        >
            <item.icon />
            <span className={cls.text}>{t(item.text)}</span>
        </Link>

    );
};
