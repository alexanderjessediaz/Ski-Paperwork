import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alpine Ski</title>
      </Head>
        <div className={styles.customerInfoContainer}>
          <form className={styles.form} method='get'>
              <label for='First Name' name='First Name' value='First Name'>First Name</label>
              <input type="text" name='First Name' />
              <label for='Last Name' name='Last Name' value='Last Name'>Last Name</label>
              <input type="text" name='Last Name' />
              <label for='Phone number' name='Phone Number' value='Phone Number'>Phone Number</label>
              <input type="tel" name='Phone Number' />
          </form>
        </div>
    </div>
  )
}
