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

export type CancelAllOrdersWithFreeFundsInstruction<
  TProgram extends string = typeof PHOENIX_V1_PROGRAM_ADDRESS,
  TAccountPhoenixProgram extends string | IAccountMeta<string> = string,
  TAccountLogAuthority extends string | IAccountMeta<string> = string,
  TAccountMarket extends string | IAccountMeta<string> = string,
  TAccountTrader extends string | IAccountMeta<string> = string,
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
      TAccountTrader extends string
        ? ReadonlyAccount<TAccountTrader>
        : TAccountTrader,
      ...TRemainingAccounts,
    ]
  >;

export type CancelAllOrdersWithFreeFundsInstructionData = {
  discriminator: number;
};

export type CancelAllOrdersWithFreeFundsInstructionDataArgs = {};

export function getCancelAllOrdersWithFreeFundsInstructionDataEncoder(): Encoder<CancelAllOrdersWithFreeFundsInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([['discriminator', getU8Encoder()]]),
    (value) => ({ ...value, discriminator: 7 })
  );
}

export function getCancelAllOrdersWithFreeFundsInstructionDataDecoder(): Decoder<CancelAllOrdersWithFreeFundsInstructionData> {
  return getStructDecoder([['discriminator', getU8Decoder()]]);
}

export function getCancelAllOrdersWithFreeFundsInstructionDataCodec(): Codec<
  CancelAllOrdersWithFreeFundsInstructionDataArgs,
  CancelAllOrdersWithFreeFundsInstructionData
> {
  return combineCodec(
    getCancelAllOrdersWithFreeFundsInstructionDataEncoder(),
    getCancelAllOrdersWithFreeFundsInstructionDataDecoder()
  );
}

export type CancelAllOrdersWithFreeFundsInput<
  TAccountPhoenixProgram extends string = string,
  TAccountLogAuthority extends string = string,
  TAccountMarket extends string = string,
  TAccountTrader extends string = string,
> = {
  /** Phoenix program */
  phoenixProgram: Address<TAccountPhoenixProgram>;
  /** Phoenix log authority */
  logAuthority: Address<TAccountLogAuthority>;
  /** This account holds the market state */
  market: Address<TAccountMarket>;
  trader: Address<TAccountTrader> | TransactionSigner<TAccountTrader>;
};

export function getCancelAllOrdersWithFreeFundsInstruction<
  TAccountPhoenixProgram extends string,
  TAccountLogAuthority extends string,
  TAccountMarket extends string,
  TAccountTrader extends string,
>(
  input: CancelAllOrdersWithFreeFundsInput<
    TAccountPhoenixProgram,
    TAccountLogAuthority,
    TAccountMarket,
    TAccountTrader
  >
): CancelAllOrdersWithFreeFundsInstruction<
  typeof PHOENIX_V1_PROGRAM_ADDRESS,
  TAccountPhoenixProgram,
  TAccountLogAuthority,
  TAccountMarket,
  (typeof input)['trader'] extends TransactionSigner<TAccountTrader>
    ? ReadonlySignerAccount<TAccountTrader> & IAccountSignerMeta<TAccountTrader>
    : TAccountTrader
> {
  // Program address.
  const programAddress = PHOENIX_V1_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    phoenixProgram: { value: input.phoenixProgram ?? null, isWritable: false },
    logAuthority: { value: input.logAuthority ?? null, isWritable: false },
    market: { value: input.market ?? null, isWritable: true },
    trader: { value: input.trader ?? null, isWritable: false },
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
      getAccountMeta(accounts.trader),
    ],
    programAddress,
    data: getCancelAllOrdersWithFreeFundsInstructionDataEncoder().encode({}),
  } as CancelAllOrdersWithFreeFundsInstruction<
    typeof PHOENIX_V1_PROGRAM_ADDRESS,
    TAccountPhoenixProgram,
    TAccountLogAuthority,
    TAccountMarket,
    (typeof input)['trader'] extends TransactionSigner<TAccountTrader>
      ? ReadonlySignerAccount<TAccountTrader> &
          IAccountSignerMeta<TAccountTrader>
      : TAccountTrader
  >;

  return instruction;
}

export type ParsedCancelAllOrdersWithFreeFundsInstruction<
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
    trader: TAccountMetas[3];
  };
  data: CancelAllOrdersWithFreeFundsInstructionData;
};

export function parseCancelAllOrdersWithFreeFundsInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedCancelAllOrdersWithFreeFundsInstruction<TProgram, TAccountMetas> {
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
      trader: getNextAccount(),
    },
    data: getCancelAllOrdersWithFreeFundsInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
