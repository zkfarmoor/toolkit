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
  GetDiscriminatedUnionVariant,
  GetDiscriminatedUnionVariantContent,
  combineCodec,
  getAddressDecoder,
  getAddressEncoder,
  getDiscriminatedUnionDecoder,
  getDiscriminatedUnionEncoder,
  getStructDecoder,
  getStructEncoder,
  getUnitDecoder,
  getUnitEncoder,
} from '@solana/web3.js';

export type Authority =
  | { __kind: 'None' }
  | { __kind: 'Owner' }
  | { __kind: 'UpdateAuthority' }
  | { __kind: 'Address'; address: Address };

export type AuthorityArgs = Authority;

export function getAuthorityEncoder(): Encoder<AuthorityArgs> {
  return getDiscriminatedUnionEncoder([
    ['None', getUnitEncoder()],
    ['Owner', getUnitEncoder()],
    ['UpdateAuthority', getUnitEncoder()],
    ['Address', getStructEncoder([['address', getAddressEncoder()]])],
  ]);
}

export function getAuthorityDecoder(): Decoder<Authority> {
  return getDiscriminatedUnionDecoder([
    ['None', getUnitDecoder()],
    ['Owner', getUnitDecoder()],
    ['UpdateAuthority', getUnitDecoder()],
    ['Address', getStructDecoder([['address', getAddressDecoder()]])],
  ]);
}

export function getAuthorityCodec(): Codec<AuthorityArgs, Authority> {
  return combineCodec(getAuthorityEncoder(), getAuthorityDecoder());
}

// Data Enum Helpers.
export function authority(
  kind: 'None'
): GetDiscriminatedUnionVariant<AuthorityArgs, '__kind', 'None'>;
export function authority(
  kind: 'Owner'
): GetDiscriminatedUnionVariant<AuthorityArgs, '__kind', 'Owner'>;
export function authority(
  kind: 'UpdateAuthority'
): GetDiscriminatedUnionVariant<AuthorityArgs, '__kind', 'UpdateAuthority'>;
export function authority(
  kind: 'Address',
  data: GetDiscriminatedUnionVariantContent<AuthorityArgs, '__kind', 'Address'>
): GetDiscriminatedUnionVariant<AuthorityArgs, '__kind', 'Address'>;
export function authority<K extends AuthorityArgs['__kind'], Data>(
  kind: K,
  data?: Data
) {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}

export function isAuthority<K extends Authority['__kind']>(
  kind: K,
  value: Authority
): value is Authority & { __kind: K } {
  return value.__kind === kind;
}