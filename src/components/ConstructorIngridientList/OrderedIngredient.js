import { useDrag, useDrop } from "react-dnd";
import React, {useRef} from "react";
import ConstructorCard from "../BurgerConstructor/ConstructorCard/ConstructorCard";

const OrderedIngredient = ({ item, index, moveCard }) => {
    const ref = useRef(null);
    const [{ handlerId }, drop] = useDrop({
        accept: 'component',
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId()
            }
        },

        hover(item, monitor) {
            if (!ref.current) {
                return;
            }

            const dragIndex = item.index;
            const hoverIndex = index;
           
            if (dragIndex === hoverIndex) {
                return;
            }
          
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
          
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    
            const clientOffset = monitor.getClientOffset();
         
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
          
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
     
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
       
            moveCard(dragIndex, hoverIndex);
         
            item.index = hoverIndex;
        }
    })

    const [{ isDragging }, drag] = useDrag({
        type: 'component',
        item: () => ({ id: item.id, index }),
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const opacity = isDragging ? 0 : 1;
 
    if (item.type !== 'bun') drag(drop(ref));

    const preventDefault = (e) => e.preventDefault();
    return (
        <div
            ref={ref}
            style={{ opacity }}
            onDrop={preventDefault}
            data-handler-id={handlerId}
        >   
            {index === 0 ? 
                <ConstructorCard 
                    name = {item.name}
                    price = {item.price}
                    image = {item.image}
                    dragId = {item.dragId}
                />
            :
                <div className="mt-4">
                    <ConstructorCard 
                        name = {item.name}
                        price = {item.price}
                        image = {item.image}
                        dragId = {item.dragId}
                    />
                </div>
            }
        </div>
    )
}

export default OrderedIngredient;