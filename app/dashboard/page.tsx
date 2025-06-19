"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

const tags = [
  "Loans",
  "Bank Account Details",
  "Outstanding Installments",
  "MF/Stocks",
  "Loans1",
  "Bank Account Details1",
  "Outstanding Installments1",
  "MF/Stocks1",
];

export default function DashboardPage() {
  const searchParams = useSearchParams();
  const panNumber = searchParams.get("pan") || "";
  const [nameResult, setNameResult] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!panNumber) return;

    const fetchName = async () => {
      try {
        const res = await fetch("/api/check_eligibility", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ panNumber }),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Unknown error");

        if (data.name) {
          setNameResult(data.name);
        } else {
          setNameResult("No user found with this PAN number.");
        }
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchName();
  }, [panNumber]);

  const handleClick = async (tag: string) => {
    try {
      const response = await fetch(`/api/trigger?tag=${encodeURIComponent(tag)}`, {
        method: "POST",
      });
      const data = await response.json();
      alert(`Triggered API for ${tag}`);
    } catch (error) {
      alert(`Failed to trigger API for ${tag}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-8 space-y-6">
      <Textarea
        readOnly
        placeholder="Name will appear here"
        value={error || nameResult}
        className="w-1/2"
      />

      <ContextMenu>
        <ContextMenuTrigger className="w-48 h-40 border shadow-md rounded-md bg-white flex items-center justify-center text-sm text-gray-700 cursor-default">
          Click Here
        </ContextMenuTrigger>

        <ContextMenuContent className="w-48 p-0">
          <ScrollArea className="h-[144px]">
            <div className="p-2">
              {tags.map((tag) => (
                <React.Fragment key={tag}>
                  <div
                    className="text-sm cursor-pointer hover:bg-gray-100 rounded px-2 py-1"
                    onClick={() => handleClick(tag)}
                  >
                    {tag}
                  </div>
                  <Separator className="my-2" />
                </React.Fragment>
              ))}
            </div>
          </ScrollArea>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  );
}
