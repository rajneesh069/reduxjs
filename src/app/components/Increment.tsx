"use client";
import { increment } from "@/lib/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
//no state variable
export default function Increment() {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.value);
  return (
    <button
      style={{ border: "2px solid black" }}
      onClick={() => {
        dispatch(increment()); //type : counterSlice/increment -> RTK
        localStorage.setItem("counter", String(counter));
      }}
    >
      Increment Count
    </button>
  );
}

/**
 * Type given by RTK : action : {
 * type : "create_self",
 * payload? : any
 *}
 * action = {
 * type : "counterSlice/increment"
 * }
 * action.payload = 21; -> JS/TS
 * console.log(action)
 */