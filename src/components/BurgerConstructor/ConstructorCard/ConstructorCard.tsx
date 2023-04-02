import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from './ConstructorCard.module.css';
import { deleteIngridientsConstructorThunk } from "../../../redux/thunk/constructorBurger";
import { useAppDispatch } from "../../../hooks/hooks";

type ConstructorCardProps = {
    name: string,
    price: number,
    image: string,
    dragId: string,
}


const ConstructorCard = ({
    name,
    price,
    image,
    dragId, 
}: ConstructorCardProps) => {

    const dispatch = useAppDispatch();

    const handleDelete = (id: string) => {
        dispatch(deleteIngridientsConstructorThunk(id))
    }
    
    return ( 
        <>
            <section className="ml-4">
                <div className={style.box}>
                    <div className={style.card}>
                        <div className="mt-7">
                         <DragIcon type="primary" />
                        </div>
                        <div className="ml-2">
                            <ConstructorElement
                                text={name}
                                price={price}
                                thumbnail={image}
                                handleClose={() => handleDelete(dragId)}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}

export default ConstructorCard;