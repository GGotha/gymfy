//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol"; // OpenZeppelin package contains implementation of the ERC 20 standard, which our NFT smart contract will inherit

contract GymfyCoin is ERC20 {
  uint256 constant _initial_supply = 50000000 * (10**18);

  /* ERC 20 constructor takes in 2 strings, feel free to change the first string to the name of your token name, and the second string to the corresponding symbol for your custom token name */
  constructor() public ERC20("GymfyCoin", "GYC") {
    _mint(msg.sender, _initial_supply);
  }
}
