'use client';

import { store } from "@/redux/store"
import { Analytics } from "@vercel/analytics/next";
import { Provider } from "react-redux"

type ProviderWrapperProps = {
  children: React.ReactNode
}

const ProviderWrapper: React.FC<ProviderWrapperProps> = ({children}: ProviderWrapperProps) => {
  return (
    <Provider store={store}>
      {children}
      <Analytics/>
    </Provider>
  )
}

export default ProviderWrapper