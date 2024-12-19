import { useEffect, useState } from "react";

export default function DelayRender({
  children,
  timeout
}: Readonly<{
  children: React.ReactNode;
  timeout: number
}>) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), timeout)
  }, [])

  if (!show) return null
  return children
}