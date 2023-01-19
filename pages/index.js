import styles from '@/styles/Home.module.css'

export default function Home(pivo) {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <ul>
            {pivo.pivo.map((p) => (
              <li key={p.id}>
                {p.name}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps({}) {
  const apiUrl = 'http://localhost:3000/api/pivo'
  const response = await fetch(apiUrl);
  const json = await response.json();

  return {
    props: {
      pivo: json
    }
  }
}
