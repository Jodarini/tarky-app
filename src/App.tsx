import './App.css'
import Home from './Home'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

function App() {
   const queryClient = new QueryClient()

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <Home />
    Hello World
    </QueryClientProvider>
    </>
  )
}

export default App
