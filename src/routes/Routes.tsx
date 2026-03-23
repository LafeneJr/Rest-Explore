import { createBrowserRouter } from "react-router-dom"
import { App } from "../App"
import { Home } from "../pages/Home"
import { Countries } from "../pages/Countries"
import { About } from "../pages/About"
import CountryDetails from "../pages/CountryDetails"
import { RouterErrorBoundary } from "../components/RouterErrorBoundary"
import { countryLoader } from "../components/CountryLoader";
import { NotFound } from "../pages/NotFound"


export const router = createBrowserRouter ([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "countries",
                element: <Countries />
            },

            {
                path: "country/:code",
                element: <CountryDetails />,
                loader: countryLoader,
                errorElement: <RouterErrorBoundary />,
            },

            {
                path: "about",
                element: <About />
            },
            {
                path: "*",
                element: <NotFound />
            },
        ]
    }
])
