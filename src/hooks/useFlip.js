import React, { useState } from 'react';
const useFlip = (initialState = true) => {

const [isFlipped, setIsFlipped] = useState(initialState);

const toggleFlip = () => {

    setIsFlipped(facing => !facing);
}

return [isFlipped, toggleFlip]

}

export default useFlip