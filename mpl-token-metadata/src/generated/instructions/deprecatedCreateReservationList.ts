/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  combineCodec,
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
import { TOKEN_METADATA_PROGRAM_ADDRESS } from '../programs';
import { getAccountMetaFactory, type ResolvedAccount } from '../shared';

export const DEPRECATED_CREATE_RESERVATION_LIST_DISCRIMINATOR = 6;

export function getDeprecatedCreateReservationListDiscriminatorBytes() {
  return getU8Encoder().encode(
    DEPRECATED_CREATE_RESERVATION_LIST_DISCRIMINATOR
  );
}

export type DeprecatedCreateReservationListInstruction<
  TProgram extends string = typeof TOKEN_METADATA_PROGRAM_ADDRESS,
  TAccountReservationList extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountResource extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends
    | string
    | IAccountMeta<string> = 'SysvarRent111111111111111111111111111111111',
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountReservationList extends string
        ? WritableAccount<TAccountReservationList>
        : TAccountReservationList,
      TAccountPayer extends string
        ? ReadonlySignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountUpdateAuthority extends string
        ? ReadonlySignerAccount<TAccountUpdateAuthority> &
            IAccountSignerMeta<TAccountUpdateAuthority>
        : TAccountUpdateAuthority,
      TAccountMasterEdition extends string
        ? ReadonlyAccount<TAccountMasterEdition>
        : TAccountMasterEdition,
      TAccountResource extends string
        ? ReadonlyAccount<TAccountResource>
        : TAccountResource,
      TAccountMetadata extends string
        ? ReadonlyAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountRent extends string
        ? ReadonlyAccount<TAccountRent>
        : TAccountRent,
      ...TRemainingAccounts,
    ]
  >;

export type DeprecatedCreateReservationListInstructionData = {
  discriminator: number;
};

export type DeprecatedCreateReservationListInstructionDataArgs = {};

export function getDeprecatedCreateReservationListInstructionDataEncoder(): Encoder<DeprecatedCreateReservationListInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([['discriminator', getU8Encoder()]]),
    (value) => ({
      ...value,
      discriminator: DEPRECATED_CREATE_RESERVATION_LIST_DISCRIMINATOR,
    })
  );
}

export function getDeprecatedCreateReservationListInstructionDataDecoder(): Decoder<DeprecatedCreateReservationListInstructionData> {
  return getStructDecoder([['discriminator', getU8Decoder()]]);
}

export function getDeprecatedCreateReservationListInstructionDataCodec(): Codec<
  DeprecatedCreateReservationListInstructionDataArgs,
  DeprecatedCreateReservationListInstructionData
> {
  return combineCodec(
    getDeprecatedCreateReservationListInstructionDataEncoder(),
    getDeprecatedCreateReservationListInstructionDataDecoder()
  );
}

export type DeprecatedCreateReservationListInput<
  TAccountReservationList extends string = string,
  TAccountPayer extends string = string,
  TAccountUpdateAuthority extends string = string,
  TAccountMasterEdition extends string = string,
  TAccountResource extends string = string,
  TAccountMetadata extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountRent extends string = string,
> = {
  /** PDA for ReservationList of ['metadata', program id, master edition key, 'reservation', resource-key] */
  reservationList: Address<TAccountReservationList>;
  /** Payer */
  payer: TransactionSigner<TAccountPayer>;
  /** Update authority */
  updateAuthority: TransactionSigner<TAccountUpdateAuthority>;
  /**  Master Edition V1 key (pda of ['metadata', program id, mint id, 'edition']) */
  masterEdition: Address<TAccountMasterEdition>;
  /** A resource you wish to tie the reservation list to. This is so your later visitors who come to redeem can derive your reservation list PDA with something they can easily get at. You choose what this should be. */
  resource: Address<TAccountResource>;
  /** Metadata key (pda of ['metadata', program id, mint id]) */
  metadata: Address<TAccountMetadata>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Rent info */
  rent?: Address<TAccountRent>;
};

