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

export class TinyBoxesRenderer extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  clone(): TinyBoxesRenderer;
  methods: {
    perpetualRenderer(
      box: {
        randomness: number | string;
        hue: number | string;
        saturation: number | string;
        lightness: number | string;
        shapes: number | string;
        hatching: number | string;
        widthMin: number | string;
        widthMax: number | string;
        heightMin: number | string;
        heightMax: number | string;
        spread: number | string;
        grid: number | string;
        mirroring: number | string;
        bkg: number | string;
        duration: number | string;
        options: number | string;
      },
      id: number | string,
      owner: string,
      dVals: (number | string)[],
      _slot: string
    ): TransactionObject<string>;

    renderToken(
      seed: string,
      color: (number | string)[],
      shapes: (number | string)[],
      size: (number | string)[],
      spacing: (number | string)[],
      mirroring: number | string,
      settings: (number | string)[],
      traits: (number | string)[],
      slot: string
    ): TransactionObject<string>;

    validateParams(
      shapes: number | string,
      hatching: number | string,
      color: (number | string)[],
      size: (number | string)[],
      position: (number | string)[],
      exclusive: boolean
    ): TransactionObject<void>;
  };
  events: {
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
