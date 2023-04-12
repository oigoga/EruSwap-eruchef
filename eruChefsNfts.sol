// SPDX-License-Identifier: MIT LICENSE
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";


contract EruChefs is ERC721Enumerable, Ownable {

    using Strings for uint256;
    using SafeMath for uint256;
    

    string private baseExtension;
    uint256 public maxSupply;
    uint256 public nftPrice;
    uint256 public maxPerMint = 10;
    uint256 public maxPerWallet = 10;
    uint256 public maxNftReserved = 100;
    bool public isSaleActive;
    uint256 public reservedNftAmount;
    address payable public withdrawWallet;
   

    mapping(address => uint256) public originalMinters;

    constructor(uint256 _maxSupply, uint256 _nftPrice) ERC721("EruChefs NFTs", "ECN") {
        maxSupply = _maxSupply;
        nftPrice = _nftPrice;
        uint256 supply = totalSupply();
        
        //_baseURI = "https://ipfs.io/ipfs/QmahKj76NfY3J8PXtY59qV8ZmgTvTQBtW1oVzajdL3SemU?filename=Eru-nft.json";
        for(uint256 i = 1; i <= maxNftReserved; i++) {
            _safeMint(msg.sender, i);
        }
        supply = maxNftReserved;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseExtension;
    }
   
    function baseURI() external view returns (string memory) {
        return _baseURI();
    }

    function setBaseURI(string memory baseURI_) external onlyOwner {
        baseExtension = baseURI_;
    }

    function setNftPrice(uint256 _nftPrice) external onlyOwner {
        nftPrice = _nftPrice;
    }

    function flipSaleState() external onlyOwner {
        isSaleActive = !isSaleActive;
    }

    function withdraw() external onlyOwner {
        (bool success, ) = withdrawWallet.call{value: address(this).balance }("");
        require(success, "Withdrawal failed");
    }

    function reserveNFTs(address _to, uint256 _amount) external onlyOwner {
     require(
        reservedNftAmount.add(_amount) < maxNftReserved, "Not enough NFTs"
     );
     for (uint i = 0; i < _amount; i++) {
          if (totalSupply() < maxSupply) {
                _safeMint(_to, totalSupply());
            }
        }
        reservedNftAmount = reservedNftAmount.add(_amount);
    }

    function walletOfOwner(address _owner)public view returns (uint256[] memory) {
            uint256 ownerTokenCount = balanceOf(_owner);
            if (ownerTokenCount == 0) {
            return new uint256[](0);
        } else {
            uint256[] memory result = new uint256[](ownerTokenCount);
            for (uint256 index; index < ownerTokenCount; index++) {
                result[index] = tokenOfOwnerByIndex(_owner, index);
            }
            return result;
        }
    }
    
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
 
        string memory currentBaseURI = _baseURI();
        return bytes(currentBaseURI).length > 0
            ? string(abi.encodePacked(currentBaseURI, tokenId.toString(), baseExtension))
            : "";
        }

    function mintOriginsPassPublic(uint256 amount) public payable {
        require(isSaleActive, "The sale is not yet active.");
        require(amount <= maxPerMint, "You can not mint more than 20 NFTs at a time");
        require(balanceOf(msg.sender).add(amount) <= 20, "Maximum Mint Per Wallet is 20 NFTs");
        require(nftPrice.mul(amount) == msg.value, "Incorrect Value");

        originalMinters[msg.sender] = originalMinters[msg.sender].add(amount);
        _mintTo(msg.sender, amount);
    }

    function _mintTo(address account, uint amount) internal {
        require(totalSupply().add(amount) <= maxSupply, "Max supply exceeded.");

        for (uint256 i = 0; i < amount; i++) {
            if (totalSupply() < maxSupply) {
                _safeMint(account, totalSupply());
            }
        }
    }     
}