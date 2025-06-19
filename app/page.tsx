"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [panNumber, setPanNumber] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    if (!panNumber.trim()) {
      setError("PAN Number is required");
      return;
    }

    router.push(`/dashboard?pan=${encodeURIComponent(panNumber)}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4 p-4">
      <h1 className="text-xl font-semibold mb-4">AbhiLoans</h1>

      <Input
        placeholder="Enter the PAN Number"
        className="w-1/2"
        value={panNumber}
        onChange={(e) => setPanNumber(e.target.value)}
      />
      <Input
        placeholder="Enter the mobile number"
        className="w-1/2"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
      />

      <Button onClick={handleSubmit}>Enter</Button>

      {error && (
        <div className="text-red-500 text-sm mt-2">
          <strong>Error:</strong> {error}
        </div>
      )}
    </div>
  );
}
