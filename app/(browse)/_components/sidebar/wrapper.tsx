// "use client";
// import { cn } from "@/lib/utils";
// import { useSidebar } from "@/store/use-sidebar";
// import { useState,useEffect } from "react";
// import { Toggle, ToggleSkeleton } from "./toggle";

// interface WrapperProps{
//     children:React.ReactNode;
// };

// export const Wrapper=({children,}:WrapperProps)=>{
//     const [isClient,setClient]=useState(false);
//     const {collapsed}=useSidebar((state)=>state);

//     useEffect(()=>{
//         setClient(true);
//     },[]);

//     if(!isClient){
//         return (
//             <aside className={cn("fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50",
//             collapsed && "w-[70px]")}>
//                 <ToggleSkeleton/>
//                 <RecommendedSkeleton/>
//             </aside>
//         );
//     }
    
//     return(
//         <aside className={cn("fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50",
//          collapsed && "w-[70px]")}>
//             {children}
//         </aside>
//     );
// };
// "use client";
// import { cn } from "@/lib/utils";
// import { useSidebar } from "@/store/use-sidebar";
// import { useState, useEffect } from "react";
// import { Toggle, ToggleSkeleton } from "./toggle";
// import { RecommendedSkeleton } from "./recommendedskeleton";


// interface WrapperProps {
//   children: React.ReactNode;
// }

// export const Wrapper = ({ children }: WrapperProps) => {
//   const [isClient, setClient] = useState(false);
//   const { collapsed } = useSidebar((state) => state);

//   useEffect(() => {
//     setClient(true);
//   }, []);

//   if (!isClient) {
//     return (
//       <aside
//         className={cn(
//           "fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50",
//           collapsed && "w-[70px]"
//         )}
//       >
//         <ToggleSkeleton />
//         <RecommendedSkeleton />
//       </aside>
//     );
//   }

//   return (
//     <aside
//       className={cn(
//         "fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50",
//         collapsed && "w-[70px]"
//       )}
//     >
//       {children}
//     </aside>
//   );
// };

"use client";

import React from "react";
import { useIsClient } from "usehooks-ts";

import { useSidebar } from "@/store/use-sidebar";
import { cn } from "@/lib/utils";

import { ToggleSkeleton } from "./toggle";
import { RecommendedSkeleton } from "./recommendedskeleton";
import { FollowingSkeleton } from "./following";

export function Wrapper({ children }: { children: React.ReactNode }) {
  const { collapsed } = useSidebar((state) => state);
  const isClient = useIsClient();

  if (!isClient)
    return (
      <aside className="fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50">
        <ToggleSkeleton />
        <FollowingSkeleton />
        <RecommendedSkeleton />
      </aside>
    );

  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50",
        collapsed && "w-[70px]"
      )}
    >
      {children}
    </aside>
  );
}
