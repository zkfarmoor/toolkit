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
  getMapDecoder,
  getMapEncoder,
  getStringDecoder,
  getStringEncoder,
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs';
import {
  PayloadType,
  PayloadTypeArgs,
  getPayloadTypeDecoder,
  getPayloadTypeEncoder,
} from '.';

export type Payload = { map: Map<string, PayloadType> };

export type PayloadArgs = { map: Map<string, PayloadTypeArgs> };

export function getPayloadEncoder(): Encoder<PayloadArgs> {
  return getStructEncoder([
    ['map', getMapEncoder(getStringEncoder(), getPayloadTypeEncoder())],
  ]);
}

export function getPayloadDecoder(): Decoder<Payload> {
  return getStructDecoder([
    ['map', getMapDecoder(getStringDecoder(), getPayloadTypeDecoder())],
  ]);
}

export function getPayloadCodec(): Codec<PayloadArgs, Payload> {
  return combineCodec(getPayloadEncoder(), getPayloadDecoder());
}
