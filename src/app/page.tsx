"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      Hello
      <button
        style={{ border: "1px solid black" }}
        onClick={() => {
          router.push("/counter");
        }}
      >
        Counter
      </button>
    </div>
  );
}
