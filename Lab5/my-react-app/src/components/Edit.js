import React, { useState } from 'react';

function Edit({ product, onSave }) {
    var [title, setTitle] = useState(product.title);
    var [description, setDescription] = useState(product.description);

    const submit = (e) => {
        e.preventDefault();
        onSave(product.id, title, description);
    };

    return (
        <form onSubmit={submit}>
            <div>
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Desc</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button type="submit">Save</button>
        </form>
    );
}

export default Edit;