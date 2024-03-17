import './style/index.scss';
import { Sidebar } from 'widgets/Sidebar/Sidebar';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/route';
import 'shared/config/i18n/i18n';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <div className="app__container">
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;
