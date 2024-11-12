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
  type WritableSignerAccount,
} from '@solana/web3.js';
import { TOKEN_METADATA_PROGRAM_ADDRESS } from '../programs';
import { getAccountMetaFactory, type ResolvedAccount } from '../shared';
import {
  getDelegateArgsDecoder,
  getDelegateArgsEncoder,
  type DelegateArgs,
  type DelegateArgsArgs,
} from '../types';

export const DELEGATE_DISCRIMINATOR = 44;

export function getDelegateDiscriminatorBytes() {
  return getU8Encoder().encode(DELEGATE_DISCRIMINATOR);
}

export type DelegateInstruction<
  TProgram extends string = typeof TOKEN_METADATA_PROGRAM_ADDRESS,
  TAccountDelegateRecord extends string | IAccountMeta<string> = string,
  TAccountDelegate extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountTokenRecord extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountToken extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends
    | string
    | IAccountMeta<string> = 'Sysvar1nstructions1111111111111111111111111',
  TAccountSplTokenProgram extends string | IAccountMeta<string> = string,
  TAccountAuthorizationRulesProgram extends
    | string
    | IAccountMeta<string> = string,
  TAccountAuthorizationRules extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountDelegateRecord extends string
        ? WritableAccount<TAccountDelegateRecord>
        : TAccountDelegateRecord,
      TAccountDelegate extends string
        ? ReadonlyAccount<TAccountDelegate>
        : TAccountDelegate,
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountMasterEdition extends string
        ? ReadonlyAccount<TAccountMasterEdition>
        : TAccountMasterEdition,
      TAccountTokenRecord extends string
        ? WritableAccount<TAccountTokenRecord>
        : TAccountTokenRecord,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountToken extends string
        ? WritableAccount<TAccountToken>
        : TAccountToken,
      TAccountAuthority extends string
        ? ReadonlySignerAccount<TAccountAuthority> &
            IAccountSignerMeta<TAccountAuthority>
        : TAccountAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountSysvarInstructions extends string
        ? ReadonlyAccount<TAccountSysvarInstructions>
        : TAccountSysvarInstructions,
      TAccountSplTokenProgram extends string
        ? ReadonlyAccount<TAccountSplTokenProgram>
        : TAccountSplTokenProgram,
      TAccountAuthorizationRulesProgram extends string
        ? ReadonlyAccount<TAccountAuthorizationRulesProgram>
        : TAccountAuthorizationRulesProgram,
      TAccountAuthorizationRules extends string
        ? ReadonlyAccount<TAccountAuthorizationRules>
        : TAccountAuthorizationRules,
      ...TRemainingAccounts,
    ]
  >;

export type DelegateInstructionData = {
  discriminator: number;
  delegateArgs: DelegateArgs;
};

export type DelegateInstructionDataArgs = { delegateArgs: DelegateArgsArgs };

export function getDelegateInstructionDataEncoder(): Encoder<DelegateInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['delegateArgs', getDelegateArgsEncoder()],
    ]),
    (value) => ({ ...value, discriminator: DELEGATE_DISCRIMINATOR })
  );
}

export function getDelegateInstructionDataDecoder(): Decoder<DelegateInstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['delegateArgs', getDelegateArgsDecoder()],
  ]);
}

export function getDelegateInstructionDataCodec(): Codec<
  DelegateInstructionDataArgs,
  DelegateInstructionData
> {
  return combineCodec(
    getDelegateInstructionDataEncoder(),
    getDelegateInstructionDataDecoder()
  );
}

export type DelegateInput<
  TAccountDelegateRecord extends string = string,
  TAccountDelegate extends string = string,
  TAccountMetadata extends string = string,
  TAccountMasterEdition extends string = string,
  TAccountTokenRecord extends string = string,
  TAccountMint extends string = string,
  TAccountToken extends string = string,
  TAccountAuthority extends string = string,
  TAccountPayer extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountSysvarInstructions extends string = string,
  TAccountSplTokenProgram extends string = string,
  TAccountAuthorizationRulesProgram extends string = string,
  TAccountAuthorizationRules extends string = string,
> = {
  /** Delegate record account */
  delegateRecord?: Address<TAccountDelegateRecord>;
  /** Owner of the delegated account */
  delegate: Address<TAccountDelegate>;
  /** Metadata account */
  metadata: Address<TAccountMetadata>;
  /** Master Edition account */
  masterEdition?: Address<TAccountMasterEdition>;
  /** Token record account */
  tokenRecord?: Address<TAccountTokenRecord>;
  /** Mint of metadata */
  mint: Address<TAccountMint>;
  /** Token account of mint */
  token?: Address<TAccountToken>;
  /** Update authority or token owner */
  authority: TransactionSigner<TAccountAuthority>;
  /** Payer */
  payer: TransactionSigner<TAccountPayer>;
  /** System Program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Instructions sysvar account */
  sysvarInstructions?: Address<TAccountSysvarInstructions>;
  /** SPL Token Program */
  splTokenProgram?: Address<TAccountSplTokenProgram>;
  /** Token Authorization Rules Program */
  authorizationRulesProgram?: Address<TAccountAuthorizationRulesProgram>;
  /** Token Authorization Rules account */
  authorizationRules?: Address<TAccountAuthorizationRules>;
  delegateArgs: DelegateInstructionDataArgs['delegateArgs'];
};

export function getDelegateInstruction<
  TAccountDelegateRecord extends string,
  TAccountDelegate extends string,
  TAccountMetadata extends string,
  TAccountMasterEdition extends string,
  TAccountTokenRecord extends string,
  TAccountMint extends string,
  TAccountToken extends string,
  TAccountAuthority extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountSplTokenProgram extends string,
  TAccountAuthorizationRulesProgram extends string,
  TAccountAuthorizationRules extends string,
  TProgramAddress extends Address = typeof TOKEN_METADATA_PROGRAM_ADDRESS,
