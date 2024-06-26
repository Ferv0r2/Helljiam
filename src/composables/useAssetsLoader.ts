import { ref } from 'vue'

export function useAssetsLoader(assets: string[]) {
  const loaded = ref(false)
  const progress = ref(0)

  const loadAssets = async () => {
    const promises = assets.map((asset, index) => {
      return new Promise<void>((resolve) => {
        const img = new Image()
        img.src = asset
        img.onload = () => {
          progress.value = ((index + 1) / assets.length) * 100
          resolve()
        }
      })
    })

    await Promise.all(promises)
    loaded.value = true
  }

  return { loaded, progress, loadAssets }
}
