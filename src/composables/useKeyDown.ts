import { useEventListener } from '@vueuse/core'

interface KeyDownParams {
  confirm?: () => void
  skip?: () => void
}

export const useKeyDown = async ({ confirm, skip }: KeyDownParams) => {
  function onKeyBoardEvent(event: KeyboardEvent) {
    const KEYCODE = event.keyCode || event.which
    event.preventDefault()
    if (KEYCODE === 13 || KEYCODE === 32) {
      confirm?.()
    }
    if (KEYCODE === 75) {
      skip?.()
    }
  }
  useEventListener(window, 'keyup', onKeyBoardEvent)
}
