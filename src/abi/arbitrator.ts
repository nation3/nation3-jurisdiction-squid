import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './arbitrator.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    ControlTransferred: new LogEvent<([user: string, newController: string] & {user: string, newController: string})>(
        abi, '0xa06677f7b64342b4bcbde423684dbdb5356acfe41ad0285b6ecbe6dc4bf427f2'
    ),
    OwnershipTransferred: new LogEvent<([user: string, newOwner: string] & {user: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    ResolutionAppealed: new LogEvent<([resolution: string, settlement: string, account: string] & {resolution: string, settlement: string, account: string})>(
        abi, '0x2a41d71ad20bb81193ade4a1c1c4796777ba30f92f48c41fce7eeb361e109b0e'
    ),
    ResolutionEndorsed: new LogEvent<([resolution: string, settlement: string] & {resolution: string, settlement: string})>(
        abi, '0xb6dc686a67a9620536a83f729428ef64a3e6529407d6b5e0df3426fe6b01a260'
    ),
    ResolutionExecuted: new LogEvent<([resolution: string, settlement: string] & {resolution: string, settlement: string})>(
        abi, '0xeb0ed49da371fcf5b9313864d8c92a2130bd637affe927c057a55a06905d0cd4'
    ),
    ResolutionSubmitted: new LogEvent<([framework: string, dispute: string, resolution: string, settlement: string] & {framework: string, dispute: string, resolution: string, settlement: string})>(
        abi, '0x96eab3103fbd8c0266eca3e7a57929bc3bd66ef5223e2cb45f589f884ffcb9ae'
    ),
}

export const functions = {
    appealResolution: new Func<[id: string, settlement: Array<([party: string, balance: ethers.BigNumber] & {party: string, balance: ethers.BigNumber})>, permit: ([permitted: ([token: string, amount: ethers.BigNumber] & {token: string, amount: ethers.BigNumber}), nonce: ethers.BigNumber, deadline: ethers.BigNumber] & {permitted: ([token: string, amount: ethers.BigNumber] & {token: string, amount: ethers.BigNumber}), nonce: ethers.BigNumber, deadline: ethers.BigNumber}), signature: string], {id: string, settlement: Array<([party: string, balance: ethers.BigNumber] & {party: string, balance: ethers.BigNumber})>, permit: ([permitted: ([token: string, amount: ethers.BigNumber] & {token: string, amount: ethers.BigNumber}), nonce: ethers.BigNumber, deadline: ethers.BigNumber] & {permitted: ([token: string, amount: ethers.BigNumber] & {token: string, amount: ethers.BigNumber}), nonce: ethers.BigNumber, deadline: ethers.BigNumber}), signature: string}, []>(
        abi, '0x41bcf4dc'
    ),
    controller: new Func<[], {}, string>(
        abi, '0xf77c4791'
    ),
    enabled: new Func<[], {}, boolean>(
        abi, '0x238dafe0'
    ),
    endorseResolution: new Func<[id: string, settlement: string], {id: string, settlement: string}, []>(
        abi, '0xe44cb37b'
    ),
    executeResolution: new Func<[framework: string, dispute: string, settlement: Array<([party: string, balance: ethers.BigNumber] & {party: string, balance: ethers.BigNumber})>], {framework: string, dispute: string, settlement: Array<([party: string, balance: ethers.BigNumber] & {party: string, balance: ethers.BigNumber})>}, []>(
        abi, '0x2f7f204e'
    ),
    lockPeriod: new Func<[], {}, ethers.BigNumber>(
        abi, '0x3fd8b02f'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    permit2: new Func<[], {}, string>(
        abi, '0x12261ee7'
    ),
    resolutionDetails: new Func<[id: string], {id: string}, ([status: number, settlement: string, metadataURI: string, unlockTime: ethers.BigNumber] & {status: number, settlement: string, metadataURI: string, unlockTime: ethers.BigNumber})>(
        abi, '0xec67b8c8'
    ),
    setEnabled: new Func<[status: boolean], {status: boolean}, []>(
        abi, '0x328d8f72'
    ),
    setUp: new Func<[lockPeriod_: ethers.BigNumber, enabled_: boolean, deposits_: ([token: string, amount: ethers.BigNumber, recipient: string] & {token: string, amount: ethers.BigNumber, recipient: string})], {lockPeriod_: ethers.BigNumber, enabled_: boolean, deposits_: ([token: string, amount: ethers.BigNumber, recipient: string] & {token: string, amount: ethers.BigNumber, recipient: string})}, []>(
        abi, '0x410fa8e6'
    ),
    submitResolution: new Func<[framework: string, dispute: string, metadataURI: string, settlement: Array<([party: string, balance: ethers.BigNumber] & {party: string, balance: ethers.BigNumber})>], {framework: string, dispute: string, metadataURI: string, settlement: Array<([party: string, balance: ethers.BigNumber] & {party: string, balance: ethers.BigNumber})>}, string>(
        abi, '0x02fd597d'
    ),
    transferController: new Func<[newController: string], {newController: string}, []>(
        abi, '0xe8ea054b'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
}

export class Contract extends ContractBase {

    controller(): Promise<string> {
        return this.eth_call(functions.controller, [])
    }

    enabled(): Promise<boolean> {
        return this.eth_call(functions.enabled, [])
    }

    lockPeriod(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.lockPeriod, [])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    permit2(): Promise<string> {
        return this.eth_call(functions.permit2, [])
    }

    resolutionDetails(id: string): Promise<([status: number, settlement: string, metadataURI: string, unlockTime: ethers.BigNumber] & {status: number, settlement: string, metadataURI: string, unlockTime: ethers.BigNumber})> {
        return this.eth_call(functions.resolutionDetails, [id])
    }
}
