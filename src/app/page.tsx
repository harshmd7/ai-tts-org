import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export default function Home(){

  return <div className="flex min-h-screen flex-col  gap-4 bg-background items-center justify-between" >
    <h1>welcome to aiproject</h1>
    <div className="">
      <OrganizationSwitcher/>
      <UserButton/>
    </div>
  </div>
}