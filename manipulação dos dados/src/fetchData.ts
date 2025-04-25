
export default async function fetchData<T>(url:string):Promise<T | null>{
  try {
    const response = await fetch(url);
    //console.log(response)
    //verifica se o statos é do tipo ok(200) caso não lança erro no catch.
    if(!response.ok) throw new Error("Code do Error:" + response.status);

    const json = await response.json()
    return json
  } catch (error) {
    //verifica se o erro é de do object Error gerado pelo constructor
    if(error instanceof Error) console.error(error.message)
    return null
  }
}