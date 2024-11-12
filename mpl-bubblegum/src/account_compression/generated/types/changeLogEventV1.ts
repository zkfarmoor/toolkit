/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  combineCodec,
  getAddressDecoder,
  getAddressEncoder,
  getArrayDecoder,
  getArrayEncoder,
  getStructDecoder,
  getStructEncoder,
  getU32Decoder,
  getU32Encoder,
  getU64Decoder,
  getU64Encoder,
  type Address,
  type Codec,
  type Decoder,
  type Encoder,
} from '@solana/web3.js';
import {
  getPathNodeDecoder,
  getPathNodeEncoder,
  type PathNode,
  type PathNodeArgs,
} from '.';

export type ChangeLogEventV1 = {
  /** Public key of the ConcurrentMerkleTree */
  id: Address;
  /** Nodes of off-chain merkle tree needed by indexer */
  path: Array<PathNode>;
  /**
   * Index corresponding to the number of successful operations on this tree.
   * Used by the off-chain indexer to figure out when there are gaps to be backfilled.
   */
  seq: bigint;
  /** Bitmap of node parity (used when hashing) */
  index: number;
};

export type ChangeLogEventV1Args = {
  /** Public key of the ConcurrentMerkleTree */
  id: Address;
  /** Nodes of off-chain merkle tree needed by indexer */
  path: Array<PathNodeArgs>;
  /**
   * Index corresponding to the number of successful operations on this tree.
   * Used by the off-chain indexer to figure out when there are gaps to be backfilled.
   */
  seq: number | bigint;
  /** Bitmap of node parity (used when hashing) */
  index: number;
};

export function getChangeLogEventV1Encoder(): Encoder<ChangeLogEventV1Args> {
  return getStructEncoder([
    ['id', getAddressEncoder()],
    ['path', getArrayEncoder(getPathNodeEncoder())],
    ['seq', getU64Encoder()],
    ['index', getU32Encoder()],
  ]);
}

export function getChangeLogEventV1Decoder(): Decoder<ChangeLogEventV1> {
  return getStructDecoder([
    ['id', getAddressDecoder()],
    ['path', getArrayDecoder(getPathNodeDecoder())],
    ['seq', getU64Decoder()],
    ['index', getU32Decoder()],
  ]);
}

export function getChangeLogEventV1Codec(): Codec<
  ChangeLogEventV1Args,
  ChangeLogEventV1
> {
  return combineCodec(
    getChangeLogEventV1Encoder(),
    getChangeLogEventV1Decoder()
  );
}
