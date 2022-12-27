import Modal from "./lib/components/Modal";
import { useState } from "react";


function App() {
  //use state true/false show modal
  const [showModal, setShowModal] = useState(false);

  //open modal
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="App">
      <button onClick={openModal}>Click Me</button>
      <Modal
        //show modal
        showModal={showModal}
        //close modal
        setShowModal={setShowModal}
        //YOUR CUSTOM PARAMETERS OF MODAL IS BELOW

        backgroundColor="#16a92069" //you can change background color
        colorModal="rgba(215, 246, 207, 1)" //you can change the color of the modal
        iconModal="success" //you can change the icon success or error
        borderModal="40px" //you can change border of the modal
        content="Hello world!" //you can write any message for the modal
        contentcolor="green" //you can change de color of the text
        shadowModal="0 5px 16px rgba(18, 39, 3, 1)" //you can change the shadow of the modal
        fontSizeModal="2rem" //you can change the size of the text inside the modal

        //YOUR CUSTOM PARAMETERS OF MODAL IS ABOVE
      />
    </div>
  );
}

export default App;
