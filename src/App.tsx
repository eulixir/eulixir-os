import styles from './styles/page.module.css'

import { MenuBar } from './components/MenuBar/MenuBar'

function App() {
  return (
    <>
      <div className={styles.homeContainer}>
        <MenuBar />
      </div>
    </>
  )
}

export default App
