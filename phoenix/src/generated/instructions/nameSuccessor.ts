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
  getStructDecoder,
  getStructEncoder,
  getU8Decoder,
  getU8Encoder,
  transformEncoder,
  type Address,
  type Codec,
  type Decoder,
  type Encoder,
  type IAccountMeta,
  type IAccountSignerMeta,
  type IInstruction,
  type IInstructionWithAccounts,
  type IInstructionWithData,
  type ReadonlyAccount,
  type ReadonlySignerAccount,
  type TransactionSigner,
  type WritableAccount,
} from '@solana/web3.js';
import { PHOENIX_V1_PROGRAM_ADDRESS } from '../programs';
import { getAccountMetaFactory, type ResolvedAccount } from '../shared';

export const NAME_SUCCESSOR_DISCRIMINATOR = 102;

export function getNameSuccessorDiscriminatorBytes() {
  return getU8Encoder().encode(NAME_SUCCESSOR_DISCRIMINATOR);
}

export type NameSuccessorInstruction<
  TProgram extends string = typeof PHOENIX_V1_PROGRAM_ADDRESS,
  TAccountPhoenixProgram extends string | IAccountMeta<string> = string,
  TAccountLogAuthority extends string | IAccountMeta<string> = string,
  TAccountMarket extends string | IAccountMeta<string> = string,
  TAccountMarketAuthority extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountPhoenixProgram extends string
        ? ReadonlyAccount<TAccountPhoenixProgram>
        : TAccountPhoenixProgram,
      TAccountLogAuthority extends string
        ? ReadonlyAccount<TAccountLogAuthority>
        : TAccountLogAuthority,
      TAccountMarket extends string
        ? WritableAccount<TAccountMarket>
        : TAccountMarket,
      TAccountMarketAuthority extends string
        ? ReadonlyAccount<TAccountMarketAuthority>
        : TAccountMarketAuthority,
      ...TRemainingAccounts,
    ]
  >;

export type NameSuccessorInstructionData = {
  discriminator: number;
  successor: Address;
};

export type NameSuccessorInstructionDataArgs = { successor: Address };

export function getNameSuccessorInstructionDataEncoder(): Encoder<NameSuccessorInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['successor', getAddressEncoder()],
    ]),
    (value) => ({ ...value, discriminator: NAME_SUCCESSOR_DISCRIMINATOR })
  );
}

export function getNameSuccessorInstructionDataDecoder(): Decoder<NameSuccessorInstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['successor', getAddressDecoder()],
  ]);
}

export function getNameSuccessorInstructionDataCodec(): Codec<
  NameSuccessorInstructionDataArgs,
  NameSuccessorInstructionData
> {
  return combineCodec(
    getNameSuccessorInstructionDataEncoder(),
    getNameSuccessorInstructionDataDecoder()
  );
}

export type NameSuccessorInput<
  TAccountPhoenixProgram extends string = string,
  TAccountLogAuthority extends string = string,
  TAccountMarket extends string = string,
  TAccountMarketAuthority extends string = string,
> = {
  /** Phoenix program */
  phoenixProgram: Address<TAccountPhoenixProgram>;
  /** Phoenix log authority */
  logAuthority: Address<TAccountLogAuthority>;
  /** This account holds the market state */
  market: Address<TAccountMarket>;
  /** The market_authority account must sign to name successor */
  marketAuthority:
    | Address<TAccountMarketAuthority>
    | TransactionSigner<TAccountMarketAuthority>;
  successor: NameSuccessorInstructionDataArgs['successor'];
};

export function getNameSuccessorInstruction<
  TAccountPhoenixProgram extends string,
  TAccountLogAuthority extends string,
  TAccountMarket extends string,
  TAccountMarketAuthority extends string,
  TProgramAddress extends Address = typeof PHOENIX_V1_PROGRAM_ADDRESS,
>(
  input: NameSuccessorInput<
    TAccountPhoenixProgram,
    TAccountLogAuthority,
    TAccountMarket,
    TAccountMarketAuthority
  >,
  config?: { programAddress?: TProgramAddress }
): NameSuccessorInstruction<
  TProgramAddress,
  TAccountPhoenixProgram,
  TAccountLogAuthority,
  TAccountMarket,
  (typeof input)['marketAuthority'] extends TransactionSigner<TAccountMarketAuthority>
    ? ReadonlySignerAccount<TAccountMarketAuthority> &
        IAccountSignerMeta<TAccountMarketAuthority>
    : TAccountMarketAuthority
> {
  // Program address.
  const programAddress = config?.programAddress ?? PHOENIX_V1_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    phoenixProgram: { value: input.phoenixProgram ?? null, isWritable: false },
    logAuthority: { value: input.logAuthority ?? null, isWritable: false },
    market: { value: input.market ?? null, isWritable: true },
    marketAuthority: {
      value: input.marketAuthority ?? null,
      isWritable: false,
    },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.phoenixProgram),
      getAccountMeta(accounts.logAuthority),
      getAccountMeta(accounts.market),
      getAccountMeta(accounts.marketAuthority),
    ],
    programAddress,
    data: getNameSuccessorInstructionDataEncoder().encode(
      args as NameSuccessorInstructionDataArgs
    ),
  } as NameSuccessorInstruction<
    TProgramAddress,
    TAccountPhoenixProgram,
    TAccountLogAuthority,
    TAccountMarket,
    (typeof input)['marketAuthority'] extends TransactionSigner<TAccountMarketAuthority>
      ? ReadonlySignerAccount<TAccountMarketAuthority> &
          IAccountSignerMeta<TAccountMarketAuthority>
      : TAccountMarketAuthority
  >;

  return instruction;
}

export type ParsedNameSuccessorInstruction<
  TProgram extends string = typeof PHOENIX_V1_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Phoenix program */
    phoenixProgram: TAccountMetas[0];
    /** Phoenix log authority */
    logAuthority: TAccountMetas[1];
    /** This account holds the market state */
    market: TAccountMetas[2];
    /** The market_authority account must sign to name successor */
    marketAuthority: TAccountMetas[3];
  };
  data: NameSuccessorInstructionData;
};

export function parseNameSuccessorInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedNameSuccessorInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 4) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      phoenixProgram: getNextAccount(),
      logAuthority: getNextAccount(),
      market: getNextAccount(),
      marketAuthority: getNextAccount(),
    },
    data: getNameSuccessorInstructionDataDecoder().decode(instruction.data),
  };
}
