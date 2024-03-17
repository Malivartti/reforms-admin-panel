import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { getPageNameByRoute } from 'shared/const/router';
import { Header } from 'widgets/Header';
import { PageLoader } from 'widgets/PageLoader';

function AppRouter() {
    return (
        // <Suspense fallback={<PageLoader />}>
        <Routes>
            {
                ...routeConfig.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className="app__main">
                                <Suspense fallback="">
                                    <Header title={getPageNameByRoute(path)} />
                                </Suspense>
                                <Suspense fallback={<PageLoader />}>
                                    <div className="page-wrapper">
                                        {element}
                                    </div>
                                </Suspense>
                            </div>
                        )}
                    />
                ))
            }
        </Routes>
        // </Suspense>
    );
}

export default AppRouter;
