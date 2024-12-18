import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Icewind Dale",
  description: "An interactive map of Icewind Dale",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

export default function IcewindDaleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
    </div>
  )
}