export function getDeprecatedCreateReservationListInstruction<
  TAccountReservationList extends string,
  TAccountPayer extends string,
  TAccountUpdateAuthority extends string,
  TAccountMasterEdition extends string,
  TAccountResource extends string,
  TAccountMetadata extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgramAddress extends Address = typeof TOKEN_METADATA_PROGRAM_ADDRESS,
>(
  input: DeprecatedCreateReservationListInput<
    TAccountReservationList,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountMasterEdition,
    TAccountResource,
    TAccountMetadata,
    TAccountSystemProgram,
    TAccountRent
  >,
  config?: { programAddress?: TProgramAddress }
): DeprecatedCreateReservationListInstruction<
  TProgramAddress,
  TAccountReservationList,
  TAccountPayer,
  TAccountUpdateAuthority,
  TAccountMasterEdition,
  TAccountResource,
  TAccountMetadata,
  TAccountSystemProgram,
  TAccountRent
> {
  // Program address.
  const programAddress =
    config?.programAddress ?? TOKEN_METADATA_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    reservationList: { value: input.reservationList ?? null, isWritable: true },
    payer: { value: input.payer ?? null, isWritable: false },
    updateAuthority: {
      value: input.updateAuthority ?? null,
      isWritable: false,
    },
    masterEdition: { value: input.masterEdition ?? null, isWritable: false },
    resource: { value: input.resource ?? null, isWritable: false },
    metadata: { value: input.metadata ?? null, isWritable: false },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    rent: { value: input.rent ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Resolve default values.
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }
  if (!accounts.rent.value) {
    accounts.rent.value =
      'SysvarRent111111111111111111111111111111111' as Address<'SysvarRent111111111111111111111111111111111'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.reservationList),
      getAccountMeta(accounts.payer),
      getAccountMeta(accounts.updateAuthority),
      getAccountMeta(accounts.masterEdition),
      getAccountMeta(accounts.resource),
      getAccountMeta(accounts.metadata),
      getAccountMeta(accounts.systemProgram),
      getAccountMeta(accounts.rent),
    ],
    programAddress,
    data: getDeprecatedCreateReservationListInstructionDataEncoder().encode({}),
  } as DeprecatedCreateReservationListInstruction<
    TProgramAddress,
    TAccountReservationList,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountMasterEdition,
    TAccountResource,
    TAccountMetadata,
    TAccountSystemProgram,
    TAccountRent
  >;

  return instruction;
}

export type ParsedDeprecatedCreateReservationListInstruction<
  TProgram extends string = typeof TOKEN_METADATA_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** PDA for ReservationList of ['metadata', program id, master edition key, 'reservation', resource-key] */
    reservationList: TAccountMetas[0];
    /** Payer */
    payer: TAccountMetas[1];
    /** Update authority */
    updateAuthority: TAccountMetas[2];
    /**  Master Edition V1 key (pda of ['metadata', program id, mint id, 'edition']) */
    masterEdition: TAccountMetas[3];
    /** A resource you wish to tie the reservation list to. This is so your later visitors who come to redeem can derive your reservation list PDA with something they can easily get at. You choose what this should be. */
    resource: TAccountMetas[4];
    /** Metadata key (pda of ['metadata', program id, mint id]) */
    metadata: TAccountMetas[5];
    /** System program */
    systemProgram: TAccountMetas[6];
    /** Rent info */
    rent: TAccountMetas[7];
  };
  data: DeprecatedCreateReservationListInstructionData;
};

export function parseDeprecatedCreateReservationListInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedDeprecatedCreateReservationListInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 8) {
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
      reservationList: getNextAccount(),
      payer: getNextAccount(),
      updateAuthority: getNextAccount(),
      masterEdition: getNextAccount(),
      resource: getNextAccount(),
      metadata: getNextAccount(),
      systemProgram: getNextAccount(),
      rent: getNextAccount(),
    },
    data: getDeprecatedCreateReservationListInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
