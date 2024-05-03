// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Web3MarketingAgency {
    address public owner;
    uint256 public totalClients;
    mapping(address => Client) public clients;
    
    struct Client {
        string name;
        string website;
        string socialMediaHandle;
        string latestDefiInformation;
    }
    
    event ClientRegistered(address indexed clientAddress, string name, string website, string socialMediaHandle);
    event DefiInformationUpdated(address indexed clientAddress, string latestDefiInformation);
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can perform this action");
        _;
    }
    
    constructor() {
        owner = msg.sender;
    }
    
    function registerClient(string memory _name, string memory _website, string memory _socialMediaHandle) external {
        require(bytes(clients[msg.sender].website).length == 0, "Client already registered");
        
        Client memory newClient = Client({
            name: _name,
            website: _website,
            socialMediaHandle: _socialMediaHandle,
            latestDefiInformation: ""
        });
        
        clients[msg.sender] = newClient;
        totalClients++;
        
        emit ClientRegistered(msg.sender, _name, _website, _socialMediaHandle);
    }
    
    function updateDefiInformation(string memory _latestDefiInformation) external {
        require(bytes(clients[msg.sender].website).length > 0, "Client not registered");
        
        clients[msg.sender].latestDefiInformation = _latestDefiInformation;
        
        emit DefiInformationUpdated(msg.sender, _latestDefiInformation);
    }
}
