import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to="/somewhere/to/go",
        deleteItem,
        updateItem,
        item = {title: "Some Title", _id: "ABC"},
        active,
        ifTextWhite
    }) => {

    const [editing, setEditing] = useState(false);
    const [cachedItem, setCachedItem] = useState(item);

    return (
        <>
            {
                !editing &&
                <>
                    <Link className={`nav-link ${active?'active':''} d-inline`} to={to}>
                        <span className={(active && ifTextWhite) ? 'text-white':''}>
                            {item.title}
                        </span>
                    </Link>
                    <i onClick={() => setEditing(true)} className="fas fa-edit float-right p-1">
                        &nbsp;
                    </i>
                </>
            }

            {
                editing &&
                <>
                    <input onChange={(e) =>
                            setCachedItem({
                                              ...cachedItem,
                                              title: e.target.value})}
                        value={cachedItem.title}/>

                    <i onClick={() => {
                        setEditing(false);
                        updateItem(cachedItem)
                    }} className="fas fa-check float-right">
                        &nbsp;
                    </i>
                    <i onClick={() => deleteItem(item)}
                       className="fas fa-times float-right">
                        &nbsp;
                    </i>
                </>
            }

        </>
    )
};


export default EditableItem