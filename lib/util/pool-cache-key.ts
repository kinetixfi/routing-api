import { Protocol } from '@kinetix/router-sdk'
import { ChainId } from '@kinetix/sdk-core'

export const S3_POOL_CACHE_KEY = (baseKey: string, chain: ChainId, protocol: Protocol) =>
  `${baseKey}-${chain}-${protocol}`
