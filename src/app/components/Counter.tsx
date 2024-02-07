"use client";
import { setValue } from "@/lib/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";
//state variable present
export default function Counter() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setValue(Number(localStorage.getItem("counter"))));
  }, [dispatch]);

  const count = useAppSelector((state) => state.counter.value);

  return (
    <p
      style={{
        textAlign: "center",
        fontSize: 100,
        // border: "1px solid black",
      }}
    >
      {count}
    </p>
  );
}
