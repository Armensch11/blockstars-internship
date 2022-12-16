// SPDX-License-Identifier:MIT
pragma solidity ^0.8.8;

contract MyPokes {
    struct Pokemon {

        string _name;
        string _sex;
        uint _age;
        uint _tokenId;
    }
    Pokemon[] pokemons;
    mapping (uint=>address) pokemonOwner;
    mapping (address=>uint[]) allMyPokes;
    mapping (address=>bool) allowedToMint;
    mapping (address=>bool) whiteList;
    
    address  _owner;
    uint fee = 1 ether;
    
    constructor () {
        _owner=msg.sender;
    }
    receive() payable external{}

    event Minted(address indexed _to, uint indexed _tokenId);
    event FeeReceived(address indexed _from, uint indexed _amount);

    function _mint(string memory _name, string memory _sex, uint _age,uint _tokenId) internal {
        
        require(pokemonOwner[_tokenId]==address(0),"this NFT is already minted");
        
        pokemonOwner[_tokenId]=msg.sender;
        pokemons.push(Pokemon(_name,_sex,_age,_tokenId));
        pokemonOwner[_tokenId]=msg.sender;
        allMyPokes[msg.sender].push(_tokenId);
        
    }
    function mintPokes(string memory name, string memory sex, uint age) payable external{
        require(msg.sender==_owner||allowedToMint[msg.sender]==true||whiteList[msg.sender]==true);
        if(msg.sender!=_owner){
                require(msg.value==fee);
                emit FeeReceived(msg.sender, msg.value);
        }
        uint tokenId=pokemons.length+1;
        _mint(name,sex,age,tokenId);
        emit Minted(msg.sender,tokenId);
        if (allowedToMint[msg.sender]==true) {
            removeFromAllowedList(msg.sender);
        }
        if (whiteList[msg.sender]==true) {
            removeFromWhiteList(msg.sender);
        }
            
        
    }
    function apporveToMint(address _whom) external{
        require(msg.sender==_owner);
        //require (msg.value==fee);
        allowedToMint[_whom]=true;
    }
    function removeFromAllowedList(address _address) internal {
        allowedToMint[_address]=false;
    }
    function giveMyPokes() external view returns (uint[] memory) {
        return allMyPokes[msg.sender];
    }
    function killThatPoke(uint _tokenId) payable external {
        require(msg.sender==pokemonOwner[_tokenId]);
        pokemonOwner[_tokenId]=address(this);
        uint len=allMyPokes[msg.sender].length;
        uint newLen=len-1;
        uint[] memory filteredArr = new uint[](newLen);
        uint j=0;
        for (uint i=0;i<len;i++){
            if(allMyPokes[msg.sender][i]!=_tokenId){
                filteredArr[j]=allMyPokes[msg.sender][i];
                j++;
            }
        }
        allMyPokes[msg.sender]=filteredArr;
        address payable _to=payable(msg.sender);
        _to.transfer(fee);
        
    }
    function addToWhiteList(address _whom) external {
        require(msg.sender==_owner,"you are not allowed to perform that action");
        whiteList[_whom]=true;

    }
    function removeFromWhiteList(address _address) internal{
        whiteList[_address]=false;
    }
 
   
}
