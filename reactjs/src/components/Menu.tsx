import { List, ListItem } from "@chakra-ui/react"
import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setMenuOpen } from "redux/appSlice"
import { RootState } from "redux/store"
import { routePath } from "routes/path"
import { SliderMenu } from "ui-lib/slider-menu"

const Menu = () => {
  const isOpenMenu = useSelector((state: RootState) => state.app.isOpenMenu)
  const dispatch = useDispatch()

  let navigate = useNavigate()

  const items = [
    { title: "Home", path: routePath.Home },
    { title: "About", path: routePath.About },
    { title: "Contact", path: routePath.Contact },
  ]

  const closeMenu = useCallback(() => {
    dispatch(setMenuOpen(false))
  }, [dispatch])

  return (
    <SliderMenu open={isOpenMenu} onClose={closeMenu}>
      <List spacing="2rem" p="2rem 1.5rem">
        {items.map((d) => (
          <ListItem
            key={d.path}
            fontSize="1.6rem"
            color="#4285f4"
            padding="1rem"
            _hover={{
              backgroundColor: "#f1f1f1",
            }}
            onClick={() => {
              navigate(d.path)
              closeMenu()
            }}
            className="button"
          >
            {d.title}
          </ListItem>
        ))}
      </List>
    </SliderMenu>
  )
}

export default Menu
