import { classNames } from 'shared/lib/classNames/classNames';
// import { LangSwitcher } from 'widgets/LangSwitcher';
import { SidebarItem } from 'widgets/Sidebar/SidebarItem/SidebarItem';
import { Suspense } from 'react';
import { getRouteAccount } from 'shared/const/router';
import { useLocation } from 'react-router-dom';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Loader, ThemeLoader } from 'shared/ui/Loader/Loader';
import cls from './Sidebar.module.scss';
import { useSidebarItems } from '../model/selectors/getSidebarItem';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const sidebarItemsList = useSidebarItems();
    const location = useLocation();

    return (
        <div className={classNames(cls.Sidebar, {}, [className])}>
            <div>
                <h1 className={cls.title}>REFORM AI</h1>
                <div className={cls.navlist}>
                    {
                        ...sidebarItemsList.map((item) => (
                            <Suspense fallback={<Loader theme={ThemeLoader.SECONDARY} />}>
                                <SidebarItem
                                    key={item.path}
                                    item={item}
                                    className={cls.SidebarItem}
                                    isActive={location.pathname === item.path}
                                />
                                { item.path === getRouteAccount()
                                && <div className={cls.divider} />}
                            </Suspense>
                        ))
                    }
                </div>
            </div>
            <Suspense fallback="">
                <LangSwitcher className={cls['lang-switcher']} />
            </Suspense>
        </div>
    );
};
