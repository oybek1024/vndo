export const replacePathParams = (
    path: string,
    params: Record<string, string | number>
): string => {
    return path.replace(
        /:(\w+)/g,
        (_, key) => params[key]?.toString() || `:${key}`
    );
};