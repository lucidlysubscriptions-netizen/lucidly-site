import { useEffect, useState } from 'react'

export type LiveTvlStatus = 'loading' | 'ready' | 'error'

export interface LiveTvl {
  value: number | null
  status: LiveTvlStatus
}

interface TvlEntry {
  date: string
  tvl: number
}

/**
 * Fetches the most recent daily TVL snapshot from the Lucidly API.
 * The endpoint returns one entry per day over the requested window;
 * we pick the entry with the latest `date`.
 */
export function useLiveTvl(): LiveTvl {
  const [value, setValue] = useState<number | null>(null)
  const [status, setStatus] = useState<LiveTvlStatus>('loading')

  useEffect(() => {
    let cancelled = false
    const ctrl = new AbortController()

    const load = async (): Promise<void> => {
      try {
        const nowSec = Math.floor(Date.now() / 1000)
        const startSec = nowSec - 86400
        const url =
          `https://api.lucidly.finance/services/vault/daily_total_tvl` +
          `?start=${startSec}&end=${nowSec}`

        const res = await fetch(url, { signal: ctrl.signal })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)

        const json: unknown = await res.json()
        const raw =
          json &&
          typeof json === 'object' &&
          'result' in json &&
          Array.isArray((json as { result: unknown }).result)
            ? ((json as { result: unknown[] }).result as unknown[])
            : []

        const entries: TvlEntry[] = raw.flatMap((row) => {
          if (
            row &&
            typeof row === 'object' &&
            'date' in row &&
            'tvl' in row &&
            typeof (row as { date: unknown }).date === 'string' &&
            typeof (row as { tvl: unknown }).tvl === 'number' &&
            Number.isFinite((row as { tvl: number }).tvl)
          ) {
            return [{ date: (row as TvlEntry).date, tvl: (row as TvlEntry).tvl }]
          }
          return []
        })

        if (entries.length === 0) throw new Error('Empty TVL response')

        // Latest by ISO date (lexicographic sort works for YYYY-MM-DD).
        const latest = entries.reduce((acc, cur) => (cur.date > acc.date ? cur : acc))

        if (cancelled) return
        setValue(latest.tvl)
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
