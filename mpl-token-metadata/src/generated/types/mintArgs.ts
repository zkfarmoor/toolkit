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
  GetDiscriminatedUnionVariant,
  GetDiscriminatedUnionVariantContent,
  Option,
  OptionOrNullable,
  combineCodec,
  getDiscriminatedUnionDecoder,
  getDiscriminatedUnionEncoder,
  getOptionDecoder,
  getOptionEncoder,
  getStructDecoder,
  getStructEncoder,
  getU64Decoder,
  getU64Encoder,
} from '@solana/web3.js';
import {
  AuthorizationData,
  AuthorizationDataArgs,
  getAuthorizationDataDecoder,
  getAuthorizationDataEncoder,
} from '.';

export type MintArgs = {
  __kind: 'V1';
  amount: bigint;
  authorizationData: Option<AuthorizationData>;
};

export type MintArgsArgs = {
  __kind: 'V1';
  amount: number | bigint;
  authorizationData: OptionOrNullable<AuthorizationDataArgs>;
};

export function getMintArgsEncoder(): Encoder<MintArgsArgs> {
  return getDiscriminatedUnionEncoder([
    [
      'V1',
      getStructEncoder([
        ['amount', getU64Encoder()],
        ['authorizationData', getOptionEncoder(getAuthorizationDataEncoder())],
      ]),
    ],
  ]);
}

export function getMintArgsDecoder(): Decoder<MintArgs> {
  return getDiscriminatedUnionDecoder([
    [
      'V1',
      getStructDecoder([
        ['amount', getU64Decoder()],
        ['authorizationData', getOptionDecoder(getAuthorizationDataDecoder())],
      ]),
    ],
  ]);
}

export function getMintArgsCodec(): Codec<MintArgsArgs, MintArgs> {
  return combineCodec(getMintArgsEncoder(), getMintArgsDecoder());
}

// Data Enum Helpers.
export function mintArgs(
  kind: 'V1',
  data: GetDiscriminatedUnionVariantContent<MintArgsArgs, '__kind', 'V1'>
): GetDiscriminatedUnionVariant<MintArgsArgs, '__kind', 'V1'>;
export function mintArgs<K extends MintArgsArgs['__kind'], Data>(
  kind: K,
  data?: Data
) {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}

export function isMintArgs<K extends MintArgs['__kind']>(
  kind: K,
  value: MintArgs
): value is MintArgs & { __kind: K } {
  return value.__kind === kind;
}