import { ChainId, TradeType } from '@kinetix/sdk-core'

export const PAIRS_TO_TRACK: Map<ChainId, Map<TradeType, string[]>> = new Map([
  [
    ChainId.KAVA,
    new Map([
      [
        TradeType.EXACT_INPUT,
        ['WKAVA/*', 'axlWBTC/*', 'axlETH/*', 'axlUSDC/*', 'USDt/*'],
      ],
      [TradeType.EXACT_OUTPUT, ['*/WKAVA', '*/axlWBTC', '*/axlETH', '*/axlUSDC', '*/USDt']],
    ]),
  ],
])
