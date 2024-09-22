"use client";
import CalculatorBody from "@/components/CalculatorBody";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <CalculatorBody/>
    </div>
  );
}
