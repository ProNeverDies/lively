"use client";

import React from "react";
import { useSidebar } from "@/store/use-sidebar";
import { UserItem } from "./user-item";
import { CustomSkeleton } from "./customskeleton";

// Define the User, Follow, Block, and Stream interfaces directly in this file
interface User {
  id: string;
  username: string;
  imageUrl: string;
  externalUserId: string;
  bio?: string | null;

  following: Follow[];
  followedBy: Follow[];

  blocking: Block[];
  blockedBy: Block[];

  stream?: Stream | null;

  createdAt: Date;
  updatedAt: Date;
}

interface Follow {
  id: string;
  followerId: string;
  followingId: string;

  follower: User;
  following: User;

  createdAt: Date;
  updatedAt: Date;
}

interface Block {
  id: string;
  blockerId: string;
  blockedId: string;

  blocker: User;
  blocked: User;
}

interface Stream {
  id: string;
  name: string;
  thumbnailUrl?: string | null;

  ingressId?: string | null;
  serverUrl?: string | null;
  streamKey?: string | null;

  isLive: boolean;
  isChatEnabled: boolean;
  isChatDelayed: boolean;
  isChatFollowersOnly: boolean;

  userId: string;
  user: User;

  createdAt: Date;
  updatedAt: Date;
}

export function Following({
  data,
}: {
  data: (Follow & {
    following: User & {
      stream: { isLive: boolean } | null;
    };
  })[];
}) {
  const { collapsed } = useSidebar((state) => state);

  if (!data.length) return null;

  return (
    <div>
      {!collapsed && (
        <div className="pl-6 mb-4">
          <p className="text-sm text-muted-foreground">Following</p>
        </div>
      )}
      <ul className="space-y-2 px-2">
        {data.map((follow) => (
          <UserItem
            key={follow.following.id}
            username={follow.following.username}
            imageUrl={follow.following.imageUrl}
            isLive={follow.following.stream?.isLive ?? false}
          />
        ))}
      </ul>
    </div>
  );
}

export function FollowingSkeleton() {
  return (
    <ul className="px-2 pt-2 lg:pt-0">
      {[...Array(3)].map((_, i) => (
        <CustomSkeleton key={i} />
      ))}
    </ul>
  );
}