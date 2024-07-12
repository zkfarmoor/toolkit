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
  getStructDecoder,
  getStructEncoder,
  getU8Decoder,
  getU8Encoder,
  transformEncoder,
} from '@solana/web3.js';
import { PHOENIX_V1_PROGRAM_ADDRESS } from '../programs';
import { ResolvedAccount, getAccountMetaFactory } from '../shared';

export type ChangeFeeRecipientInstruction<
  TProgram extends string = typeof PHOENIX_V1_PROGRAM_ADDRESS,
  TAccountPhoenixProgram extends string | IAccountMeta<string> = string,
  TAccountLogAuthority extends string | IAccountMeta<string> = string,
  TAccountMarket extends string | IAccountMeta<string> = string,
  TAccountMarketAuthority extends string | IAccountMeta<string> = string,
  TAccountNewFeeRecipient extends string | IAccountMeta<string> = string,
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
        ? ReadonlySignerAccount<TAccountMarketAuthority> &
            IAccountSignerMeta<TAccountMarketAuthority>
        : TAccountMarketAuthority,
      TAccountNewFeeRecipient extends string
        ? ReadonlyAccount<TAccountNewFeeRecipient>
        : TAccountNewFeeRecipient,
      ...TRemainingAccounts,
    ]
  >;

export type ChangeFeeRecipientInstructionData = { discriminator: number };

export type ChangeFeeRecipientInstructionDataArgs = {};

export function getChangeFeeRecipientInstructionDataEncoder(): Encoder<ChangeFeeRecipientInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([['discriminator', getU8Encoder()]]),
    (value) => ({ ...value, discriminator: 109 })
  );
}

export function getChangeFeeRecipientInstructionDataDecoder(): Decoder<ChangeFeeRecipientInstructionData> {
  return getStructDecoder([['discriminator', getU8Decoder()]]);
}

export function getChangeFeeRecipientInstructionDataCodec(): Codec<
  ChangeFeeRecipientInstructionDataArgs,
  ChangeFeeRecipientInstructionData
> {
  return combineCodec(
    getChangeFeeRecipientInstructionDataEncoder(),
    getChangeFeeRecipientInstructionDataDecoder()
  );
}

export type ChangeFeeRecipientInput<
  TAccountPhoenixProgram extends string = string,
  TAccountLogAuthority extends string = string,
  TAccountMarket extends string = string,
  TAccountMarketAuthority extends string = string,
  TAccountNewFeeRecipient extends string = string,
> = {
  /** Phoenix program */
  phoenixProgram: Address<TAccountPhoenixProgram>;
  /** Phoenix log authority */
  logAuthority: Address<TAccountLogAuthority>;
  /** This account holds the market state */
  market: Address<TAccountMarket>;
  /** The market_authority account must sign to change the free recipient */
  marketAuthority: TransactionSigner<TAccountMarketAuthority>;
  /** New fee recipient */
  newFeeRecipient: Address<TAccountNewFeeRecipient>;
};

export function getChangeFeeRecipientInstruction<
  TAccountPhoenixProgram extends string,
  TAccountLogAuthority extends string,
  TAccountMarket extends string,
  TAccountMarketAuthority extends string,
  TAccountNewFeeRecipient extends string,
>(
  input: ChangeFeeRecipientInput<
    TAccountPhoenixProgram,
    TAccountLogAuthority,
    TAccountMarket,
    TAccountMarketAuthority,
    TAccountNewFeeRecipient
  >
): ChangeFeeRecipientInstruction<
  typeof PHOENIX_V1_PROGRAM_ADDRESS,
  TAccountPhoenixProgram,
  TAccountLogAuthority,
  TAccountMarket,
  TAccountMarketAuthority,
  TAccountNewFeeRecipient
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
    newFeeRecipient: {
      value: input.newFeeRecipient ?? null,
      isWritable: false,
    },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.phoenixProgram),
      getAccountMeta(accounts.logAuthority),
      getAccountMeta(accounts.market),
      getAccountMeta(accounts.marketAuthority),
      getAccountMeta(accounts.newFeeRecipient),
    ],
    programAddress,
    data: getChangeFeeRecipientInstructionDataEncoder().encode({}),
  } as ChangeFeeRecipientInstruction<
    typeof PHOENIX_V1_PROGRAM_ADDRESS,
    TAccountPhoenixProgram,
    TAccountLogAuthority,
    TAccountMarket,
    TAccountMarketAuthority,
    TAccountNewFeeRecipient
  >;

  return instruction;
}

export type ParsedChangeFeeRecipientInstruction<
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
    /** The market_authority account must sign to change the free recipient */
    marketAuthority: TAccountMetas[3];
    /** New fee recipient */
    newFeeRecipient: TAccountMetas[4];
  };
  data: ChangeFeeRecipientInstructionData;
};

export function parseChangeFeeRecipientInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedChangeFeeRecipientInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 5) {
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
      newFeeRecipient: getNextAccount(),
    },
    data: getChangeFeeRecipientInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
