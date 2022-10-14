import React,{useState} from 'react'


const Fetch = () => {
    const [id,setId]=useState()

    const handleChange = event => {
        setId(event.target.value)
    }

    const fetchData = async event => {
        event.preventDefault()

        const response = await fetch(`http://localhost:8080/api/users/?id=${id}`, {
            method: 'DELETE'
        })

        if (response.ok){
            console.log("Todo ok")
        } else {
            console.log("Algo salió mal")
            console.error( await response.text())
        }
    }
    

  return (
    <form onSubmit={fetchData}>
        <input type="text" name="id" value={id} onChange={handleChange} />
        <button>Consultar por {id}</button>
    </form>
  )
}

export default Fetch