/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  combineCodec,
  getAddressDecoder,
  getAddressEncoder,
  getStructDecoder,
  getStructEncoder,
  getU64Decoder,
  getU64Encoder,
  type Address,
  type Codec,
  type Decoder,
  type Encoder,
} from '@solana/web3.js';

export type Creator = {
  /** creator address */
  address: Address;
  /** token amount that creator can claim */
  claimAmount: bigint;
};

export type CreatorArgs = {
  /** creator address */
  address: Address;
  /** token amount that creator can claim */
  claimAmount: number | bigint;
};

export function getCreatorEncoder(): Encoder<CreatorArgs> {
  return getStructEncoder([
    ['address', getAddressEncoder()],
    ['claimAmount', getU64Encoder()],
  ]);
}

export function getCreatorDecoder(): Decoder<Creator> {
  return getStructDecoder([
    ['address', getAddressDecoder()],
    ['claimAmount', getU64Decoder()],
  ]);
}

export function getCreatorCodec(): Codec<CreatorArgs, Creator> {
  return combineCodec(getCreatorEncoder(), getCreatorDecoder());
}
