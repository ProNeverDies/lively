// app/RootLayoutClient.tsx

"use client"; // Mark this as a client component

import { useEffect, useState } from "react";

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  // Set client-side state after hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Don't render anything until client-side hydration is done
  }

  return <>{children}</>; // Once hydrated, render the children (including interactivity)
}
