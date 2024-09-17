import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Loader2, LogInIcon } from "lucide-react";
import { Button } from "../ui/button";

export const LoginButton = () => {
  return (
    <>
      <ClerkLoading>
        <Loader2 className="size-10 animate-spin text-muted-foreground" />
      </ClerkLoading>
      <ClerkLoaded>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton forceRedirectUrl="/courses" mode="modal">
            <Button className="flex items-center gap-2" variant="outline">
              <LogInIcon className="text-muted-foreground" size={16} />
              Login
            </Button>
          </SignInButton>
        </SignedOut>
      </ClerkLoaded>
    </>
  );
};
