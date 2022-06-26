import { Meta } from "@storybook/react"
import { useCallback, useState } from "react"
import { HambugerMenu } from "./src"

export default {
  title: "Components/HambugerMenu",
  component: HambugerMenu,
} as Meta

export const _HambugerMenu = () => {
  const [isOpenMenu, setOpenMenu] = useState(false)
  const onMenuClick = useCallback(
    (open: boolean) => () => {
      setOpenMenu(open)
    },
    [],
  )

  return <HambugerMenu isOpen={isOpenMenu} onClick={onMenuClick(!isOpenMenu)} />
}
