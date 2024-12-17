import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"
import { BrowserRouter } from "react-router"
import {Provider} from 'react-redux'
import { store } from "../store/store"

interface IProviderProps{
    children: ReactNode
}


const AppProvider = ({children}:IProviderProps) => {
  
  const queryClient = new QueryClient()

  return (
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
              {children}
            </Provider>
        </QueryClientProvider>
    </BrowserRouter>
  )
}

export default AppProvider