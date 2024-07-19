// src/utils/assetUtils.ts
const images = import.meta.glob('@/assets/**/*.{png,jpg,jpeg,gif}', {
  eager: true,
})
const videos = import.meta.glob('@/assets/quiz/*.mp4', { eager: true })

export function getAssetUrl(assetName: string): string {
  const imageModule = Object.entries(images).find(([key]) =>
    key.includes(assetName),
  )
  if (imageModule) {
    return (imageModule[1] as { default: string }).default
  }

  const videoModule = Object.entries(videos).find(([key]) =>
    key.includes(assetName),
  )
  if (videoModule) {
    return (videoModule[1] as { default: string }).default
  }

  console.warn(`Asset not found: ${assetName}`)
  return ''
}

export function isVideo(assetName: string): boolean {
  return assetName.toLowerCase().endsWith('.mp4')
}
