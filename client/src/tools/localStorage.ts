export const getLocalStorage = (key: string) => {
  if(!localStorage) return
  if(localStorage.getItem(key)) return JSON.parse(localStorage.getItem(key) as string)
  return null
}

export const setLocalStorage = (key: string, data: any) => {
  if(!localStorage) return
  return localStorage.setItem(key, JSON.stringify(data))
}
