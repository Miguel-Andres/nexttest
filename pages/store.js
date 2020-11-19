import Container from "../components/Container"

const Store = (props) =>{ //se puede usar llaves pero necesita un return


console.log(props)
   return (

        <>
            <h4>Store site </h4>
            <ul>
               {props.users.map(user=>
               <li key={user.id}>{
               user.name} {user.address.city}
               <li> {user.phone}</li>
               </li>)}
                  
                
            </ul>
        </>

    )
   }

   //llamamos a la api nos trae los datos al servidor , luego por props se los pasamos al front
Store.getInitialProps = async (ctx) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const json = await res.json()
   console.log(json)
   return {users : json }

}


export default Store