import React, { useState } from 'react';
import axios from 'axios';

export default () => {
    const [title, setTilte] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:4000/posts', {
            title,
        });
        setTilte('');
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        className="form-control"
                        value={title}
                        onChange={(event) => {
                            setTilte(event.target.value);
                        }}
                    ></input>
                </div>
                <button onClick={onSubmit} className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};
