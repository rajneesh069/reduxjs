"use client";
import { useRouter } from "next/navigation";
import Counter from "../components/Counter";
import Decrement from "../components/Decrement";
import Increment from "../components/Increment";
import ResetCount from "../components/ResetCounter";
//no state variable
export default function Page() {
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <Counter />
        <div style={{ display: "flex", gap: 10, marginTop: "10px" }}>
          <Increment />
          <Decrement />
          <ResetCount />
          <button
            onClick={() => {
              router.push("/");
            }}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
