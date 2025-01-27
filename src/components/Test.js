import { TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function Item({ item_text, callback }) {
    const [isStrikethrough, setIsStrikethrough] = useState(false);

    const toggleStrikethrough = () => {
        setIsStrikethrough(!isStrikethrough);
    };

    return (
        <li className="flex items-center justify-center">
            <span
                onClick={toggleStrikethrough}
                style={{ textDecoration: isStrikethrough ? 'line-through' : 'none' }}
                className="cursor-pointer"
            >
                {item_text}
            </span>
            <span>
                <TrashIcon className="mx-auto inline-block w-10 mb-4 cursor-pointer" onClick={callback} />
            </span>
        </li>
    );
}

export default function Test() {
    const [items, setItems] = useState([]);
    const [textBoxController, setTextBoxController] = useState("");

    const deleteItemFactory = (index) => {
        return () => {
            setItems(items.filter((_, i) => i !== index));
        }
    }

    const addItem = () => {
        setItems([...items, textBoxController]);
        setTextBoxController("");
    }

    const [name, setName] = useState("");

    return (
        <>
        <div>
            <div>
                <h1>Name</h1>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
        </div>
        <h2 className="items-center">HI</h2>
        <div className="container">
            <ul className="list-none">
                {items.map((item_text, i) => <Item item_text={item_text} callback={deleteItemFactory(i)}/>)}
            </ul>
        </div>
        <div className="flex items-center justify-center">
            <input  type="text" value={textBoxController} onChange={(e) => setTextBoxController(e.target.value)} onKeyDown={(e) => {
                if (e.key === "Enter") {
                    addItem()
                }
            }}/>
            <button onClick={addItem}>Add Item</button>
        </div>
        </>
    )
}