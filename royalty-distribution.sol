// SPDX-License-Identifier:MIT
pragma solidity ^0.8.8;

contract RoyaltyShare{
    uint adminCost;
    uint royaltyTotal;
    uint totalPayout;
    bool claimable=false;
    uint adminShare;
    uint availablePercent=100-adminShare;
    mapping (address=>uint) userShares;
    
    address internal _owner;
    address internal _admin;
    constructor () {
        _owner=msg.sender;
    }
    modifier onlyOwner {
      require(msg.sender == _owner);
      _;
   }
   modifier onlyAdmin {
      require(msg.sender == _admin);
      _;
   }
   function setAdmin(address admin) external onlyOwner{
       _admin=admin;
   }
    
    function deduceCost(uint value) external onlyAdmin {
        adminCost-=value;
    }
    function addCost(uint value) external onlyAdmin{
        adminCost+=value;
    }
    function nullifyCost() external onlyAdmin{
         adminCost=0;
    } 
    function countShare() external returns(uint){

    }
    function addUser(address _newMember, uint _share) external onlyAdmin{
        require(availablePercent-_share>0,"review distributed percentage");
        userShares[_newMember]=_share;
         availablePercent-=_share;
        
    }
    function setAdminShare(uint _share) external onlyAdmin {
        adminShare=_share;
    }
    function provideRoyalty(uint _amount) external payable {
        royaltyTotal=address(this).balance;
        royaltyTotal+=_amount;
        if (adminCost>=royaltyTotal){
            totalPayout=0;
        } else {totalPayout=royaltyTotal-adminCost;
                claimable=true;}
    }
    function claimShare() external payable {
        require(claimable);
      
        require(userShares[msg.sender]>0,"you dont have any share");
        address payable to=payable(msg.sender);
        to.transfer(userShares[msg.sender]*totalPayout/100);
        userShares[msg.sender]=0;

    }




}
