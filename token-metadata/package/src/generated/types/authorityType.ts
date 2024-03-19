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

export enum AuthorityType {
  None,
  Metadata,
  Holder,
  MetadataDelegate,
  TokenDelegate,
}

export type AuthorityTypeArgs = AuthorityType;

export function getAuthorityTypeEncoder(): Encoder<AuthorityTypeArgs> {
  return getScalarEnumEncoder(AuthorityType);
}

export function getAuthorityTypeDecoder(): Decoder<AuthorityType> {
  return getScalarEnumDecoder(AuthorityType);
}

export function getAuthorityTypeCodec(): Codec<
  AuthorityTypeArgs,
  AuthorityType
> {
  return combineCodec(getAuthorityTypeEncoder(), getAuthorityTypeDecoder());
}
