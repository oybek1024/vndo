import {AntProvider} from "@/providers/ant.tsx";
import {RouterProvider} from "react-router";
import {generatedRoutes} from "@/router";

function App() {
    return <AntProvider>
        <RouterProvider router={generatedRoutes}/>
    </AntProvider>
}

export default App
