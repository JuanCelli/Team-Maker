import React, { useState } from 'react';
import {useDrag, useDrop} from 'react-dnd';


const DraggableItem = (props) => {
    const [{ isDragging }, drag] = useDrag({
      item: { type: 'asdasd', id: props.id },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });
  
    return (
      <div
        ref={drag}
        style={{ opacity: isDragging ? 0.5 : 1 }}
      >
      </div>
    );
  };

  export default DraggableItem