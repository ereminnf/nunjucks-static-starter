export const config = {
    host: {
        api: process.env.PROJECT_API,
    },
    isDev: process.env.NODE_ENV === 'development',
}
