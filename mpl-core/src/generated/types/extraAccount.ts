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
  getBooleanDecoder,
  getBooleanEncoder,
  getDiscriminatedUnionDecoder,
  getDiscriminatedUnionEncoder,
  getOptionDecoder,
  getOptionEncoder,
  getStructDecoder,
  getStructEncoder,
  type Address,
  type Codec,
  type Decoder,
  type Encoder,
  type GetDiscriminatedUnionVariant,
  type GetDiscriminatedUnionVariantContent,
  type Option,
  type OptionOrNullable,
} from '@solana/web3.js';
import { getSeedDecoder, getSeedEncoder, type Seed, type SeedArgs } from '.';

export type ExtraAccount =
  | { __kind: 'PreconfiguredProgram'; isSigner: boolean; isWritable: boolean }
  | {
      __kind: 'PreconfiguredCollection';
      isSigner: boolean;
      isWritable: boolean;
    }
  | { __kind: 'PreconfiguredOwner'; isSigner: boolean; isWritable: boolean }
  | { __kind: 'PreconfiguredRecipient'; isSigner: boolean; isWritable: boolean }
  | { __kind: 'PreconfiguredAsset'; isSigner: boolean; isWritable: boolean }
  | {
      __kind: 'CustomPda';
      seeds: Array<Seed>;
      customProgramId: Option<Address>;
      isSigner: boolean;
      isWritable: boolean;
    }
  | {
      __kind: 'Address';
      address: Address;
      isSigner: boolean;
      isWritable: boolean;
    };

export type ExtraAccountArgs =
  | { __kind: 'PreconfiguredProgram'; isSigner: boolean; isWritable: boolean }
  | {
      __kind: 'PreconfiguredCollection';
      isSigner: boolean;
      isWritable: boolean;
    }
  | { __kind: 'PreconfiguredOwner'; isSigner: boolean; isWritable: boolean }
  | { __kind: 'PreconfiguredRecipient'; isSigner: boolean; isWritable: boolean }
  | { __kind: 'PreconfiguredAsset'; isSigner: boolean; isWritable: boolean }
  | {
      __kind: 'CustomPda';
      seeds: Array<SeedArgs>;
      customProgramId: OptionOrNullable<Address>;
      isSigner: boolean;
      isWritable: boolean;
    }
  | {
      __kind: 'Address';
      address: Address;
      isSigner: boolean;
      isWritable: boolean;
    };

export function getExtraAccountEncoder(): Encoder<ExtraAccountArgs> {
  return getDiscriminatedUnionEncoder([
    [
      'PreconfiguredProgram',
      getStructEncoder([
        ['isSigner', getBooleanEncoder()],
        ['isWritable', getBooleanEncoder()],
      ]),
    ],
    [
      'PreconfiguredCollection',
      getStructEncoder([
        ['isSigner', getBooleanEncoder()],
        ['isWritable', getBooleanEncoder()],
      ]),
    ],
    [
      'PreconfiguredOwner',
      getStructEncoder([
        ['isSigner', getBooleanEncoder()],
        ['isWritable', getBooleanEncoder()],
      ]),
    ],
    [
      'PreconfiguredRecipient',
      getStructEncoder([
        ['isSigner', getBooleanEncoder()],
        ['isWritable', getBooleanEncoder()],
      ]),
    ],
    [
      'PreconfiguredAsset',
      getStructEncoder([
        ['isSigner', getBooleanEncoder()],
        ['isWritable', getBooleanEncoder()],
      ]),
    ],
    [
      'CustomPda',
      getStructEncoder([
        ['seeds', getArrayEncoder(getSeedEncoder())],
        ['customProgramId', getOptionEncoder(getAddressEncoder())],
        ['isSigner', getBooleanEncoder()],
        ['isWritable', getBooleanEncoder()],
      ]),
    ],
    [
      'Address',
      getStructEncoder([
        ['address', getAddressEncoder()],
        ['isSigner', getBooleanEncoder()],
        ['isWritable', getBooleanEncoder()],
      ]),
    ],
  ]);
}

