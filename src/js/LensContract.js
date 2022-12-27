import LENSHUB from '../abi/lenshubabi'
import { web3Store } from './Web3Info'
import {get} from 'svelte/store'

export const getLensContract = (web3) => {
    return new web3.eth.Contract( LENSHUB, LENSHUB_CONTRACT_ADDRESS)
}


