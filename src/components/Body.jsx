import { database } from "./../firebase/config";
import { get, ref, child, getDatabase } from "firebase/database";
import { useState, useEffect } from "react";

function Body() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, "projects/")).then((snapshot) => {
      if (snapshot.exists()) {
        let results = Object.values(snapshot.val());
        setProjects(results);
      } else {
        alert("sin productos");
      }
    });
  }, []);

  return (
    <div className="h-full">
      <div className="bordered border-gray-200 border-solid m-10 border-2 grid grid-cols-4">
        {projects.map((project, index) => (
          <div className="grid grid-rows-6">
            <div>{project.Nombre}</div>
            <div>{project.Descripcion}</div>
            <div>{project.Caracteristicas}</div>
            <div>{project.GitHub}</div>
            <div>{project.Url}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
