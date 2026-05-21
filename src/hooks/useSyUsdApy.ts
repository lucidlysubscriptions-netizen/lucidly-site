import { useEffect, useState } from 'react'

export type SyUsdApyStatus = 'loading' | 'ready' | 'error'

export interface SyUsdApy {
  /** Trailing 30d APY percentage (e.g. 3.31 for 3.31%). */
  value: number | null
  status: SyUsdApyStatus
}

const VAULT_ADDRESS = '0x279CAD277447965AF3d24a78197aad1B02a2c589'
const DURATION = 'inception'

/**
 * Fetches the since-inception APY for the syUSD vault from the Lucidly API.
 * Single fetch on mount — Counter animates from 0 to the live value once
 * the response resolves.
 */
export function useSyUsdApy(): SyUsdApy {
  const [value, setValue] = useState<number | null>(null)
  const [status, setStatus] = useState<SyUsdApyStatus>('loading')

  useEffect(() => {
    let cancelled = false
    const ctrl = new AbortController()

    const load = async (): Promise<void> => {
      try {
        const url =
          `https://api.lucidly.finance/services/vault/apy` +
          `?vaultAddress=${VAULT_ADDRESS}&duration=${DURATION}`

        const res = await fetch(url, { signal: ctrl.signal })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)

        const json: unknown = await res.json()

        const result =
          json && typeof json === 'object' && 'result' in json
            ? (json as { result: unknown }).result
            : null
        const raw =
          result && typeof result === 'object' && 'trailing_total_APY' in result
            ? (result as { trailing_total_APY: unknown }).trailing_total_APY
            : null
        if (typeof raw !== 'number' || !Number.isFinite(raw)) {
          throw new Error('Invalid APY response')
        }

        if (cancelled) return
        setValue(raw)
        setStatus('ready')
      } catch (err) {
        if (cancelled) return
        if (err instanceof Error && err.name === 'AbortError') return
        setStatus('error')
      }
    }

    void load()

    return () => {
      cancelled = true
      ctrl.abort()
    }
  }, [])

  return { value, status }
}
