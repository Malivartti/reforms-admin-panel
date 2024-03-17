import {
    getPageNameByRouteAccount,
    getPageNameByRouteAnalytics,
    getPageNameByRouteKnowledgeBase,
    getPageNameByRouteTelegramBots,
    getPageNameByRouteWebBots,
    getRouteAccount,
    getRouteAnalytics,
    getRouteKnowledgeBase,
    getRouteTelegramBots,
    getRouteWebBots,
} from 'shared/const/router';
import AccountIcon from 'shared/assets/icons/route/account.svg';
import AnalyticsIcon from 'shared/assets/icons/route/analyits.svg';
import TelegramIcon from 'shared/assets/icons/route/telegram.svg';
import WebIcon from 'shared/assets/icons/route/web.svg';
import BaseIcon from 'shared/assets/icons/route/base.svg';
import { SidebarItemType } from '../types';

export const useSidebarItems = () => {
    const sideberItemsList: SidebarItemType[] = [
        {
            path: getRouteAnalytics(),
            icon: AnalyticsIcon,
            text: getPageNameByRouteAnalytics(),
        },
        {
            path: getRouteAccount(),
            icon: AccountIcon,
            text: getPageNameByRouteAccount(),
        },
        {
            path: getRouteTelegramBots(),
            icon: TelegramIcon,
            text: getPageNameByRouteTelegramBots(),
        },
        {
            path: getRouteWebBots(),
            icon: WebIcon,
            text: getPageNameByRouteWebBots(),
        },
        {
            path: getRouteKnowledgeBase(),
            icon: BaseIcon,
            text: getPageNameByRouteKnowledgeBase(),
        },
    ];

    return sideberItemsList;
};
