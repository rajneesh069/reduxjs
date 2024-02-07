"use client";
import { reset } from "@/lib/features/counterSlice";
import { useAppDispatch } from "@/lib/hooks";
//no state variable
export default function ResetCount() {
  const dispatch = useAppDispatch();
  // const counter = useAppSelector((state) => state.counter.value);
  return (
    <button
      style={{ border: "2px solid black" }}
      onClick={() => {
        dispatch(reset());
        localStorage.setItem("counter", String(0));
      }}
    >
      Reset Count
    </button>
  );
}
