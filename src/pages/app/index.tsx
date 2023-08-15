import styles from './page.module.css'

import { MenuBar } from '../../components/MenuBar/index'

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
