"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

function BtnGoBack() {
  const router = useRouter();
  return (
    <Button variant={"secondary"} onClick={router.back}>
      <ArrowLeft className="size-4" />
      Vratite se
    </Button>
  );
}

export default BtnGoBack;
