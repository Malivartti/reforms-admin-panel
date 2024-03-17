export const enum AppRoutes {
    ACCOUNT = 'account',
    ANALYTICS = 'analytics',
    TELEGRAMBOTS = 'telegram_bots',
    WEBBOTS = 'web_bots',
    KNOWLEDGEBASE = 'knowledge_base',
}

export const getRouteAnalytics = () => '/';
export const getRouteAccount = () => '/account';
export const getRouteTelegramBots = () => '/telegram-bots';
export const getRouteWebBots = () => '/web-bots';
export const getRouteKnowledgeBase = () => '/knowledge-base';

export const getPageNameByRouteAnalytics = () => 'Аналитика';
export const getPageNameByRouteAccount = () => 'Аккаунт';
export const getPageNameByRouteTelegramBots = () => 'Telegram-Боты';
export const getPageNameByRouteWebBots = () => 'Web-Боты';
export const getPageNameByRouteKnowledgeBase = () => 'Базы знаний';
export const getPageNameByRoute = (route: string) => {
    switch (route) {
    case getRouteAccount():
        return getPageNameByRouteAccount();
    case getRouteAnalytics():
        return getPageNameByRouteAnalytics();
    case getRouteTelegramBots():
        return getPageNameByRouteTelegramBots();
    case getRouteWebBots():
        return getPageNameByRouteWebBots();
    case getRouteKnowledgeBase():
        return getPageNameByRouteKnowledgeBase();
    default:
        return '404';
    }
};
