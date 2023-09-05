/**
 * ts-node --project=tsconfig.cdk.json scripts/get_quote.ts
 */
import axios, { AxiosResponse } from 'axios'
import dotenv from 'dotenv'
import { QuoteQueryParams } from '../lib/handlers/quote/schema/quote-schema'
import { QuoteResponse } from '../lib/handlers/schema'
dotenv.config()
;(async function () {
  const quotePost: QuoteQueryParams = {
    tokenInAddress: 'WKAVA',
    tokenInChainId: 2222,
    tokenOutAddress: 'USDt',
    tokenOutChainId: 2222,
    amount: '50',
    type: 'exactIn',
    recipient: '0x58591456DD9FEdf8F629819F88cC02F4C6e9Aeb9',
    slippageTolerance: '5',
    deadline: '360',
    algorithm: 'alpha',
  }

  const response: AxiosResponse<QuoteResponse> = await axios.post<QuoteResponse>(
    process.env.UNISWAP_ROUTING_API! + 'quote',
    quotePost
  )

  console.log({ response })
})()
