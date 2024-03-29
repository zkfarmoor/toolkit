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

export enum TokenStandard {
  NonFungible,
  FungibleAsset,
  Fungible,
  NonFungibleEdition,
  ProgrammableNonFungible,
  ProgrammableNonFungibleEdition,
}

export type TokenStandardArgs = TokenStandard;

export function getTokenStandardEncoder(): Encoder<TokenStandardArgs> {
  return getScalarEnumEncoder(TokenStandard);
}

export function getTokenStandardDecoder(): Decoder<TokenStandard> {
  return getScalarEnumDecoder(TokenStandard);
}

export function getTokenStandardCodec(): Codec<
  TokenStandardArgs,
  TokenStandard
> {
  return combineCodec(getTokenStandardEncoder(), getTokenStandardDecoder());
}