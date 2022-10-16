import React, { useState } from "react";

const Fetch = () => {
  const [id, setId] = useState();

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const fetchData = async (event) => {
    event.preventDefault();

    const response = await fetch(`http://localhost:8080/Api/Users/${id}/delete`, {
      method: "DELETE",
    });

    if (response.ok) {
      console.log("Todo ok");
    } else {
      console.log("Algo salió mal");
      console.error(await response.text());
    }
  };
  return (
    <form onSubmit={fetchData}>
      <input type="text" name="id" value={id} onChange={handleChange} />
      <button>ID a eliminar {id}</button>
    </form>
  );
};

export default Fetch;
