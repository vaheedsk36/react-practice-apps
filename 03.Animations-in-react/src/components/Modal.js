import React from "react";

function Modal({show,close}) {
    console.log(show);

    const modalClasses = ["modalContainer",show===true?"modalOpen":"modalClose"];

  return (
    <div className={modalClasses.join(' ')}>
      <h1>Modal Window</h1>
      <p className="modalPara">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, ea?
        Autem, expedita minima omnis doloribus a qui alias accusantium illo ad,
        quas delectus pariatur aperiam quis, vitae quam iste saepe eos facere.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, ea?
        Autem, expedita minima omnis doloribus a qui alias accusantium illo ad,
        quas delectus pariatur aperiam quis, vitae quam iste saepe eos facere.
      </p>
      <button type="submit" className="modalBtn" onClick={close}>Close Modal</button>
    </div>
  );
}

export default Modal;
