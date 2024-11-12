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
  getDiscriminatedUnionDecoder,
  getDiscriminatedUnionEncoder,
  getStructDecoder,
  getStructEncoder,
  getTupleDecoder,
  getTupleEncoder,
  getUnitDecoder,
  getUnitEncoder,
  type Address,
  type Codec,
  type Decoder,
  type Encoder,
  type GetDiscriminatedUnionVariant,
  type GetDiscriminatedUnionVariantContent,
} from '@solana/web3.js';

export type RuleSet =
  | { __kind: 'None' }
  | { __kind: 'ProgramAllowList'; fields: readonly [Array<Address>] }
  | { __kind: 'ProgramDenyList'; fields: readonly [Array<Address>] };

export type RuleSetArgs = RuleSet;

export function getRuleSetEncoder(): Encoder<RuleSetArgs> {
  return getDiscriminatedUnionEncoder([
    ['None', getUnitEncoder()],
    [
      'ProgramAllowList',
      getStructEncoder([
        ['fields', getTupleEncoder([getArrayEncoder(getAddressEncoder())])],
      ]),
    ],
    [
      'ProgramDenyList',
      getStructEncoder([
        ['fields', getTupleEncoder([getArrayEncoder(getAddressEncoder())])],
      ]),
    ],
  ]);
}

export function getRuleSetDecoder(): Decoder<RuleSet> {
  return getDiscriminatedUnionDecoder([
    ['None', getUnitDecoder()],
    [
      'ProgramAllowList',
      getStructDecoder([
        ['fields', getTupleDecoder([getArrayDecoder(getAddressDecoder())])],
      ]),
    ],
    [
      'ProgramDenyList',
      getStructDecoder([
        ['fields', getTupleDecoder([getArrayDecoder(getAddressDecoder())])],
      ]),
    ],
  ]);
}

export function getRuleSetCodec(): Codec<RuleSetArgs, RuleSet> {
  return combineCodec(getRuleSetEncoder(), getRuleSetDecoder());
}

// Data Enum Helpers.
export function ruleSet(
  kind: 'None'
): GetDiscriminatedUnionVariant<RuleSetArgs, '__kind', 'None'>;
export function ruleSet(
  kind: 'ProgramAllowList',
  data: GetDiscriminatedUnionVariantContent<
    RuleSetArgs,
    '__kind',
    'ProgramAllowList'
  >['fields']
): GetDiscriminatedUnionVariant<RuleSetArgs, '__kind', 'ProgramAllowList'>;
export function ruleSet(
  kind: 'ProgramDenyList',
  data: GetDiscriminatedUnionVariantContent<
    RuleSetArgs,
    '__kind',
    'ProgramDenyList'
  >['fields']
): GetDiscriminatedUnionVariant<RuleSetArgs, '__kind', 'ProgramDenyList'>;
export function ruleSet<K extends RuleSetArgs['__kind'], Data>(
  kind: K,
  data?: Data
) {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}

export function isRuleSet<K extends RuleSet['__kind']>(
  kind: K,
  value: RuleSet
): value is RuleSet & { __kind: K } {
  return value.__kind === kind;
}
