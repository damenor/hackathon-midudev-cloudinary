import { getImageData } from '@/services'

export type WebAnalyzeImageType = Awaited<Promise<PromiseLike<ReturnType<typeof getImageData>>>>
