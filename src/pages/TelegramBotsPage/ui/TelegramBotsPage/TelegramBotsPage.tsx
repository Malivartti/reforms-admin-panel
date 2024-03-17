import { useMemo } from 'react';
import { BotItemProps } from 'widgets/BotsList/BotsList/model/types';
import DinoImg from 'shared/assets/dino.png';
import { BotsList } from 'widgets/BotsList';
import { TelegramBotsPageHead } from '../TelegramBotsPageHead/TelegramBotsPageHead';

const TelegramBotsPage = () => {
    const botItems: BotItemProps[] = useMemo(() => [
        {
            botImg: DinoImg,
            botName: 'Химический бот',
            baseName: 'Химическая БЗ',
            baseCount: 150,
        },
        {
            botName: 'Химический бот',
            baseName: 'Химическая БЗ',
            baseCount: 150,
        },
        {
            botName: 'Химический бот',
            baseName: 'Химическая БЗ',
            baseCount: 150,
        },
    ], []);

    return (
        <div>
            <TelegramBotsPageHead />
            <BotsList botItems={botItems} />
        </div>
    );
};

export default TelegramBotsPage;
