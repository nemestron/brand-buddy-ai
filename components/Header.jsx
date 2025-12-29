import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

function Header() {
  return (
    <div className="p-4 shadow-sm border-b flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Image src="/logo.svg" alt="Brand Buddy Logo" width={40} height={40} />
        <h1 className="text-xl font-bold text-primary">Brand Buddy</h1>
      </div>
      <Button variant="outline">Login</Button>
    </div>
  );
}

export default Header;
