export const fetcher = async (url: string, options?: RequestInit ) => {
  const response = await fetch(url, options)
  return await response.json()
}
