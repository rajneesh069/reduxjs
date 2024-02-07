"use client";
import { decrement } from "@/lib/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
//no state variable
export default function Decrement() {
    const dispatch = useAppDispatch();
    const counter = useAppSelector((state) => state.counter.value);
  return (
    <button
      style={{ border: "2px solid black" }}
      onClick={() => {
        dispatch(decrement());
        localStorage.setItem("counter", String(counter));
      }}
    >
      Decrement Count
    </button>
  );
}