export function getExtraAccountDecoder(): Decoder<ExtraAccount> {
  return getDiscriminatedUnionDecoder([
    [
      'PreconfiguredProgram',
      getStructDecoder([
        ['isSigner', getBooleanDecoder()],
        ['isWritable', getBooleanDecoder()],
      ]),
    ],
    [
      'PreconfiguredCollection',
      getStructDecoder([
        ['isSigner', getBooleanDecoder()],
        ['isWritable', getBooleanDecoder()],
      ]),
    ],
    [
      'PreconfiguredOwner',
      getStructDecoder([
        ['isSigner', getBooleanDecoder()],
        ['isWritable', getBooleanDecoder()],
      ]),
    ],
    [
      'PreconfiguredRecipient',
      getStructDecoder([
        ['isSigner', getBooleanDecoder()],
        ['isWritable', getBooleanDecoder()],
      ]),
    ],
    [
      'PreconfiguredAsset',
      getStructDecoder([
        ['isSigner', getBooleanDecoder()],
        ['isWritable', getBooleanDecoder()],
      ]),
    ],
    [
      'CustomPda',
      getStructDecoder([
        ['seeds', getArrayDecoder(getSeedDecoder())],
        ['customProgramId', getOptionDecoder(getAddressDecoder())],
        ['isSigner', getBooleanDecoder()],
        ['isWritable', getBooleanDecoder()],
      ]),
    ],
    [
      'Address',
      getStructDecoder([
        ['address', getAddressDecoder()],
        ['isSigner', getBooleanDecoder()],
        ['isWritable', getBooleanDecoder()],
      ]),
    ],
  ]);
}

export function getExtraAccountCodec(): Codec<ExtraAccountArgs, ExtraAccount> {
  return combineCodec(getExtraAccountEncoder(), getExtraAccountDecoder());
}

// Data Enum Helpers.
export function extraAccount(
  kind: 'PreconfiguredProgram',
  data: GetDiscriminatedUnionVariantContent<
    ExtraAccountArgs,
    '__kind',
    'PreconfiguredProgram'
  >
): GetDiscriminatedUnionVariant<
  ExtraAccountArgs,
  '__kind',
  'PreconfiguredProgram'
>;
export function extraAccount(
  kind: 'PreconfiguredCollection',
  data: GetDiscriminatedUnionVariantContent<
    ExtraAccountArgs,
    '__kind',
    'PreconfiguredCollection'
  >
): GetDiscriminatedUnionVariant<
  ExtraAccountArgs,
  '__kind',
  'PreconfiguredCollection'
>;
export function extraAccount(
  kind: 'PreconfiguredOwner',
  data: GetDiscriminatedUnionVariantContent<
    ExtraAccountArgs,
    '__kind',
    'PreconfiguredOwner'
  >
): GetDiscriminatedUnionVariant<
  ExtraAccountArgs,
  '__kind',
  'PreconfiguredOwner'
>;
export function extraAccount(
  kind: 'PreconfiguredRecipient',
  data: GetDiscriminatedUnionVariantContent<
    ExtraAccountArgs,
    '__kind',
    'PreconfiguredRecipient'
  >
): GetDiscriminatedUnionVariant<
  ExtraAccountArgs,
  '__kind',
  'PreconfiguredRecipient'
>;
export function extraAccount(
  kind: 'PreconfiguredAsset',
  data: GetDiscriminatedUnionVariantContent<
    ExtraAccountArgs,
    '__kind',
    'PreconfiguredAsset'
  >
): GetDiscriminatedUnionVariant<
  ExtraAccountArgs,
  '__kind',
  'PreconfiguredAsset'
>;
export function extraAccount(
  kind: 'CustomPda',
  data: GetDiscriminatedUnionVariantContent<
    ExtraAccountArgs,
    '__kind',
    'CustomPda'
  >
): GetDiscriminatedUnionVariant<ExtraAccountArgs, '__kind', 'CustomPda'>;
export function extraAccount(
  kind: 'Address',
  data: GetDiscriminatedUnionVariantContent<
    ExtraAccountArgs,
    '__kind',
    'Address'
  >
): GetDiscriminatedUnionVariant<ExtraAccountArgs, '__kind', 'Address'>;
export function extraAccount<K extends ExtraAccountArgs['__kind'], Data>(
  kind: K,
  data?: Data
) {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}

export function isExtraAccount<K extends ExtraAccount['__kind']>(
  kind: K,
  value: ExtraAccount
): value is ExtraAccount & { __kind: K } {
  return value.__kind === kind;
}
