"use client";

import { ReactNode } from "react";
import { ClientSideSuspense, LiveblocksProvider, RoomProvider } from "@liveblocks/react/suspense";

interface RoomProps {
  children: ReactNode;
  roomId: string;
  fallback: NonNullable<ReactNode> | null;
}

export const Room = ({ children, roomId, fallback }: RoomProps) => {
  return (
    <LiveblocksProvider
      publicApiKey={"pk_dev_zqfAVWWJwi071p7bcQVf_4-8TRwh-8lPt27Zk0N5XnNEXBqpiVbMHegQc9YHbwZk"}
    >
      <RoomProvider id={roomId} initialPresence={{}}>
        <ClientSideSuspense fallback={fallback}>{() => children}</ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
};
