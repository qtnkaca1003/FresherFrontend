import HomePage from "pages/HomePage"
import { create } from "react-test-renderer"

describe("Render HomePage", () => {
  test("Matches the snapshot", () => {
    const homepage = create(<HomePage />)
    expect(homepage.toJSON()).toMatchSnapshot()
  })
})
