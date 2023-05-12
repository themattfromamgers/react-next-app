
export default function detail({data}) {
  return (
    <div> data:</div>
  )
}

export const xd = async (context)=>{
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`).then(res=> res.json())
  console.log("data", data)
  console.log(`params: ${context.params.id}`)
  return {
    props: {
      data
    }
  }
}
xd()