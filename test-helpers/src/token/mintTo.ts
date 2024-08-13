import { TOKEN_PROGRAM_ADDRESS } from '@solana-program/token';
import {
  AccountRole,
  combineCodec,
  getStructDecoder,
  getStructEncoder,
  getU64Decoder,
  getU64Encoder,
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
import { getAccountMetaFactory, type ResolvedAccount } from '../shared';

export type MintToInstruction<
  TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountToken extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMint extends string
        ? WritableAccount<TAccountMint>
        : TAccountMint,
      TAccountToken extends string
        ? WritableAccount<TAccountToken>
        : TAccountToken,
      TAccountMintAuthority extends string
        ? ReadonlyAccount<TAccountMintAuthority>
        : TAccountMintAuthority,
      ...TRemainingAccounts,
    ]
  >;

export type MintToInstructionData = {
  discriminator: number;
  /** The amount of new tokens to mint. */
  amount: bigint;
};

export type MintToInstructionDataArgs = {
  /** The amount of new tokens to mint. */
  amount: number | bigint;
};

export function getMintToInstructionDataEncoder(): Encoder<MintToInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['amount', getU64Encoder()],
    ]),
    (value) => ({ ...value, discriminator: 7 })
  );
}

export function getMintToInstructionDataDecoder(): Decoder<MintToInstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['amount', getU64Decoder()],
  ]);
}

export function getMintToInstructionDataCodec(): Codec<
  MintToInstructionDataArgs,
  MintToInstructionData
> {
  return combineCodec(
    getMintToInstructionDataEncoder(),
    getMintToInstructionDataDecoder()
  );
}

export type MintToInput<
  TAccountMint extends string = string,
  TAccountToken extends string = string,
  TAccountMintAuthority extends string = string,
> = {
  /** The mint account. */
  mint: Address<TAccountMint>;
  /** The account to mint tokens to. */
  token: Address<TAccountToken>;
  /** The mint's minting authority or its multisignature account. */
  mintAuthority:
    | Address<TAccountMintAuthority>
    | TransactionSigner<TAccountMintAuthority>;
  tokenProgram?: Address;
  amount: MintToInstructionDataArgs['amount'];
  multiSigners?: Array<TransactionSigner>;
};

export function getMintToInstruction<
  TAccountMint extends string,
  TAccountToken extends string,
  TAccountMintAuthority extends string,
>(
  input: MintToInput<TAccountMint, TAccountToken, TAccountMintAuthority>
): MintToInstruction<
  typeof TOKEN_PROGRAM_ADDRESS,
  TAccountMint,
  TAccountToken,
  (typeof input)['mintAuthority'] extends TransactionSigner<TAccountMintAuthority>
    ? ReadonlySignerAccount<TAccountMintAuthority> &
        IAccountSignerMeta<TAccountMintAuthority>
    : TAccountMintAuthority
> {
  // Program address.
  const programAddress = input.tokenProgram ?? TOKEN_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    mint: { value: input.mint ?? null, isWritable: true },
    token: { value: input.token ?? null, isWritable: true },
    mintAuthority: { value: input.mintAuthority ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Remaining accounts.
  const remainingAccounts: IAccountMeta[] = (args.multiSigners ?? []).map(
    (signer) => ({
      address: signer.address,
      role: AccountRole.READONLY_SIGNER,
      signer,
    })
  );

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.token),
      getAccountMeta(accounts.mintAuthority),
      ...remainingAccounts,
    ],
    programAddress,
    data: getMintToInstructionDataEncoder().encode(
      args as MintToInstructionDataArgs
    ),
  } as MintToInstruction<
    typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMint,
    TAccountToken,
    (typeof input)['mintAuthority'] extends TransactionSigner<TAccountMintAuthority>
      ? ReadonlySignerAccount<TAccountMintAuthority> &
          IAccountSignerMeta<TAccountMintAuthority>
      : TAccountMintAuthority
  >;

  return instruction;
}

export type ParsedMintToInstruction<
  TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** The mint account. */
    mint: TAccountMetas[0];
    /** The account to mint tokens to. */
    token: TAccountMetas[1];
    /** The mint's minting authority or its multisignature account. */
    mintAuthority: TAccountMetas[2];
  };
  data: MintToInstructionData;
};

export function parseMintToInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedMintToInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 3) {
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
      mint: getNextAccount(),
      token: getNextAccount(),
      mintAuthority: getNextAccount(),
    },
    data: getMintToInstructionDataDecoder().decode(instruction.data),
  };
}