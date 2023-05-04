import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './agreement-framework.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    AgreementCreated: new LogEvent<([id: string, termsHash: string, criteria: ethers.BigNumber, metadataURI: string, token: string] & {id: string, termsHash: string, criteria: ethers.BigNumber, metadataURI: string, token: string})>(
        abi, '0xf7cbeac7c87f7e00fcf9440cf10b123fb3d766366a39eeb572c219c8eac3ab46'
    ),
    AgreementDisputed: new LogEvent<([id: string, party: string] & {id: string, party: string})>(
        abi, '0xb67e3ac5aa7b56d61e366985ea94be26db935eca5c55e0359fd36c5852b6fa39'
    ),
    AgreementFinalized: new LogEvent<([id: string] & {id: string})>(
        abi, '0xc1efb9b165d126a4a64b456bec4ab69b7bf85d85e16aa5acda227f2ba88126c4'
    ),
    AgreementJoined: new LogEvent<([id: string, party: string, balance: ethers.BigNumber] & {id: string, party: string, balance: ethers.BigNumber})>(
        abi, '0x314e33b9d3471b9e382d2ab35ef89aa6e094c1be576ddd9090b5d7d1195cbf70'
    ),
    AgreementPositionUpdated: new LogEvent<([id: string, party: string, balance: ethers.BigNumber, status: number] & {id: string, party: string, balance: ethers.BigNumber, status: number})>(
        abi, '0xf478e398a575434f5cfcff203322ebf8e4a1f357653fcde0cf89762888e099b6'
    ),
    ArbitrationTransferred: new LogEvent<([newArbitrator: string] & {newArbitrator: string})>(
        abi, '0x15751365e25548da6591a182cf680d8c896ca976a2fd6e5f845bc86b4a81002f'
    ),
    OwnershipTransferred: new LogEvent<([user: string, newOwner: string] & {user: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
}

export const functions = {
    adjustPosition: new Func<[id: string, newPosition: ([party: string, balance: ethers.BigNumber] & {party: string, balance: ethers.BigNumber}), permit: ([permitted: ([token: string, amount: ethers.BigNumber] & {token: string, amount: ethers.BigNumber}), nonce: ethers.BigNumber, deadline: ethers.BigNumber] & {permitted: ([token: string, amount: ethers.BigNumber] & {token: string, amount: ethers.BigNumber}), nonce: ethers.BigNumber, deadline: ethers.BigNumber}), signature: string], {id: string, newPosition: ([party: string, balance: ethers.BigNumber] & {party: string, balance: ethers.BigNumber}), permit: ([permitted: ([token: string, amount: ethers.BigNumber] & {token: string, amount: ethers.BigNumber}), nonce: ethers.BigNumber, deadline: ethers.BigNumber] & {permitted: ([token: string, amount: ethers.BigNumber] & {token: string, amount: ethers.BigNumber}), nonce: ethers.BigNumber, deadline: ethers.BigNumber}), signature: string}, []>(
        abi, '0x5541e684'
    ),
    agreementData: new Func<[id: string], {id: string}, ([termsHash: string, criteria: ethers.BigNumber, metadataURI: string, token: string, balance: ethers.BigNumber, status: number] & {termsHash: string, criteria: ethers.BigNumber, metadataURI: string, token: string, balance: ethers.BigNumber, status: number})>(
        abi, '0x33099405'
    ),
    agreementPositions: new Func<[id: string], {id: string}, Array<([party: string, balance: ethers.BigNumber, deposit: ethers.BigNumber, status: number] & {party: string, balance: ethers.BigNumber, deposit: ethers.BigNumber, status: number})>>(
        abi, '0xac41b751'
    ),
    arbitrator: new Func<[], {}, string>(
        abi, '0x6cc6cde1'
    ),
    createAgreement: new Func<[params: ([termsHash: string, criteria: ethers.BigNumber, metadataURI: string, token: string] & {termsHash: string, criteria: ethers.BigNumber, metadataURI: string, token: string}), salt: string], {params: ([termsHash: string, criteria: ethers.BigNumber, metadataURI: string, token: string] & {termsHash: string, criteria: ethers.BigNumber, metadataURI: string, token: string}), salt: string}, string>(
        abi, '0x8f34a859'
    ),
    deposits: new Func<[], {}, ([token: string, amount: ethers.BigNumber, recipient: string] & {token: string, amount: ethers.BigNumber, recipient: string})>(
        abi, '0x323a5e0b'
    ),
    disputeAgreement: new Func<[id: string], {id: string}, []>(
        abi, '0x061ab0bc'
    ),
    finalizeAgreement: new Func<[id: string], {id: string}, []>(
        abi, '0x8135fe23'
    ),
    joinAgreement: new Func<[id: string, resolver: ([account: string, balance: ethers.BigNumber, proof: Array<string>] & {account: string, balance: ethers.BigNumber, proof: Array<string>}), permit: ([permitted: Array<([token: string, amount: ethers.BigNumber] & {token: string, amount: ethers.BigNumber})>, nonce: ethers.BigNumber, deadline: ethers.BigNumber] & {permitted: Array<([token: string, amount: ethers.BigNumber] & {token: string, amount: ethers.BigNumber})>, nonce: ethers.BigNumber, deadline: ethers.BigNumber}), signature: string], {id: string, resolver: ([account: string, balance: ethers.BigNumber, proof: Array<string>] & {account: string, balance: ethers.BigNumber, proof: Array<string>}), permit: ([permitted: Array<([token: string, amount: ethers.BigNumber] & {token: string, amount: ethers.BigNumber})>, nonce: ethers.BigNumber, deadline: ethers.BigNumber] & {permitted: Array<([token: string, amount: ethers.BigNumber] & {token: string, amount: ethers.BigNumber})>, nonce: ethers.BigNumber, deadline: ethers.BigNumber}), signature: string}, []>(
        abi, '0x1bd747a2'
    ),
    joinAgreementApproved: new Func<[id: string, resolver: ([account: string, balance: ethers.BigNumber, proof: Array<string>] & {account: string, balance: ethers.BigNumber, proof: Array<string>})], {id: string, resolver: ([account: string, balance: ethers.BigNumber, proof: Array<string>] & {account: string, balance: ethers.BigNumber, proof: Array<string>})}, []>(
        abi, '0xa37ee28c'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    permit2: new Func<[], {}, string>(
        abi, '0x12261ee7'
    ),
    setUp: new Func<[arbitrator_: string, deposits_: ([token: string, amount: ethers.BigNumber, recipient: string] & {token: string, amount: ethers.BigNumber, recipient: string})], {arbitrator_: string, deposits_: ([token: string, amount: ethers.BigNumber, recipient: string] & {token: string, amount: ethers.BigNumber, recipient: string})}, []>(
        abi, '0xaf0f9df3'
    ),
    settleDispute: new Func<[id: string, settlement: Array<([party: string, balance: ethers.BigNumber] & {party: string, balance: ethers.BigNumber})>], {id: string, settlement: Array<([party: string, balance: ethers.BigNumber] & {party: string, balance: ethers.BigNumber})>}, []>(
        abi, '0x3d3e73d7'
    ),
    transferArbitration: new Func<[newArbitrator: string], {newArbitrator: string}, []>(
        abi, '0xab4f5678'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    withdrawFromAgreement: new Func<[id: string], {id: string}, []>(
        abi, '0x186799a4'
    ),
}

export class Contract extends ContractBase {

    agreementData(id: string): Promise<([termsHash: string, criteria: ethers.BigNumber, metadataURI: string, token: string, balance: ethers.BigNumber, status: number] & {termsHash: string, criteria: ethers.BigNumber, metadataURI: string, token: string, balance: ethers.BigNumber, status: number})> {
        return this.eth_call(functions.agreementData, [id])
    }

    agreementPositions(id: string): Promise<Array<([party: string, balance: ethers.BigNumber, deposit: ethers.BigNumber, status: number] & {party: string, balance: ethers.BigNumber, deposit: ethers.BigNumber, status: number})>> {
        return this.eth_call(functions.agreementPositions, [id])
    }

    arbitrator(): Promise<string> {
        return this.eth_call(functions.arbitrator, [])
    }

    deposits(): Promise<([token: string, amount: ethers.BigNumber, recipient: string] & {token: string, amount: ethers.BigNumber, recipient: string})> {
        return this.eth_call(functions.deposits, [])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    permit2(): Promise<string> {
        return this.eth_call(functions.permit2, [])
    }
}
