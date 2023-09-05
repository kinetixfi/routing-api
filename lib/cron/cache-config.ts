import { Protocol } from '@kinetix/router-sdk'
import { /*V2SubgraphProvider*/ V2SubgraphProvider, V3SubgraphProvider } from '@kinetix/smart-order-router'
import { ChainId } from '@kinetix/sdk-core'

export const chainProtocols = [
  // V3.
  {
    protocol: Protocol.V3,
    chainId: ChainId.KAVA,
    timeout: 90000,
    provider: new V3SubgraphProvider(ChainId.KAVA, 3, 90000),
  },

  // Currently there is no working V3 subgraph for Optimism so we use a static provider.
  // V2.
  {
    protocol: Protocol.V2,
    chainId: ChainId.KAVA,
    timeout: 840000,
    provider: new V2SubgraphProvider(ChainId.KAVA, 3, 900000, true, 1000), // 1000 is the largest page size supported by thegraph
  },
]
