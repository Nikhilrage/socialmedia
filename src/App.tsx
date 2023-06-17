import { useEffect, useState } from "react";
import "./index.css";
import RouteController from "./routes/RouteController";
import axios from "axios";

function App() {
  const [user_id, setUser_id] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState<any>(null);

  const makePostCreate = async () => {
    try {
      const formData = new FormData();
      formData.append("user_id", user_id);
      formData.append("desc", desc);
      formData.append("image", image);
      await axios.post("http://localhost:6001/posts/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return <RouteController />;
}

export default App;
