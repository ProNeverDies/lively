import { getRecommendedService } from "@/lib/recommended-service";
import { Recommended } from "./recommended";
import { Toggle } from "./toggle";
import { Wrapper } from "./wrapper";

 export const Sidebar=async()=>{
   const recommended=await getRecommendedService();
    return (
       
        <Wrapper>
           <Toggle/>
           <div className="space-y-4 pt-4 lg:pt-0">
         <Recommended data={recommended} />
           </div>
           
         </Wrapper>
);
};