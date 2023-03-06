const BYTES_SIZE = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
const BYTE = 1024

export const toFormatBytes = (bytes: number, decimals = 2) => {
  if (!+bytes) return '0 Bytes'
  const dm = decimals < 0 ? 0 : decimals
  const i = Math.floor(Math.log(bytes) / Math.log(BYTE))
  return `${parseFloat((bytes / Math.pow(BYTE, i)).toFixed(dm))}${BYTES_SIZE[i]}`
}
