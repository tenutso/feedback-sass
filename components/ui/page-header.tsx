import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const PageHeader = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-30 w-full transition-all">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 relative border-b">
        <div className="flex justify-between items-center p-4 gap-4 h-14">
          <Image src="/logo.png" alt="Logo" width={250} height={0} />
          <div>
            <SignedOut>
              <SignInButton>
                <Button className="cursor-pointer">Sign In</Button>
              </SignInButton>
              <SignUpButton>
                <Button className="ml-2 cursor-pointer">Sign Up</Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
