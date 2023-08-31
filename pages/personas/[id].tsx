import React from "react";
import { useRouter } from "next/router";
import { Chat } from "@/components/chat";
import { personas } from "@/data/personas";

export default function Persona() {
  const router = useRouter();

  const persona = personas.find((p) => p.id === Number(router.query.id));

  return (
    <>{persona && <Chat persona={persona} id={persona.id.toString()} />}</>
  );
}
