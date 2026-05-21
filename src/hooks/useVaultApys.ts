import { useEffect, useState } from 'react'

export type VaultApyStatus = 'loading' | 'ready' | 'error'

export interface VaultApy {
  /** APY percentage (e.g. 6.11 for 6.11%). Null until ready. */
  value: number | null
  status: VaultApyStatus
}

export interface VaultRequest {
  vaultAddress: string
  duration: string
}

export type VaultApyMap = Record<string, VaultApy>

/**
 * Fetches per-vault APY for a list of vault requests in parallel.
 * Returns a map keyed by vaultAddress. Each entry starts as `loading`
 * and resolves to `ready` (with a value) or `error` independently.
 *
 * The requests list is treated as static — pass a module-level constant
 * to avoid re-fetching on every render.
 */
export function useVaultApys(requests: VaultRequest[]): VaultApyMap {
  const [apys, setApys] = useState<VaultApyMap>(() => {
    const init: VaultApyMap = {}
    for (const r of requests) init[r.vaultAddress] = { value: null, status: 'loading' }
    return init
  })

  useEffect(() => {
    let cancelled = false
    const ctrls = requests.map(() => new AbortController())

    requests.forEach((req, i) => {
      void (async () => {
        try {
          const url =
            `https://api.lucidly.finance/services/vault/apy` +
            `?vaultAddress=${req.vaultAddress}&duration=${req.duration}`
          const res = await fetch(url, { signal: ctrls[i].signal })
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
          setApys((prev) => ({ ...prev, [req.vaultAddress]: { value: raw, status: 'ready' } }))
        } catch (err) {
          if (cancelled) return
          if (err instanceof Error && err.name === 'AbortError') return
          setApys((prev) => ({ ...prev, [req.vaultAddress]: { value: null, status: 'error' } }))
        }
      })()
    })

    return () => {
      cancelled = true
      ctrls.forEach((c) => c.abort())
    }
    // The hook treats `requests` as a stable list (module-level).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return apys
}
