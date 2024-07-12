/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  Codec,
  Decoder,
  Encoder,
  combineCodec,
  getStructDecoder,
  getStructEncoder,
  getU128Decoder,
  getU128Encoder,
  getU16Decoder,
  getU16Encoder,
  getU64Decoder,
  getU64Encoder,
} from '@solana/web3.js';

export type PlaceEvent = {
  index: number;
  orderSequenceNumber: bigint;
  clientOrderId: bigint;
  priceInTicks: bigint;
  baseLotsPlaced: bigint;
};

export type PlaceEventArgs = {
  index: number;
  orderSequenceNumber: number | bigint;
  clientOrderId: number | bigint;
  priceInTicks: number | bigint;
  baseLotsPlaced: number | bigint;
};

export function getPlaceEventEncoder(): Encoder<PlaceEventArgs> {
  return getStructEncoder([
    ['index', getU16Encoder()],
    ['orderSequenceNumber', getU64Encoder()],
    ['clientOrderId', getU128Encoder()],
    ['priceInTicks', getU64Encoder()],
    ['baseLotsPlaced', getU64Encoder()],
  ]);
}

export function getPlaceEventDecoder(): Decoder<PlaceEvent> {
  return getStructDecoder([
    ['index', getU16Decoder()],
    ['orderSequenceNumber', getU64Decoder()],
    ['clientOrderId', getU128Decoder()],
    ['priceInTicks', getU64Decoder()],
    ['baseLotsPlaced', getU64Decoder()],
  ]);
}

export function getPlaceEventCodec(): Codec<PlaceEventArgs, PlaceEvent> {
  return combineCodec(getPlaceEventEncoder(), getPlaceEventDecoder());
}
