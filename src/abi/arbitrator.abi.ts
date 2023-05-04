export const ABI_JSON = [
    {
        "type": "constructor",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "permit2_"
            },
            {
                "type": "address",
                "name": "owner"
            }
        ]
    },
    {
        "type": "error",
        "name": "InvalidPermit",
        "inputs": []
    },
    {
        "type": "error",
        "name": "IsDisabled",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NoPartOfSettlement",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NonExistentResolution",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ResolutionIsAppealed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ResolutionIsEndorsed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ResolutionIsExecuted",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ResolutionIsLocked",
        "inputs": []
    },
    {
        "type": "error",
        "name": "SettlementPositionsMustMatch",
        "inputs": []
    },
    {
        "type": "error",
        "name": "Unauthorized",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ControlTransferred",
        "inputs": [
            {
                "type": "address",
                "name": "user",
                "indexed": true
            },
            {
                "type": "address",
                "name": "newController",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "type": "address",
                "name": "user",
                "indexed": true
            },
            {
                "type": "address",
                "name": "newOwner",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ResolutionAppealed",
        "inputs": [
            {
                "type": "bytes32",
                "name": "resolution",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "settlement",
                "indexed": false
            },
            {
                "type": "address",
                "name": "account",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ResolutionEndorsed",
        "inputs": [
            {
                "type": "bytes32",
                "name": "resolution",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "settlement",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ResolutionExecuted",
        "inputs": [
            {
                "type": "bytes32",
                "name": "resolution",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "settlement",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ResolutionSubmitted",
        "inputs": [
            {
                "type": "address",
                "name": "framework",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "dispute",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "resolution",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "settlement",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "appealResolution",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "id"
            },
            {
                "type": "tuple[]",
                "name": "settlement",
                "components": [
                    {
                        "type": "address",
                        "name": "party"
                    },
                    {
                        "type": "uint256",
                        "name": "balance"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "permit",
                "components": [
                    {
                        "type": "tuple",
                        "name": "permitted",
                        "components": [
                            {
                                "type": "address",
                                "name": "token"
                            },
                            {
                                "type": "uint256",
                                "name": "amount"
                            }
                        ]
                    },
                    {
                        "type": "uint256",
                        "name": "nonce"
                    },
                    {
                        "type": "uint256",
                        "name": "deadline"
                    }
                ]
            },
            {
                "type": "bytes",
                "name": "signature"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "controller",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "enabled",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "endorseResolution",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "id"
            },
            {
                "type": "bytes32",
                "name": "settlement"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "executeResolution",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "framework"
            },
            {
                "type": "bytes32",
                "name": "dispute"
            },
            {
                "type": "tuple[]",
                "name": "settlement",
                "components": [
                    {
                        "type": "address",
                        "name": "party"
                    },
                    {
                        "type": "uint256",
                        "name": "balance"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "lockPeriod",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "owner",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "permit2",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "resolutionDetails",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "id"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "details",
                "components": [
                    {
                        "type": "uint8",
                        "name": "status"
                    },
                    {
                        "type": "bytes32",
                        "name": "settlement"
                    },
                    {
                        "type": "string",
                        "name": "metadataURI"
                    },
                    {
                        "type": "uint256",
                        "name": "unlockTime"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "setEnabled",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bool",
                "name": "status"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setUp",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "lockPeriod_"
            },
            {
                "type": "bool",
                "name": "enabled_"
            },
            {
                "type": "tuple",
                "name": "deposits_",
                "components": [
                    {
                        "type": "address",
                        "name": "token"
                    },
                    {
                        "type": "uint256",
                        "name": "amount"
                    },
                    {
                        "type": "address",
                        "name": "recipient"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "submitResolution",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "framework"
            },
            {
                "type": "bytes32",
                "name": "dispute"
            },
            {
                "type": "string",
                "name": "metadataURI"
            },
            {
                "type": "tuple[]",
                "name": "settlement",
                "components": [
                    {
                        "type": "address",
                        "name": "party"
                    },
                    {
                        "type": "uint256",
                        "name": "balance"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": "id"
            }
        ]
    },
    {
        "type": "function",
        "name": "transferController",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newController"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "transferOwnership",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newOwner"
            }
        ],
        "outputs": []
    }
]
