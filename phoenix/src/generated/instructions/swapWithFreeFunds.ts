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
  OrderPacket,
  OrderPacketArgs,
  getOrderPacketDecoder,
  getOrderPacketEncoder,
} from '../types';

export type SwapWithFreeFundsInstruction<
  TProgram extends string = typeof PHOENIX_V1_PROGRAM_ADDRESS,
  TAccountPhoenixProgram extends string | IAccountMeta<string> = string,
  TAccountLogAuthority extends string | IAccountMeta<string> = string,
  TAccountMarket extends string | IAccountMeta<string> = string,
  TAccountTrader extends string | IAccountMeta<string> = string,
  TAccountSeat extends string | IAccountMeta<string> = string,
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
      TAccountSeat extends string
        ? ReadonlyAccount<TAccountSeat>
        : TAccountSeat,
      ...TRemainingAccounts,
    ]
  >;

export type SwapWithFreeFundsInstructionData = {
  discriminator: number;
  orderPacket: OrderPacket;
};

export type SwapWithFreeFundsInstructionDataArgs = {
  orderPacket: OrderPacketArgs;
};

export function getSwapWithFreeFundsInstructionDataEncoder(): Encoder<SwapWithFreeFundsInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['orderPacket', getOrderPacketEncoder()],
    ]),
    (value) => ({ ...value, discriminator: 1 })
  );
}

export function getSwapWithFreeFundsInstructionDataDecoder(): Decoder<SwapWithFreeFundsInstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['orderPacket', getOrderPacketDecoder()],
  ]);
}

export function getSwapWithFreeFundsInstructionDataCodec(): Codec<
  SwapWithFreeFundsInstructionDataArgs,
  SwapWithFreeFundsInstructionData
> {
  return combineCodec(
    getSwapWithFreeFundsInstructionDataEncoder(),
    getSwapWithFreeFundsInstructionDataDecoder()
  );
}

export type SwapWithFreeFundsInput<
  TAccountPhoenixProgram extends string = string,
  TAccountLogAuthority extends string = string,
  TAccountMarket extends string = string,
  TAccountTrader extends string = string,
  TAccountSeat extends string = string,
> = {
  /** Phoenix program */
  phoenixProgram: Address<TAccountPhoenixProgram>;
  /** Phoenix log authority */
  logAuthority: Address<TAccountLogAuthority>;
  /** This account holds the market state */
  market: Address<TAccountMarket>;
  trader: Address<TAccountTrader> | TransactionSigner<TAccountTrader>;
  seat: Address<TAccountSeat>;
  orderPacket: SwapWithFreeFundsInstructionDataArgs['orderPacket'];
};

export function getSwapWithFreeFundsInstruction<
  TAccountPhoenixProgram extends string,
  TAccountLogAuthority extends string,
  TAccountMarket extends string,
  TAccountTrader extends string,
  TAccountSeat extends string,
>(
  input: SwapWithFreeFundsInput<
    TAccountPhoenixProgram,
    TAccountLogAuthority,
    TAccountMarket,
    TAccountTrader,
    TAccountSeat
  >
): SwapWithFreeFundsInstruction<
  typeof PHOENIX_V1_PROGRAM_ADDRESS,
  TAccountPhoenixProgram,
  TAccountLogAuthority,
  TAccountMarket,
  (typeof input)['trader'] extends TransactionSigner<TAccountTrader>
    ? ReadonlySignerAccount<TAccountTrader> & IAccountSignerMeta<TAccountTrader>
    : TAccountTrader,
  TAccountSeat
> {
  // Program address.
  const programAddress = PHOENIX_V1_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    phoenixProgram: { value: input.phoenixProgram ?? null, isWritable: false },
    logAuthority: { value: input.logAuthority ?? null, isWritable: false },
    market: { value: input.market ?? null, isWritable: true },
    trader: { value: input.trader ?? null, isWritable: false },
    seat: { value: input.seat ?? null, isWritable: false },
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
      getAccountMeta(accounts.seat),
    ],
    programAddress,
    data: getSwapWithFreeFundsInstructionDataEncoder().encode(
      args as SwapWithFreeFundsInstructionDataArgs
    ),
  } as SwapWithFreeFundsInstruction<
    typeof PHOENIX_V1_PROGRAM_ADDRESS,
    TAccountPhoenixProgram,
    TAccountLogAuthority,
    TAccountMarket,
    (typeof input)['trader'] extends TransactionSigner<TAccountTrader>
      ? ReadonlySignerAccount<TAccountTrader> &
          IAccountSignerMeta<TAccountTrader>
      : TAccountTrader,
    TAccountSeat
  >;

  return instruction;
}

export type ParsedSwapWithFreeFundsInstruction<
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
    seat: TAccountMetas[4];
  };
  data: SwapWithFreeFundsInstructionData;
};

export function parseSwapWithFreeFundsInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedSwapWithFreeFundsInstruction<TProgram, TAccountMetas> {
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
      trader: getNextAccount(),
      seat: getNextAccount(),
    },
    data: getSwapWithFreeFundsInstructionDataDecoder().decode(instruction.data),
  };
}
