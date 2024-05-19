/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  Account,
  Address,
  Codec,
  Decoder,
  EncodedAccount,
  Encoder,
  FetchAccountConfig,
  FetchAccountsConfig,
  MaybeAccount,
  MaybeEncodedAccount,
  assertAccountExists,
  assertAccountsExist,
  combineCodec,
  decodeAccount,
  fetchEncodedAccount,
  fetchEncodedAccounts,
  getAddressDecoder,
  getAddressEncoder,
  getStructDecoder,
  getStructEncoder,
  getU64Decoder,
  getU64Encoder,
} from '@solana/web3.js';
import { Key, KeyArgs, getKeyDecoder, getKeyEncoder } from '../types';

export type Edition = { key: Key; parent: Address; edition: bigint };

export type EditionArgs = {
  key: KeyArgs;
  parent: Address;
  edition: number | bigint;
};

export function getEditionEncoder(): Encoder<EditionArgs> {
  return getStructEncoder([
    ['key', getKeyEncoder()],
    ['parent', getAddressEncoder()],
    ['edition', getU64Encoder()],
  ]);
}

export function getEditionDecoder(): Decoder<Edition> {
  return getStructDecoder([
    ['key', getKeyDecoder()],
    ['parent', getAddressDecoder()],
    ['edition', getU64Decoder()],
  ]);
}

export function getEditionCodec(): Codec<EditionArgs, Edition> {
  return combineCodec(getEditionEncoder(), getEditionDecoder());
}

export function decodeEdition<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress>
): Account<Edition, TAddress>;
export function decodeEdition<TAddress extends string = string>(
  encodedAccount: MaybeEncodedAccount<TAddress>
): MaybeAccount<Edition, TAddress>;
export function decodeEdition<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress> | MaybeEncodedAccount<TAddress>
): Account<Edition, TAddress> | MaybeAccount<Edition, TAddress> {
  return decodeAccount(
    encodedAccount as MaybeEncodedAccount<TAddress>,
    getEditionDecoder()
  );
}

export async function fetchEdition<TAddress extends string = string>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<Account<Edition, TAddress>> {
  const maybeAccount = await fetchMaybeEdition(rpc, address, config);
  assertAccountExists(maybeAccount);
  return maybeAccount;
}

export async function fetchMaybeEdition<TAddress extends string = string>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<MaybeAccount<Edition, TAddress>> {
  const maybeAccount = await fetchEncodedAccount(rpc, address, config);
  return decodeEdition(maybeAccount);
}

export async function fetchAllEdition(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<Account<Edition>[]> {
  const maybeAccounts = await fetchAllMaybeEdition(rpc, addresses, config);
  assertAccountsExist(maybeAccounts);
  return maybeAccounts;
}

export async function fetchAllMaybeEdition(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<MaybeAccount<Edition>[]> {
  const maybeAccounts = await fetchEncodedAccounts(rpc, addresses, config);
  return maybeAccounts.map((maybeAccount) => decodeEdition(maybeAccount));
}

export function getEditionSize(): number {
  return 41;
}