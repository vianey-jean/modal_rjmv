import { Modal } from "modam_rjmv";
import { useState } from "react";

/**
 *Here is un exemple how to use the library modal. You can change many parameters of the modal (background color of modal; the color of modal; the icon if is a success message or error message; the border of the modal; the text inside of modal; the color of the text inside modal; the shadow of the modal and you can also change the font size of the message). If you don't want to use a specific value, just comment it or don't write.
 * @returns {JSX.Element}
 */

 
function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="App">
      <button onClick={openModal}>Click Me</button>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        //your custom parameters
        backgroundColor="#16a92069"
        colorModal="rgba(215, 246, 207, 1)"
        iconModal="success"
        borderModal="40px"
        content="Hello world!"
        contentcolor="green"
        shadowModal="0 5px 16px rgba(18, 39, 3, 1)"
        fontSizeModal="2rem"
        //your custom parameters
      />
    </div>
  );
}

export default App;
