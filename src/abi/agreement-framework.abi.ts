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
        "name": "AgreementIsDisputed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "AgreementIsFinalized",
        "inputs": []
    },
    {
        "type": "error",
        "name": "AgreementNotDisputed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "AgreementNotFinalized",
        "inputs": []
    },
    {
        "type": "error",
        "name": "AlreadyExistentAgreement",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidBalance",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidCriteria",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidPermit",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NoPartOfAgreement",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NonExistentAgreement",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OnlyArbitrator",
        "inputs": []
    },
    {
        "type": "error",
        "name": "PartyAlreadyFinalized",
        "inputs": []
    },
    {
        "type": "error",
        "name": "PartyAlreadyJoined",
        "inputs": []
    },
    {
        "type": "error",
        "name": "SettlementBalanceMustMatch",
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
        "type": "error",
        "name": "UnsafeCast",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AgreementCreated",
        "inputs": [
            {
                "type": "bytes32",
                "name": "id",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "termsHash",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "criteria",
                "indexed": false
            },
            {
                "type": "string",
                "name": "metadataURI",
                "indexed": false
            },
            {
                "type": "address",
                "name": "token",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AgreementDisputed",
        "inputs": [
            {
                "type": "bytes32",
                "name": "id",
                "indexed": true
            },
            {
                "type": "address",
                "name": "party",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AgreementFinalized",
        "inputs": [
            {
                "type": "bytes32",
                "name": "id",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AgreementJoined",
        "inputs": [
            {
                "type": "bytes32",
                "name": "id",
                "indexed": true
            },
            {
                "type": "address",
                "name": "party",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "balance",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AgreementPositionUpdated",
        "inputs": [
            {
                "type": "bytes32",
                "name": "id",
                "indexed": true
            },
            {
                "type": "address",
                "name": "party",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "balance",
                "indexed": false
            },
            {
                "type": "uint8",
                "name": "status",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ArbitrationTransferred",
        "inputs": [
            {
                "type": "address",
                "name": "newArbitrator",
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
        "type": "function",
        "name": "adjustPosition",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "id"
            },
            {
                "type": "tuple",
                "name": "newPosition",
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
        "name": "agreementData",
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
                "name": "data",
                "components": [
                    {
                        "type": "bytes32",
                        "name": "termsHash"
                    },
                    {
                        "type": "uint256",
                        "name": "criteria"
                    },
                    {
                        "type": "string",
                        "name": "metadataURI"
                    },
                    {
                        "type": "address",
                        "name": "token"
                    },
                    {
                        "type": "uint256",
                        "name": "balance"
                    },
                    {
                        "type": "uint8",
                        "name": "status"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "agreementPositions",
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
                "type": "tuple[]",
                "components": [
                    {
                        "type": "address",
                        "name": "party"
                    },
                    {
                        "type": "uint256",
                        "name": "balance"
                    },
                    {
                        "type": "uint256",
                        "name": "deposit"
                    },
                    {
                        "type": "uint8",
                        "name": "status"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "arbitrator",
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
        "name": "createAgreement",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "params",
                "components": [
                    {
                        "type": "bytes32",
                        "name": "termsHash"
                    },
                    {
                        "type": "uint256",
                        "name": "criteria"
                    },
                    {
                        "type": "string",
                        "name": "metadataURI"
                    },
                    {
                        "type": "address",
                        "name": "token"
                    }
                ]
            },
            {
                "type": "bytes32",
                "name": "salt"
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
        "name": "deposits",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
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
    },
    {
        "type": "function",
        "name": "disputeAgreement",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "id"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "finalizeAgreement",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "id"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "joinAgreement",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "id"
            },
            {
                "type": "tuple",
                "name": "resolver",
                "components": [
                    {
                        "type": "address",
                        "name": "account"
                    },
                    {
                        "type": "uint256",
                        "name": "balance"
                    },
                    {
                        "type": "bytes32[]",
                        "name": "proof"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "permit",
                "components": [
                    {
                        "type": "tuple[]",
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
        "name": "joinAgreementApproved",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "id"
            },
            {
                "type": "tuple",
                "name": "resolver",
                "components": [
                    {
                        "type": "address",
                        "name": "account"
                    },
                    {
                        "type": "uint256",
                        "name": "balance"
                    },
                    {
                        "type": "bytes32[]",
                        "name": "proof"
                    }
                ]
            }
        ],
        "outputs": []
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
        "name": "setUp",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "arbitrator_"
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
        "name": "settleDispute",
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
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "transferArbitration",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newArbitrator"
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
    },
    {
        "type": "function",
        "name": "withdrawFromAgreement",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "id"
            }
        ],
        "outputs": []
    }
]
