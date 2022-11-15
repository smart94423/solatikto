import * as anchor from "@project-serum/anchor";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { TIKTOK_IDL, TIKTOK_PROGRAM_ID } from "./const";

export function getProgramInstance(connection, wallet) {
  if (!wallet) throw new WalletNotConnected();

  const provider = new anchor.AnchorProvider(
    connection,
    wallet,
    anchor.AnchorProvider.defaultOptions()
  );

  const idl = TIKTOK_IDL;

  //Address of the deployed program
  const programId = TIKTOK_PROGRAM_ID;

  const program = new (anchor).Program(idl,programId,provider);

  return program
}
