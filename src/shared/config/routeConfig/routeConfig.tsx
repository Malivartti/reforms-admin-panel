import { AccountPage } from 'pages/AccountPage';
import { AnalyticsPage } from 'pages/AnalyticsPage';
import { KnowledgeBasePage } from 'pages/KnowledgeBasePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { TelegramBotsPage } from 'pages/TelegramBotsPage';
import { WebBotsPage } from 'pages/WebBotsPage';
import { RouteProps } from 'react-router-dom';
import {
    getRouteAccount,
    getRouteAnalytics,
    getRouteKnowledgeBase,
    getRouteTelegramBots,
    getRouteWebBots,
} from 'shared/const/router';

export const routeConfig: RouteProps[] = [
    {
        path: getRouteAnalytics(),
        element: <AnalyticsPage />,
    },
    {
        path: getRouteAccount(),
        element: <AccountPage />,
    },
    {
        path: getRouteKnowledgeBase(),
        element: <KnowledgeBasePage />,
    },
    {
        path: getRouteTelegramBots(),
        element: <TelegramBotsPage />,
    },
    {
        path: getRouteWebBots(),
        element: <WebBotsPage />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
];
