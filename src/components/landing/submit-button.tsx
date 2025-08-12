"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface SubmitButtonProps {
    buttonText?: string;
    idleIcon?: React.ReactNode;
    className?: string;
}

export function SubmitButton({ buttonText = "Obter Recomendação da IA", idleIcon, className }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} size="lg" className={className}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Analisando...
        </>
      ) : (
        <>
         {idleIcon}
         {buttonText}
        </>
      )}
    </Button>
  );
}
