import { useState } from "react";

export const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {visible && (<div>
        La la land!
      </div>)}

      <button onClick={() => setVisible(!visible)}>
        toggle
      </button>
    </>
  )
};