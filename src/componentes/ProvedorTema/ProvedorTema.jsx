import { ThemeProvider } from '@emotion/react'

const tema = {}

export const ProvedorTema = ({Children}) => {
    return <ThemeProvider theme={tema}>
        {Children}
    </ThemeProvider>
}