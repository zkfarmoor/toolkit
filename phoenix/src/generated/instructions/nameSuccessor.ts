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
  IAccountMeta,
  IAccountSignerMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
  ReadonlySignerAccount,
  TransactionSigner,
  WritableAccount,
  combineCodec,
  getAddressDecoder,
  getAddressEncoder,
  getStructDecoder,
  getStructEncoder,
  getU8Decoder,
  getU8Encoder,
  transformEncoder,
} from '@solana/web3.js';
import { PHOENIX_V1_PROGRAM_ADDRESS } from '../programs';
import { ResolvedAccount, getAccountMetaFactory } from '../shared';

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
    (value) => ({ ...value, discriminator: 102 })
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
>(
  input: NameSuccessorInput<
    TAccountPhoenixProgram,
    TAccountLogAuthority,
    TAccountMarket,
    TAccountMarketAuthority
  >
): NameSuccessorInstruction<
  typeof PHOENIX_V1_PROGRAM_ADDRESS,
  TAccountPhoenixProgram,
  TAccountLogAuthority,
  TAccountMarket,
  (typeof input)['marketAuthority'] extends TransactionSigner<TAccountMarketAuthority>
    ? ReadonlySignerAccount<TAccountMarketAuthority> &
        IAccountSignerMeta<TAccountMarketAuthority>
    : TAccountMarketAuthority
> {
  // Program address.
  const programAddress = PHOENIX_V1_PROGRAM_ADDRESS;

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
    typeof PHOENIX_V1_PROGRAM_ADDRESS,
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
