import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import { lazy, Suspense } from "react";
import { BarLoader } from "react-spinners";
import Error from "../Components/Error/Error";
// for AllApps 
const AllApps = lazy(() => import('../Components/Apps/AllApps'))
// for app details 
const AppDetails = lazy(() => import('../Components/Home/Tranding/AppDetails/AppDetails'))
// for installed apps 
const InstalledApps = lazy(() => import('../Components/Apps/Installed Apps/InstalledApps'))
export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true, Component: Home
            },
            {
                path: '*',
                Component: Error
            },
            {
                path: 'apps',
                element: <Suspense fallback={<div className="flex justify-center items-center py-4"> <BarLoader /> </div>}>
                    <AllApps />
                </Suspense>
            },
            {
                path: 'installation',
                loader: () => fetch('/appsData.json'),
                element: <Suspense fallback={<div className="flex justify-center items-center py-4"> <BarLoader /> </div>}>
                    <InstalledApps />
                </Suspense>

            },
            {
                path: 'apps-details/:id',
                loader: () => fetch('/appsData.json'),
                element: <Suspense fallback={<div className="flex justify-center items-center py-4"> <BarLoader /> </div>}>
                    <AppDetails />
                </Suspense>
            }

        ]
    }
])