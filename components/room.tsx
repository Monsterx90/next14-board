"use client";

import { RoomProvider } from "@/liveblocks.config";
import { ClientSideSuspense } from "@liveblocks/react";
import { Layer } from "@/types/canvas";
import { LiveList,LiveMap,LiveObject } from "@liveblocks/client";

import { ReactNode } from "react";


interface RoomProps { 
  children: ReactNode
  roomId: string
  fallback:  NonNullable<ReactNode> | null;
};

export const Room = ({ 
  children,
  roomId,
  fallback
}: RoomProps) => {
  
  return (  
    <RoomProvider id={roomId} initialPresence={{
      cursor: null,
      selection: [],
      pencilDraft: null,
      penColor: null
    }}
    initialStorage={{
      layers: new LiveMap<string,LiveObject<Layer>>(),
      layerIds: new LiveList()
    }}
    >
      <ClientSideSuspense fallback={fallback}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
    
  );
};