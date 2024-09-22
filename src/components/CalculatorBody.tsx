import React from "react";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";

const CalculatorBody = () => {
  return (
    <>
      <div></div>
      <div className="container flex flex-col h-[80vh] md:min-w-[500px] mx-auto items-center">
        <div className="w-60 h-14 ">
        <Input type="text" placeholder=""  className="h-12 text-2xl rounded-3xl"/>
        </div>
        <div className="">
          <Button variant="outline" className="rounded-full h-14 w-14 text-xl">
            AC
          </Button>
          <Button variant="outline" className="rounded-full h-14 w-14 text-xl">
            Del
          </Button>
          <Button variant="outline" className="rounded-full h-14 w-14 text-xl">
            %
          </Button>
          <Button variant="outline" className="rounded-full h-14 w-14 text-xl">
            /
          </Button>
        </div>
        <div className="">
          <Button variant="outline" className="rounded-full h-14 w-14 text-xl">
            7
          </Button>
          <Button variant="outline" className="rounded-full h-14 w-14 text-xl">
            8
          </Button>
          <Button variant="outline" className="rounded-full h-14 w-14 text-xl">
            9
          </Button>
          <Button variant="outline" className="rounded-full h-14 w-14 text-xl">
            *
          </Button>
        </div>
        <div className=" ">
          <Button variant="outline" className="rounded-full h-14 w-14 text-xl">
            4
          </Button>
          <Button variant="outline" className="rounded-full h-14 w-14 text-xl">
            5
          </Button>
          <Button variant="outline" className="rounded-full h-14 w-14 text-xl">
            6
          </Button>
          <Button variant="outline" className="rounded-full h-14 w-14 text-xl">
            -
          </Button>
        </div>
        <div className=" ">
          <Button variant="outline" className="rounded-full h-14 w-14 text-xl">
            1
          </Button>
          <Button variant="outline" className="rounded-full h-14 w-14 text-xl">
            2
          </Button>
          <Button variant="outline" className="rounded-full h-14 w-14 text-xl">
            3
          </Button>
          <Button variant="outline" className="rounded-full h-14 w-14 text-xl">
            +
          </Button>
        </div>
        <div className="">
          <Button variant="outline" className="rounded-full h-14 w-14 text-xl">
            +/-
          </Button>
          <Button variant="outline" className="rounded-full h-14 w-14 text-xl">
            0
          </Button>

          <Button variant="outline" className="rounded-full h-14 w-14 text-xl">
            .
          </Button>
          <Button variant="outline" className="rounded-full h-14 w-14 text-xl">
            =
          </Button>
        </div>
      </div>
    </>
  );
};

export default CalculatorBody;
