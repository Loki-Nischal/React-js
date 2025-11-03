import UserAddress from "./UserAddress"

const UserProfile = (id,name,age,country) => { //here UserProfile is a component and a function
// or
// const userProfile = ({id,name,age}) => { yesle chai destructuring garxa aani props.id ko satta mah id matra lekhya pugyo}

//   const props = {id:101,name:"loki",age:22} yesari aauxa object haru

    return (
        <div className="border border-slate-300 shadow rounded-md mt-6 mb-4 p-4 w-80 ">
            <p>ID:{id}</p>
            <p>Name:{name}</p>
            <p>Age:{age}</p>

            <UserAddress country={country} />

            


           
        </div>
    )
}


export default UserProfile