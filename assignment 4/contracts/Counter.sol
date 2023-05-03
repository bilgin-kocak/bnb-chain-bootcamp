// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Counter {
    // State variables to hold total, subtracted, multiplied, and divided values
    int256 public total;
    int256 public subtracted;
    int256 public multiplied;
    int256 public divided;

    // Add function
    function add(int256 a, int256 b) public {
        total = a + b;
    }

    // Subtract function
    function subtract(int256 a, int256 b) public {
        subtracted = a - b;
    }

    // Multiply function
    function multiply(int256 a, int256 b) public {
        multiplied = a * b;
    }

    // Divide function
    function divide(int256 a, int256 b) public {
        require(b != 0, "Division by zero is not allowed");
        divided = a / b;
    }

    // View function to return all results at once
    function getResults() public view returns (int256, int256, int256, int256) {
        return (total, subtracted, multiplied, divided);
    }
}
