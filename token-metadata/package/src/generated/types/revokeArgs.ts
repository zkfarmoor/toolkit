/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Codec,
  Decoder,
  Encoder,
  combineCodec,
  getScalarEnumDecoder,
  getScalarEnumEncoder,
} from '@solana/codecs';

export enum RevokeArgs {
  CollectionV1,
  SaleV1,
  TransferV1,
  DataV1,
  UtilityV1,
  StakingV1,
  StandardV1,
  LockedTransferV1,
  ProgrammableConfigV1,
  MigrationV1,
  AuthorityItemV1,
  DataItemV1,
  CollectionItemV1,
  ProgrammableConfigItemV1,
}

export type RevokeArgsArgs = RevokeArgs;

export function getRevokeArgsEncoder(): Encoder<RevokeArgsArgs> {
  return getScalarEnumEncoder(RevokeArgs);
}

export function getRevokeArgsDecoder(): Decoder<RevokeArgs> {
  return getScalarEnumDecoder(RevokeArgs);
}

export function getRevokeArgsCodec(): Codec<RevokeArgsArgs, RevokeArgs> {
  return combineCodec(getRevokeArgsEncoder(), getRevokeArgsDecoder());
}
