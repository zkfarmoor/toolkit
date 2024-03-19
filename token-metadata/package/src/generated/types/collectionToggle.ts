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
  GetDataEnumKind,
  GetDataEnumKindContent,
  combineCodec,
  getDataEnumDecoder,
  getDataEnumEncoder,
  getStructDecoder,
  getStructEncoder,
  getTupleDecoder,
  getTupleEncoder,
  getUnitDecoder,
  getUnitEncoder,
} from '@solana/codecs';
import {
  Collection,
  CollectionArgs,
  getCollectionDecoder,
  getCollectionEncoder,
} from '.';

export type CollectionToggle =
  | { __kind: 'None' }
  | { __kind: 'Clear' }
  | { __kind: 'Set'; fields: [Collection] };

export type CollectionToggleArgs =
  | { __kind: 'None' }
  | { __kind: 'Clear' }
  | { __kind: 'Set'; fields: [CollectionArgs] };

export function getCollectionToggleEncoder(): Encoder<CollectionToggleArgs> {
  return getDataEnumEncoder([
    ['None', getUnitEncoder()],
    ['Clear', getUnitEncoder()],
    [
      'Set',
      getStructEncoder([['fields', getTupleEncoder([getCollectionEncoder()])]]),
    ],
  ]);
}

export function getCollectionToggleDecoder(): Decoder<CollectionToggle> {
  return getDataEnumDecoder([
    ['None', getUnitDecoder()],
    ['Clear', getUnitDecoder()],
    [
      'Set',
      getStructDecoder([['fields', getTupleDecoder([getCollectionDecoder()])]]),
    ],
  ]);
}

export function getCollectionToggleCodec(): Codec<
  CollectionToggleArgs,
  CollectionToggle
> {
  return combineCodec(
    getCollectionToggleEncoder(),
    getCollectionToggleDecoder()
  );
}

// Data Enum Helpers.
export function collectionToggle(
  kind: 'None'
): GetDataEnumKind<CollectionToggleArgs, 'None'>;
export function collectionToggle(
  kind: 'Clear'
): GetDataEnumKind<CollectionToggleArgs, 'Clear'>;
export function collectionToggle(
  kind: 'Set',
  data: GetDataEnumKindContent<CollectionToggleArgs, 'Set'>['fields']
): GetDataEnumKind<CollectionToggleArgs, 'Set'>;
export function collectionToggle<K extends CollectionToggleArgs['__kind']>(
  kind: K,
  data?: any
): Extract<CollectionToggleArgs, { __kind: K }> {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}

export function isCollectionToggle<K extends CollectionToggle['__kind']>(
  kind: K,
  value: CollectionToggle
): value is CollectionToggle & { __kind: K } {
  return value.__kind === kind;
}
