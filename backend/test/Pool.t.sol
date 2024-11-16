// SPDX-Lincense-Identifier: MIT
pragma solidity 0.8.23;

import "forge-std/Test.sol";
import {Pool} from "../src/Pool.sol";

contract PoolTest is Test {
    address owner = makeAddr("user0");
    address addr1 = makeAddr("user1");
    address addr2 = makeAddr("user2");
    address addr3 = makeAddr("user3");
    //address addr4 = makeAddr("user4");

    uint256 duration = 4 weeks; // timestamp 4*7*24*3600
    uint256 goal = 10 ether;

    Pool pool;

    // Function to trigger before every test.
    function setUp() public {
        // Sets "owner" to start the contract.
        vm.prank(owner);
        pool = new Pool(duration, goal);
    }

    // Test contract (owner, duration and goal).
    function test_ContractDeployedSuccessfully() public {
        address _owner = pool.owner();
        assertEq(owner, _owner);

        uint256 _end = pool.end();
        assertEq(block.timestamp + duration, _end);

        uint256 _goal = pool.goal();
        assertEq(goal, _goal);
    }

    // Test contribution.
    function test_RevertWhen_EndIsReached() public {
        vm.warp(pool.end() + 3600); // 3600s == 1h (sets the time for the participant one hour after the end).

        // Transform the custom error in the Pool contract to a signature readable from solidity.
        bytes4 selector = bytes4(keccak256("CollectIsFinished()")); // signature = fa3ac56b.
        vm.expectRevert(abi.encodeWithSelector(selector));

        vm.prank(addr1);
        vm.deal(addr1, 1 ether);
        pool.contribute{value: 1 ether}();
    }

    function test_RevertWhen_NotEnoughFunds() public {
        // Transform the custom error in the Pool contract to a signature readable from solidity.
        bytes4 selector = bytes4(keccak256("NotEnoughFunds()")); // signature = fa3ac56b.
        vm.expectRevert(abi.encodeWithSelector(selector));

        vm.prank(addr1);
        pool.contribute();
    }

    function test_ExpectEmit_SuccessfullyContribute(uint96 _amount) public {
        vm.assume(_amount > 0);
        vm.expectEmit(true, false, false, false);
        emit Pool.Contribute(address(addr1), _amount);

        vm.prank(addr1);
        vm.deal(addr1, _amount);
        pool.contribute{value: _amount}();
    }

    // Test withdraw
    function test_RevertWhen_NotTheOwner() public {
        // Transform the custom error in the Pool contract to a signature readable from solidity.
        bytes4 selector = bytes4(
            keccak256("OwnableUnauthorizedAccount(address)")
        ); // signature = fa3ac56b.
        vm.expectRevert(abi.encodeWithSelector(selector, addr1));

        vm.prank(addr1);
        pool.withdraw();
    }

    function test_RevertWhen_EndIsNotReached() public {
        // Transform the custom error in the Pool contract to a signature readable from solidity.
        bytes4 selector = bytes4(keccak256("CollectNotFinished()")); // signature = fa3ac56b.
        vm.expectRevert(abi.encodeWithSelector(selector));

        vm.prank(owner);
        pool.withdraw();
    }

    function test_RevertWhen_GoalIsNotReached() public {
        vm.prank(addr1);
        vm.deal(addr1, 5 ether);
        pool.contribute{value: 5 ether}();

        vm.warp(pool.end() + 3600);

        // Transform the custom error in the Pool contract to a signature readable from solidity.
        bytes4 selector = bytes4(keccak256("CollectNotFinished()")); // signature = fa3ac56b.
        vm.expectRevert(abi.encodeWithSelector(selector));

        vm.prank(owner);
        pool.withdraw();
    }

    function test_RevertWhen_WithdrawFailedToSendEther() public {
        pool = new Pool(duration, goal);

        vm.prank(addr1);
        vm.deal(addr1, 6 ether);
        pool.contribute{value: 6 ether}();

        vm.prank(addr2);
        vm.deal(addr2, 5 ether);
        pool.contribute{value: 5 ether}();

        vm.warp(pool.end() + 3600);

        // Transform the custom error in the Pool contract to a signature readable from solidity.
        bytes4 selector = bytes4(keccak256("FailedToSendEther()")); // signature = fa3ac56b.
        vm.expectRevert(abi.encodeWithSelector(selector));

        pool.withdraw();
    }

    function test_withdraw() public {
        vm.prank(addr1);
        vm.deal(addr1, 6 ether);
        pool.contribute{value: 6 ether}();

        vm.prank(addr2);
        vm.deal(addr2, 5 ether);
        pool.contribute{value: 5 ether}();

        vm.warp(pool.end() + 3600);

        vm.prank(owner);
        pool.withdraw();
    }

    // Test Refund
    function test_RevertWhen_CollectNotFinished() public {

        // Transform the custom error in the Pool contract to a signature readable from solidity.
        bytes4 selector = bytes4(keccak256("CollectNotFinished()")); // signature = fa3ac56b.
        vm.expectRevert(abi.encodeWithSelector(selector));

        vm.prank(addr1);
        pool.refund();
    }
}
