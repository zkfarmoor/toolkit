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
  combineCodec,
  getAddressDecoder,
  getAddressEncoder,
  getStructDecoder,
  getStructEncoder,
  getU64Decoder,
  getU64Encoder,
} from '@solana/web3.js';

export type Reservation = {
  address: Address;
  spotsRemaining: bigint;
  totalSpots: bigint;
};

export type ReservationArgs = {
  address: Address;
  spotsRemaining: number | bigint;
  totalSpots: number | bigint;
};

export function getReservationEncoder(): Encoder<ReservationArgs> {
  return getStructEncoder([
    ['address', getAddressEncoder()],
    ['spotsRemaining', getU64Encoder()],
    ['totalSpots', getU64Encoder()],
  ]);
}

export function getReservationDecoder(): Decoder<Reservation> {
  return getStructDecoder([
    ['address', getAddressDecoder()],
    ['spotsRemaining', getU64Decoder()],
    ['totalSpots', getU64Decoder()],
  ]);
}

export function getReservationCodec(): Codec<ReservationArgs, Reservation> {
  return combineCodec(getReservationEncoder(), getReservationDecoder());
}