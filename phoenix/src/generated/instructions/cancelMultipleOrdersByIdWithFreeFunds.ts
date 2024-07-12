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
import {
  CancelMultipleOrdersByIdParams,
  CancelMultipleOrdersByIdParamsArgs,
  getCancelMultipleOrdersByIdParamsDecoder,
  getCancelMultipleOrdersByIdParamsEncoder,
} from '../types';

export type CancelMultipleOrdersByIdWithFreeFundsInstruction<
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
        ? ReadonlySignerAccount<TAccountTrader> &
            IAccountSignerMeta<TAccountTrader>
        : TAccountTrader,
      ...TRemainingAccounts,
    ]
  >;

export type CancelMultipleOrdersByIdWithFreeFundsInstructionData = {
  discriminator: number;
  params: CancelMultipleOrdersByIdParams;
};

export type CancelMultipleOrdersByIdWithFreeFundsInstructionDataArgs = {
  params: CancelMultipleOrdersByIdParamsArgs;
};

export function getCancelMultipleOrdersByIdWithFreeFundsInstructionDataEncoder(): Encoder<CancelMultipleOrdersByIdWithFreeFundsInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['params', getCancelMultipleOrdersByIdParamsEncoder()],
    ]),
    (value) => ({ ...value, discriminator: 11 })
  );
}

export function getCancelMultipleOrdersByIdWithFreeFundsInstructionDataDecoder(): Decoder<CancelMultipleOrdersByIdWithFreeFundsInstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['params', getCancelMultipleOrdersByIdParamsDecoder()],
  ]);
}

export function getCancelMultipleOrdersByIdWithFreeFundsInstructionDataCodec(): Codec<
  CancelMultipleOrdersByIdWithFreeFundsInstructionDataArgs,
  CancelMultipleOrdersByIdWithFreeFundsInstructionData
> {
  return combineCodec(
    getCancelMultipleOrdersByIdWithFreeFundsInstructionDataEncoder(),
    getCancelMultipleOrdersByIdWithFreeFundsInstructionDataDecoder()
  );
}

export type CancelMultipleOrdersByIdWithFreeFundsInput<
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
  trader: TransactionSigner<TAccountTrader>;
  params: CancelMultipleOrdersByIdWithFreeFundsInstructionDataArgs['params'];
};

export function getCancelMultipleOrdersByIdWithFreeFundsInstruction<
  TAccountPhoenixProgram extends string,
  TAccountLogAuthority extends string,
  TAccountMarket extends string,
  TAccountTrader extends string,
>(
  input: CancelMultipleOrdersByIdWithFreeFundsInput<
    TAccountPhoenixProgram,
    TAccountLogAuthority,
    TAccountMarket,
    TAccountTrader
  >
): CancelMultipleOrdersByIdWithFreeFundsInstruction<
  typeof PHOENIX_V1_PROGRAM_ADDRESS,
  TAccountPhoenixProgram,
  TAccountLogAuthority,
  TAccountMarket,
  TAccountTrader
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

  // Original args.
  const args = { ...input };

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.phoenixProgram),
      getAccountMeta(accounts.logAuthority),
      getAccountMeta(accounts.market),
      getAccountMeta(accounts.trader),
    ],
    programAddress,
    data: getCancelMultipleOrdersByIdWithFreeFundsInstructionDataEncoder().encode(
      args as CancelMultipleOrdersByIdWithFreeFundsInstructionDataArgs
    ),
  } as CancelMultipleOrdersByIdWithFreeFundsInstruction<
    typeof PHOENIX_V1_PROGRAM_ADDRESS,
    TAccountPhoenixProgram,
    TAccountLogAuthority,
    TAccountMarket,
    TAccountTrader
  >;

  return instruction;
}

export type ParsedCancelMultipleOrdersByIdWithFreeFundsInstruction<
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
  data: CancelMultipleOrdersByIdWithFreeFundsInstructionData;
};

export function parseCancelMultipleOrdersByIdWithFreeFundsInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedCancelMultipleOrdersByIdWithFreeFundsInstruction<
  TProgram,
  TAccountMetas
> {
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
    data: getCancelMultipleOrdersByIdWithFreeFundsInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
