// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

import"./RoyaltiesAndAirDrop.sol";


contract EruChefsStaking is ERC20, ERC721Holder, Ownable {
    using SafeMath for uint; 
    IERC721 public nft;
    
    mapping(uint256 => address) public tokenOwnerOf;
    mapping(uint256 => uint256) public tokenStakedAt;
    mapping(address => uint) public claimTime;
    

    constructor(address _nft) ERC20("eruSwapToken", "ERU") {
        nft = IERC721(_nft);
        
    }

    function stake(uint256 tokenId) external {
        claimTime[msg.sender] = block.timestamp.add(1 weeks);
        nft.safeTransferFrom(msg.sender, address(this), tokenId);
        tokenOwnerOf[tokenId] = msg.sender;
        tokenStakedAt[tokenId] = block.timestamp;
    }

    function unstake(uint256 tokenId) external {
        require(tokenOwnerOf[tokenId] == msg.sender, "You can't unstake, this is not your token");
        nft.transferFrom(address(this), msg.sender, tokenId);
        delete tokenOwnerOf[tokenId];
        delete tokenStakedAt[tokenId];
    }

    function claimDividend(uint256 _tradingPrice, bool reward, uint128 percentage) external view returns (uint256) {
        require(block.timestamp > claimTime[msg.sender], "Claim time for Dividend has not elapsed.");
        uint128 bps = percentage * 100;
        uint256 discount = (_tradingPrice * bps)/10000;
        uint256 response;
        if (reward){
            response = add(_tradingPrice, discount);
        }
        else{
            response = subtract(_tradingPrice, discount);
        }
        return response;
    }

     function add(uint256 price, uint256 discount) pure public returns (uint256) {
        return(price.add(discount));
    }
   
    function subtract(uint256 price, uint256 discount) pure public returns (uint256) {
        return(price.sub(discount));
    }
}