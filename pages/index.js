export default function Home(pivo) {
  return (
    <>
      {pivo.pivo.map((p) => (
        <li key={p.id}>
          {p.name}
        </li>
      ))}
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
