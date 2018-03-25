pragma solidity ^0.4.7;
contract SimpleStorage {
  uint public pid;
	uint public cs;
	mapping(address => user) public users;

	function SimpleStorage(uint initialValue) public {
    pid = initialValue;

  }
	function loan() public  returns (uint retVal) {
	cs = cs - 1;
	return cs;
	}
	function payback() public  returns (uint retVal) {
	cs = cs + 1;
	return cs;
	}
  function set(uint x,uint y) public {
   pid = x;
	cs=y;
  }

  function get() public returns (uint retVal) {
	return cs;
}
}
