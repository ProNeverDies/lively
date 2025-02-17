// import {cva,type VariantProps} from "class-variance-authority";
// import { cn } from "@/lib/utils";
// import { Skeleton } from "./ui/skeleton";
// import {
//     Avatar,
//     AvatarFallback,
//     AvatarImage,
// } from "@/components/ui/avatar";

// const avatarSizes=cva(
//     "",
//     {
//         variants:{
//             size:{
//                 default:"h-8 w-8",
//                 lg:"h-14 w-14"
//             },
//         },
//         defaultVariants:{
//             size:"default"
//         },
//     },
// );

// interface UserAvatarProps
// extends VariantProps<typeof avatarSizes>{
//     imageUrl:string;
//     username:string;
//     isLive:boolean;
//     showBadge?:boolean;
// }

// export const UserAvatar = ({ imageUrl, username, isLive, showBadge,size }: UserAvatarProps) => {
//     const canShowbadge=showBadge && isLive;
//     return (
//         <div className="relative">
//            <Avatar
//            className={cn(
//             isLive && "ring-2 ring-rose-500 border border-background",
//            )}>
//             <AvatarImage src={imageUrl} className="object-cover"/>
//            </Avatar>
//         </div>
//     );
// };

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const avatarSizes = cva("", {
  variants: {
    size: {
      default: "h-8 w-8",
      lg: "h-14 w-14",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface UserAvatarProps extends VariantProps<typeof avatarSizes> {
  imageUrl: string;
  username: string;
  isLive: boolean;
  showBadge?: boolean;
}

export const UserAvatar = ({
  imageUrl,
  username,
  isLive,
  showBadge,
  size,
}: UserAvatarProps) => {
  const canShowBadge = showBadge && isLive;

  return (
    <div className="relative">
      <Avatar
        className={cn(
          isLive && "ring-2 ring-rose-500 border border-background"
        )}
      >
        <AvatarImage src={imageUrl} alt={username} className="object-cover" />
        {/* Fallback Avatar when imageUrl is not available */}
        <AvatarFallback>{username[0]}</AvatarFallback>
      </Avatar>
      {/* Show badge if user is live */}
      {canShowBadge && (
        <div className="absolute top-0 right-0 rounded-full bg-rose-500 h-2.5 w-2.5 border-2 border-background"></div>
      )}
    </div>
  );
};
