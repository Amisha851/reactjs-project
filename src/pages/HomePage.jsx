import { todos } from "../data/data"

const HomePage = () => {


  return (
    <div className="p-5 bg-amber-200" >

      {todos.map((todos) => {

        return <div key={todos.id}>
          <h1>{todos.title}</h1>
        </div>
      })}

    </div>
  )
}

export default HomePage