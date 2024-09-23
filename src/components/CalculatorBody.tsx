import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";

const CalculatorBody = () => {
  const [currentValue, setCurrentValue] = useState("");
  const [expression, setExpression] = useState("");

  const handleButtonClick = (value: String) => {
    // If the value is 'AC', clear the input
    if (value === "AC") {
      setCurrentValue("");
      setExpression("");
    } else if (value === "square") {
      const squaredValue = Math.pow(parseFloat(currentValue), 2); // Square the current value
      setCurrentValue(squaredValue.toString()); // Set the squared value as the new current value
      setExpression(squaredValue.toString()); // Update the expression to reflect the new value
    }

    // If '=' is clicked, calculate the result
    else if (value === "=") {
      try {
        const result = eval(expression); // Calculate the expression
        setCurrentValue(result);
        setExpression(result.toString());
      } catch (error) {
        setCurrentValue("Error");
      }
    }
    // For other buttons, update the input and expression
    else {
      setCurrentValue(currentValue + value);
      setExpression(expression + value);
    }
  };

  return (
    <>
      <div></div>
      <div className="container flex flex-col h-[80vh] md:min-w-[500px] mx-auto items-center mt-48">
        <div className="w-60 h-14 ">
          <Input
            type="text"
            defaultValue={currentValue}
            className="h-12 text-2xl rounded-3xl"
            
          />
        </div>
        <div className="">
          <Button
            onClick={() => {
              handleButtonClick("AC");
            }}
            variant="outline"
            className="rounded-full h-14 w-14 text-xl"
          >
            AC
          </Button>
          <Button
            onClick={() => {
              handleButtonClick("square");
            }}
            variant="outline"
            className="rounded-full h-14 w-14 text-xl"
          >
            x²
          </Button>
          <Button
            onClick={() => {
              handleButtonClick("%");
            }}
            variant="outline"
            className="rounded-full h-14 w-14 text-xl"
          >
            %
          </Button>
          <Button
            onClick={() => {
              handleButtonClick("/");
            }}
            variant="outline"
            className="rounded-full h-14 w-14 text-xl"
          >
            /
          </Button>
        </div>
        <div className="">
          <Button
            onClick={() => {
              handleButtonClick("7");
            }}
            variant="outline"
            className="rounded-full h-14 w-14 text-xl"
          >
            7
          </Button>
          <Button
            onClick={() => {
              handleButtonClick("8");
            }}
            variant="outline"
            className="rounded-full h-14 w-14 text-xl"
          >
            8
          </Button>
          <Button
            onClick={() => {
              handleButtonClick("9");
            }}
            variant="outline"
            className="rounded-full h-14 w-14 text-xl"
          >
            9
          </Button>
          <Button
            onClick={() => {
              handleButtonClick("*");
            }}
            variant="outline"
            className="rounded-full h-14 w-14 text-xl"
          >
            *
          </Button>
        </div>
        <div className=" ">
          <Button
            onClick={() => {
              handleButtonClick("4");
            }}
            variant="outline"
            className="rounded-full h-14 w-14 text-xl"
          >
            4
          </Button>
          <Button
            onClick={() => {
              handleButtonClick("5");
            }}
            variant="outline"
            className="rounded-full h-14 w-14 text-xl"
          >
            5
          </Button>
          <Button
            onClick={() => {
              handleButtonClick("6");
            }}
            variant="outline"
            className="rounded-full h-14 w-14 text-xl"
          >
            6
          </Button>
          <Button
            onClick={() => {
              handleButtonClick("-");
            }}
            variant="outline"
            className="rounded-full h-14 w-14 text-xl"
          >
            -
          </Button>
        </div>
        <div className=" ">
          <Button
            onClick={() => {
              handleButtonClick("1");
            }}
            variant="outline"
            className="rounded-full h-14 w-14 text-xl"
          >
            1
          </Button>
          <Button
            onClick={() => {
              handleButtonClick("2");
            }}
            variant="outline"
            className="rounded-full h-14 w-14 text-xl"
          >
            2
          </Button>
          <Button
            onClick={() => {
              handleButtonClick("3");
            }}
            variant="outline"
            className="rounded-full h-14 w-14 text-xl"
          >
            3
          </Button>
          <Button
            onClick={() => {
              handleButtonClick("+");
            }}
            variant="outline"
            className="rounded-full h-14 w-14 text-xl"
          >
            +
          </Button>
        </div>
        <div className="">
          <Button
            onClick={() => {
              handleButtonClick("3.1416");
            }}
            variant="outline"
            className="rounded-full h-14 w-14 text-xl"
          >
            π
          </Button>
          <Button
            onClick={() => {
              handleButtonClick("0");
            }}
            variant="outline"
            className="rounded-full h-14 w-14 text-xl"
          >
            0
          </Button>

          <Button
            onClick={() => {
              handleButtonClick(".");
            }}
            variant="outline"
            className="rounded-full h-14 w-14 text-xl"
          >
            .
          </Button>
          <Button
            onClick={() => {
              handleButtonClick("=");
            }}
            variant="outline"
            className="rounded-full h-14 w-14 text-xl"
          >
            =
          </Button>
        </div>
      </div>
    </>
  );
};

export default CalculatorBody;
