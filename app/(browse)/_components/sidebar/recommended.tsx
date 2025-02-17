"use client";
import { useSidebar } from "@/store/use-sidebar";
import { UserItem } from "./user-item";
// import { PrismaClient,User } from "@prisma/client";
interface User {
    id: string;
    username: string;
    imageUrl: string;
    externalUserId: string;
    bio?: string|null;
    createdAt: Date;
    updatedAt: Date;
  }

interface RecommendedProps {data:User[];};
export const Recommended = ({data,}:RecommendedProps) => {  
    const {collapsed}=useSidebar((state)=>state);   
    const showLabel=!collapsed && data.length>0;
    return(
        <div>
           {showLabel && (
            <div className="pl-6 mb-4">
                <p className="text-sm text-muted-foreground">
                    Recommended</p>
                </div>
           )}
           <ul className="space-y-2 px-2">
            {data.map((user)=>(
                <UserItem key={user.id}
                username={user.username}
                imageUrl={user.imageUrl}
                isLive={true}/>
            ))}
           </ul>
       </div>
)
};