import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { QueryProvider } from '@/provider/queryProvider'
import { routers } from '@/routes/routes'
import mixpanel from 'mixpanel-browser'

if (import.meta.env.NODE_ENV === 'production') {
    mixpanel.init(import.meta.env.VITE_MIXPANEL_TOKEN, {
        track_pageview: true,
        persistence: 'localStorage',
        debug: false,
    })
}

function App() {
    return (
        <QueryProvider>
            <BrowserRouter>
                <Routes>
                    <Route>
                        {routers.map((route) => (
                            <Route key={route.id} path={route.href} element={route.element} />
                        ))}
                        <Route path='*' element={<Navigate to='/' replace />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryProvider>
    )
}

export default App
