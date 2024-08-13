/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  Address,
  Codec,
  Decoder,
  Encoder,
  combineCodec,
  getAddressDecoder,
  getAddressEncoder,
  getArrayDecoder,
  getArrayEncoder,
  getStructDecoder,
  getStructEncoder,
  getU64Decoder,
  getU64Encoder,
} from '@solana/web3.js';

export type Seat = {
  discriminant: bigint;
  market: Address;
  trader: Address;
  approvalStatus: bigint;
  padding: Array<bigint>;
};

export type SeatArgs = {
  discriminant: number | bigint;
  market: Address;
  trader: Address;
  approvalStatus: number | bigint;
  padding: Array<number | bigint>;
};

export function getSeatEncoder(): Encoder<SeatArgs> {
  return getStructEncoder([
    ['discriminant', getU64Encoder()],
    ['market', getAddressEncoder()],
    ['trader', getAddressEncoder()],
    ['approvalStatus', getU64Encoder()],
    ['padding', getArrayEncoder(getU64Encoder(), { size: 6 })],
  ]);
}

export function getSeatDecoder(): Decoder<Seat> {
  return getStructDecoder([
    ['discriminant', getU64Decoder()],
    ['market', getAddressDecoder()],
    ['trader', getAddressDecoder()],
    ['approvalStatus', getU64Decoder()],
    ['padding', getArrayDecoder(getU64Decoder(), { size: 6 })],
  ]);
}

export function getSeatCodec(): Codec<SeatArgs, Seat> {
  return combineCodec(getSeatEncoder(), getSeatDecoder());
}