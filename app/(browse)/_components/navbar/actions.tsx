"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Clapperboard } from "lucide-react";

export const Actions = () => {
  const { user } = useUser();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
      {!user && isClient && (
        <SignInButton>
          <Button size="sm" variant="primary">Login!</Button>
        </SignInButton>
      )}
      {user && isClient && (
        <div className="flex items-center gap-x-4">
          <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary">
            <Link href={`/u/${user.username}`} className="flex items-center gap-2">
              <Clapperboard className="h-5 w-5 lg:mr-2"/>
              <span className="hidden lg:block">Dashboard</span>
            </Link>
          </Button>
          <UserButton afterSignOutUrl="/"/>
        </div>
      )}
    </div>
  );
};
