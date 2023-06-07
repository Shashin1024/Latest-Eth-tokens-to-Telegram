const {ChainId, Fetcher, WETH, Route}=require('@uniswap/sdk');

const chainId = ChainId.MAINNET;
const tokenAddress = '0x6b175474e89094c44da98b954eedeac495271d0f';

const init = async () =>{

const dai = await Fetcher.fetchTokenData(chainId, tokenAddress);
const weth = WETH[ChainId];
const pair = await Fetcher.fetchPairData(dai, weth);

const route = new Route([pair], weth);
console.log(route.midPrtice.toSignificant(6));
console.log(route.midPrtice.invert().toSignificant(6));


}