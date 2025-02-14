// import { Logo } from "./_components/logo";

// const AuthLayout=(
//     {children}:
//     {children:React.ReactNode})=>{
//     return(
//         <div className="h-full flex-col items-center justify-center"><Logo/>{children}</div>
//     );
// };
// export default AuthLayout;  
import { Logo } from "./_components/logo";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Logo />
      <div className="flex flex-col items-center justify-">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;