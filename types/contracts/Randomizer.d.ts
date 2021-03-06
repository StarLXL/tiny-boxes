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

export class Randomizer extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  clone(): Randomizer;
  methods: {
    ADMIN_ROLE(): TransactionObject<string>;

    CALLER_ROLE(): TransactionObject<string>;

    DEFAULT_ADMIN_ROLE(): TransactionObject<string>;

    chainedEntropy(
      salt: number | string,
      e: number | string
    ): TransactionObject<string>;

    deployModule(code: string | number[]): TransactionObject<void>;

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

    removeModule(_module: string): TransactionObject<void>;

    renounceRole(
      role: string | number[],
      account: string
    ): TransactionObject<void>;

    replaceModule(
      code: string | number[],
      target: string
    ): TransactionObject<void>;

    returnValue(): TransactionObject<string>;

    revokeRole(
      role: string | number[],
      account: string
    ): TransactionObject<void>;

    setLevels(levels: number | string): TransactionObject<void>;
  };
  events: {
    RoleAdminChanged: ContractEvent<{
      role: string;
      previousAdminRole: string;
      newAdminRole: string;
      0: string;
      1: string;
      2: string;
    }>;
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
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
