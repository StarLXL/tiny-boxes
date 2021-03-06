/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { Contract, ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import { ContractEvent, Callback, TransactionObject, BlockType } from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export class TinyBoxesFull extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  clone(): TinyBoxesFull;
  methods: {
    ADMIN_ROLE(): TransactionObject<string>;

    ANIMATION_COUNT(): TransactionObject<string>;

    ANIMATOR_ROLE(): TransactionObject<string>;

    ARTIST_PRINTS(): TransactionObject<string>;

    ARTIST_ROLE(): TransactionObject<string>;

    BETA_SALE_CAP(): TransactionObject<string>;

    DEFAULT_ADMIN_ROLE(): TransactionObject<string>;

    LINK_ROLE(): TransactionObject<string>;

    TOKEN_LIMIT(): TransactionObject<string>;

    TREASURER_ROLE(): TransactionObject<string>;

    VRF_ROLE(): TransactionObject<string>;

    approve(to: string, tokenId: number | string): TransactionObject<void>;

    aproveLINKWithdraws(account: string): TransactionObject<void>;

    balanceOf(owner: string): TransactionObject<string>;

    baseURI(): TransactionObject<string>;

    buy(
      _seed: string,
      counts: (number | string)[],
      dials: (number | string)[],
      mirrors: boolean[]
    ): TransactionObject<string>;

    currentLinkPrice(): TransactionObject<string>;

    currentPrice(): TransactionObject<string>;

    fulfillRandomness(
      requestId: string | number[],
      randomness: number | string
    ): TransactionObject<void>;

    getApproved(tokenId: number | string): TransactionObject<string>;

    getRoleAdmin(role: string | number[]): TransactionObject<string>;

    getRoleMember(
      role: string | number[],
      index: number | string
    ): TransactionObject<string>;

    getRoleMemberCount(role: string | number[]): TransactionObject<string>;

    grantRole(
      role: string | number[],
      account: string
    ): TransactionObject<void>;

    hasRole(
      role: string | number[],
      account: string
    ): TransactionObject<boolean>;

    isApprovedForAll(
      owner: string,
      operator: string
    ): TransactionObject<boolean>;

    linkPremium(): TransactionObject<string>;

    linkPriceAt(_id: number | string): TransactionObject<string>;

    name(): TransactionObject<string>;

    nonces(arg0: string | number[]): TransactionObject<string>;

    onTokenTransfer(
      from: string,
      amount: number | string,
      data: string | number[]
    ): TransactionObject<boolean>;

    ownerOf(tokenId: number | string): TransactionObject<string>;

    perpetualRenderer(
      box: {
        seed: number | string;
        randomness: number | string;
        animation: number | string;
        shapes: number | string;
        colors: number | string;
        hatching: number | string;
        scale: number | string;
        mirrorPositions: (number | string)[];
        size: (number | string)[];
        spacing: (number | string)[];
        mirrors: boolean[];
      },
      frame: number | string
    ): TransactionObject<string>;

    priceAt(_id: number | string): TransactionObject<string>;

    priceIncrease(): TransactionObject<string>;

    renounceRole(
      role: string | number[],
      account: string
    ): TransactionObject<void>;

    requestRandomness(
      _keyHash: string | number[],
      _fee: number | string,
      _seed: number | string
    ): TransactionObject<string>;

    revokeRole(
      role: string | number[],
      account: string
    ): TransactionObject<void>;

    safeTransferFrom(
      from: string,
      to: string,
      tokenId: number | string
    ): TransactionObject<void>;

    setApprovalForAll(
      operator: string,
      approved: boolean
    ): TransactionObject<void>;

    startPrice(): TransactionObject<string>;

    supportsInterface(
      interfaceId: string | number[]
    ): TransactionObject<boolean>;

    symbol(): TransactionObject<string>;

    tokenArt(_id: number | string): TransactionObject<string>;

    tokenByIndex(index: number | string): TransactionObject<string>;

    tokenData(
      _id: number | string
    ): TransactionObject<{
      seed: string;
      randomness: string;
      animation: string;
      colors: string;
      shapes: string;
      hatching: string;
      size: string[];
      spacing: string[];
      mirrorPositions: string[];
      mirrors: boolean[];
      scale: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string[];
      7: string[];
      8: string[];
      9: boolean[];
      10: string;
    }>;

    tokenFrame(
      _id: number | string,
      _frame: number | string
    ): TransactionObject<string>;

    tokenOfOwnerByIndex(
      owner: string,
      index: number | string
    ): TransactionObject<string>;

    tokenPreview(
      _seed: string,
      counts: (number | string)[],
      dials: (number | string)[],
      mirrors: boolean[]
    ): TransactionObject<string>;

    tokenURI(tokenId: number | string): TransactionObject<string>;

    totalSupply(): TransactionObject<string>;

    transferFrom(
      from: string,
      to: string,
      tokenId: number | string
    ): TransactionObject<void>;

    updateURI(_id: number | string, _uri: string): TransactionObject<void>;

    withdrawLINK(amount: number | string): TransactionObject<boolean>;
  };
  events: {
    Approval: ContractEvent<{
      owner: string;
      approved: string;
      tokenId: string;
      0: string;
      1: string;
      2: string;
    }>;
    ApprovalForAll: ContractEvent<{
      owner: string;
      operator: string;
      approved: boolean;
      0: string;
      1: string;
      2: boolean;
    }>;
    ChainlinkCancelled: ContractEvent<string>;
    ChainlinkFulfilled: ContractEvent<string>;
    ChainlinkRequested: ContractEvent<string>;
    RoleGranted: ContractEvent<{
      role: string;
      account: string;
      sender: string;
      0: string;
      1: string;
      2: string;
    }>;
    RoleRevoked: ContractEvent<{
      role: string;
      account: string;
      sender: string;
      0: string;
      1: string;
      2: string;
    }>;
    Transfer: ContractEvent<{
      from: string;
      to: string;
      tokenId: string;
      0: string;
      1: string;
      2: string;
    }>;
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
