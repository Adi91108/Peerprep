"use client";

import {  signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "./ui/button";
// import { auth } from "@/lib/firebaseConfig"; 
import { auth } from "@/firebase/client";

const LogoutButton = () => {
    // const auth = auth()
//   const auth = getAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out from Firebase
      await fetch("/api/logout", { method: "POST" }); // Clear JWT cookie
      router.push("/sign-in"); // Redirect to login page
      toast.success("Account Logout Successfully.");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Error while Logging out. ");
    }
  };

  return (
    <Button className="cursor-pointer " onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
