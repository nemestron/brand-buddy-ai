"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function Hero() {
  const [logoTitle, setLogoTitle] = useState("");

  return (
    <div className="flex flex-col items-center justify-center mt-24 gap-6 px-4 text-center">
      <h2 className="text-5xl font-bold font-display">
        AI Logo Maker for <span className="text-primary">Custom Brands</span>
      </h2>
      <h2 className="text-2xl text-gray-500 font-light">
        Create your own custom logo for your startup, business, or brand with one click.
      </h2>
      
      <div className="flex w-full max-w-md items-center space-x-2 mt-6">
        <Input 
          type="text" 
          placeholder="Enter your brand name..." 
          className="shadow-sm"
          onChange={(e) => setLogoTitle(e.target.value)}
        />
        <Link href={'/create?title=' + logoTitle}>
          <Button className="w-full">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
