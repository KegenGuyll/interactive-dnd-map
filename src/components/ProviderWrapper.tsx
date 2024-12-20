'use client';

import { store } from "@/redux/store"
import { Provider } from "react-redux"

type ProviderWrapperProps = {
  children: React.ReactNode
}

const ProviderWrapper: React.FC<ProviderWrapperProps> = ({children}: ProviderWrapperProps) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default ProviderWrapper