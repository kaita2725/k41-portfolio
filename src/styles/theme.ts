export const lightTheme = {
    mode: 'light' as const,
    colors: {
        app: {
            background: '#ffffff',
            text: '#1a1a1a',
        },
    }
}

export const darkTheme = {
    mode: 'dark' as const,
    colors: {
        app: {
            background: '#121212',
            text: '#eaeaea',
        },
    }
}

export type AppTheme = typeof lightTheme