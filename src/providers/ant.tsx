import type {ReactNode} from "react";
import {ConfigProvider} from "antd";
import {antTheme} from "@/config";

export const AntProvider = ({children}: { children: ReactNode }) => {
    return <ConfigProvider theme={{token: {...antTheme}}}>{children}</ConfigProvider>;
}