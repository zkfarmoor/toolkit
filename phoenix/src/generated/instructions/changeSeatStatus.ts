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
  SeatApprovalStatus,
  SeatApprovalStatusArgs,
  getSeatApprovalStatusDecoder,
  getSeatApprovalStatusEncoder,
} from '../types';

export type ChangeSeatStatusInstruction<
  TProgram extends string = typeof PHOENIX_V1_PROGRAM_ADDRESS,
  TAccountPhoenixProgram extends string | IAccountMeta<string> = string,
  TAccountLogAuthority extends string | IAccountMeta<string> = string,
  TAccountMarket extends string | IAccountMeta<string> = string,
  TAccountMarketAuthority extends string | IAccountMeta<string> = string,
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
      TAccountMarketAuthority extends string
        ? ReadonlyAccount<TAccountMarketAuthority>
        : TAccountMarketAuthority,
      TAccountSeat extends string
        ? WritableAccount<TAccountSeat>
        : TAccountSeat,
      ...TRemainingAccounts,
    ]
  >;

export type ChangeSeatStatusInstructionData = {
  discriminator: number;
  approvalStatus: SeatApprovalStatus;
};

export type ChangeSeatStatusInstructionDataArgs = {
  approvalStatus: SeatApprovalStatusArgs;
};

export function getChangeSeatStatusInstructionDataEncoder(): Encoder<ChangeSeatStatusInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['approvalStatus', getSeatApprovalStatusEncoder()],
    ]),
    (value) => ({ ...value, discriminator: 104 })
  );
}

export function getChangeSeatStatusInstructionDataDecoder(): Decoder<ChangeSeatStatusInstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['approvalStatus', getSeatApprovalStatusDecoder()],
  ]);
}

export function getChangeSeatStatusInstructionDataCodec(): Codec<
  ChangeSeatStatusInstructionDataArgs,
  ChangeSeatStatusInstructionData
> {
  return combineCodec(
    getChangeSeatStatusInstructionDataEncoder(),
    getChangeSeatStatusInstructionDataDecoder()
  );
}

export type ChangeSeatStatusInput<
  TAccountPhoenixProgram extends string = string,
  TAccountLogAuthority extends string = string,
  TAccountMarket extends string = string,
  TAccountMarketAuthority extends string = string,
  TAccountSeat extends string = string,
> = {
  /** Phoenix program */
  phoenixProgram: Address<TAccountPhoenixProgram>;
  /** Phoenix log authority */
  logAuthority: Address<TAccountLogAuthority>;
  /** This account holds the market state */
  market: Address<TAccountMarket>;
  /** The market_authority account must sign to change seat status */
  marketAuthority:
    | Address<TAccountMarketAuthority>
    | TransactionSigner<TAccountMarketAuthority>;
  seat: Address<TAccountSeat>;
  approvalStatus: ChangeSeatStatusInstructionDataArgs['approvalStatus'];
};

export function getChangeSeatStatusInstruction<
  TAccountPhoenixProgram extends string,
  TAccountLogAuthority extends string,
  TAccountMarket extends string,
  TAccountMarketAuthority extends string,
  TAccountSeat extends string,
>(
  input: ChangeSeatStatusInput<
    TAccountPhoenixProgram,
    TAccountLogAuthority,
    TAccountMarket,
    TAccountMarketAuthority,
    TAccountSeat
  >
): ChangeSeatStatusInstruction<
  typeof PHOENIX_V1_PROGRAM_ADDRESS,
  TAccountPhoenixProgram,
  TAccountLogAuthority,
  TAccountMarket,
  (typeof input)['marketAuthority'] extends TransactionSigner<TAccountMarketAuthority>
    ? ReadonlySignerAccount<TAccountMarketAuthority> &
        IAccountSignerMeta<TAccountMarketAuthority>
    : TAccountMarketAuthority,
  TAccountSeat
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
    seat: { value: input.seat ?? null, isWritable: true },
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
      getAccountMeta(accounts.seat),
    ],
    programAddress,
    data: getChangeSeatStatusInstructionDataEncoder().encode(
      args as ChangeSeatStatusInstructionDataArgs
    ),
  } as ChangeSeatStatusInstruction<
    typeof PHOENIX_V1_PROGRAM_ADDRESS,
    TAccountPhoenixProgram,
    TAccountLogAuthority,
    TAccountMarket,
    (typeof input)['marketAuthority'] extends TransactionSigner<TAccountMarketAuthority>
      ? ReadonlySignerAccount<TAccountMarketAuthority> &
          IAccountSignerMeta<TAccountMarketAuthority>
      : TAccountMarketAuthority,
    TAccountSeat
  >;

  return instruction;
}

export type ParsedChangeSeatStatusInstruction<
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
    /** The market_authority account must sign to change seat status */
    marketAuthority: TAccountMetas[3];
    seat: TAccountMetas[4];
  };
  data: ChangeSeatStatusInstructionData;
};

export function parseChangeSeatStatusInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedChangeSeatStatusInstruction<TProgram, TAccountMetas> {
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
      seat: getNextAccount(),
    },
    data: getChangeSeatStatusInstructionDataDecoder().decode(instruction.data),
  };
}
