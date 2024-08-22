// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract AreaCalculator {
    function AreaOfTriangle(uint base, uint height) public pure returns (uint) {
        // Formulae  A = 1/2 × base × height
        return (base * height) / 2;
    }

    function AreaOfRectangle(
        uint length,
        uint width
    ) public pure returns (uint) {
        //Formulae Length x Width
        return length * width;
    }

    function AreaOfSquare(uint side) public pure returns (uint) {
        //Formulae side * side
        return side * side;
    }
}
