import { useMemo } from 'react';
import { BotItemProps } from 'widgets/BotsList/BotsList/model/types';
import DinoImg from 'shared/assets/dino.png';
import { BotsList } from 'widgets/BotsList';

const WebBotsPage = () => {
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
            <BotsList botItems={botItems} />
        </div>
    );
};

export default WebBotsPage;
