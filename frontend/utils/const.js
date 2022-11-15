import {clusterApiUrl, PublicKey} from '@solana/web3.js';
import tiktok from './tiktok_clone.json'

export const SOLANA_HOST = clusterApiUrl('devnet')

export const TIKTOK_PROGRAM_ID = new PublicKey("7CLHEB7sTSDJTNe7q3VW8y4TS9u4SJgtEWofHoM2qTJh");

export const TIKTOK_IDL = tiktok