>(
  input: DelegateInput<
    TAccountDelegateRecord,
    TAccountDelegate,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountTokenRecord,
    TAccountMint,
    TAccountToken,
    TAccountAuthority,
    TAccountPayer,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountSplTokenProgram,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules
  >,
  config?: { programAddress?: TProgramAddress }
): DelegateInstruction<
  TProgramAddress,
  TAccountDelegateRecord,
  TAccountDelegate,
  TAccountMetadata,
  TAccountMasterEdition,
  TAccountTokenRecord,
  TAccountMint,
  TAccountToken,
  TAccountAuthority,
  TAccountPayer,
  TAccountSystemProgram,
  TAccountSysvarInstructions,
  TAccountSplTokenProgram,
  TAccountAuthorizationRulesProgram,
  TAccountAuthorizationRules
> {
  // Program address.
  const programAddress =
    config?.programAddress ?? TOKEN_METADATA_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    delegateRecord: { value: input.delegateRecord ?? null, isWritable: true },
    delegate: { value: input.delegate ?? null, isWritable: false },
    metadata: { value: input.metadata ?? null, isWritable: true },
    masterEdition: { value: input.masterEdition ?? null, isWritable: false },
    tokenRecord: { value: input.tokenRecord ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: false },
    token: { value: input.token ?? null, isWritable: true },
    authority: { value: input.authority ?? null, isWritable: false },
    payer: { value: input.payer ?? null, isWritable: true },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    sysvarInstructions: {
      value: input.sysvarInstructions ?? null,
      isWritable: false,
    },
    splTokenProgram: {
      value: input.splTokenProgram ?? null,
      isWritable: false,
    },
    authorizationRulesProgram: {
      value: input.authorizationRulesProgram ?? null,
      isWritable: false,
    },
    authorizationRules: {
      value: input.authorizationRules ?? null,
      isWritable: false,
    },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }
  if (!accounts.sysvarInstructions.value) {
    accounts.sysvarInstructions.value =
      'Sysvar1nstructions1111111111111111111111111' as Address<'Sysvar1nstructions1111111111111111111111111'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.delegateRecord),
      getAccountMeta(accounts.delegate),
      getAccountMeta(accounts.metadata),
      getAccountMeta(accounts.masterEdition),
      getAccountMeta(accounts.tokenRecord),
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.token),
      getAccountMeta(accounts.authority),
      getAccountMeta(accounts.payer),
      getAccountMeta(accounts.systemProgram),
      getAccountMeta(accounts.sysvarInstructions),
      getAccountMeta(accounts.splTokenProgram),
      getAccountMeta(accounts.authorizationRulesProgram),
      getAccountMeta(accounts.authorizationRules),
    ],
    programAddress,
    data: getDelegateInstructionDataEncoder().encode(
      args as DelegateInstructionDataArgs
    ),
  } as DelegateInstruction<
    TProgramAddress,
    TAccountDelegateRecord,
    TAccountDelegate,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountTokenRecord,
    TAccountMint,
    TAccountToken,
    TAccountAuthority,
    TAccountPayer,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountSplTokenProgram,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules
  >;

  return instruction;
}

export type ParsedDelegateInstruction<
  TProgram extends string = typeof TOKEN_METADATA_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Delegate record account */
    delegateRecord?: TAccountMetas[0] | undefined;
    /** Owner of the delegated account */
    delegate: TAccountMetas[1];
    /** Metadata account */
    metadata: TAccountMetas[2];
    /** Master Edition account */
    masterEdition?: TAccountMetas[3] | undefined;
    /** Token record account */
    tokenRecord?: TAccountMetas[4] | undefined;
    /** Mint of metadata */
    mint: TAccountMetas[5];
    /** Token account of mint */
    token?: TAccountMetas[6] | undefined;
    /** Update authority or token owner */
    authority: TAccountMetas[7];
    /** Payer */
    payer: TAccountMetas[8];
    /** System Program */
    systemProgram: TAccountMetas[9];
    /** Instructions sysvar account */
    sysvarInstructions: TAccountMetas[10];
    /** SPL Token Program */
    splTokenProgram?: TAccountMetas[11] | undefined;
    /** Token Authorization Rules Program */
    authorizationRulesProgram?: TAccountMetas[12] | undefined;
    /** Token Authorization Rules account */
    authorizationRules?: TAccountMetas[13] | undefined;
  };
  data: DelegateInstructionData;
};

export function parseDelegateInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedDelegateInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 14) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  const getNextOptionalAccount = () => {
    const accountMeta = getNextAccount();
    return accountMeta.address === TOKEN_METADATA_PROGRAM_ADDRESS
      ? undefined
      : accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      delegateRecord: getNextOptionalAccount(),
      delegate: getNextAccount(),
      metadata: getNextAccount(),
      masterEdition: getNextOptionalAccount(),
      tokenRecord: getNextOptionalAccount(),
      mint: getNextAccount(),
      token: getNextOptionalAccount(),
      authority: getNextAccount(),
      payer: getNextAccount(),
      systemProgram: getNextAccount(),
      sysvarInstructions: getNextAccount(),
      splTokenProgram: getNextOptionalAccount(),
      authorizationRulesProgram: getNextOptionalAccount(),
      authorizationRules: getNextOptionalAccount(),
    },
    data: getDelegateInstructionDataDecoder().decode(instruction.data),
  };
}
