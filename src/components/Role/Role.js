import React, { useState } from 'react';
import './Role.scss';
import _ from 'lodash';
import { v4 } from 'uuid';


export default function Role(props) {
    const [listChilds, setListChilds] = useState({
        child1: { url: '', description: '' },
    });

    const handleOnChangeInput = (name, value, key) => {
        let _listChild = _.cloneDeep(listChilds);
        _listChild[key][name] = value;
        setListChilds(_listChild);
    }


    const handleAddNewInput = () => {
        let _listChild = _.cloneDeep(listChilds);
        _listChild[`child-${v4()}`] = {
            url: '',
            description: ''
        }
        setListChilds(_listChild);
    }


    const handleDeleteInput = (keyid) => {
        let _listChild = _.cloneDeep(listChilds);
        delete _listChild[keyid];
        setListChilds(_listChild);
    }

    return (
        <div className='role-container'>
            <div className='container'>
                <div className=' mt-3'>
                    <div className='title-role'>
                        <h3>Add a new roles.......</h3>
                    </div>
                    <div className=' role-parent'>
                        {
                            Object.entries(listChilds).map(([keyid, value], index) =>
                                <div className={'mt-2 row child-' + keyid} key={keyid}>
                                    <div className='col-5 form-group'>
                                        <label>URL</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            value={value.url}
                                            onChange={(even) => { handleOnChangeInput('url', even.target.value, keyid) }}
                                        />
                                    </div>
                                    <div className='col-5 form-group'>
                                        <label>Description</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            value={value.description}
                                            onChange={(even) => { handleOnChangeInput('description', even.target.value, keyid) }}
                                        />
                                    </div>
                                    <div className='col-2 mt-4 actions'>
                                        <i title='Add roles' className="fa-solid fa-plus icon-plus" onClick={handleAddNewInput}></i>
                                        {index >= 1 && <i onClick={() => handleDeleteInput(keyid)} title='Delete this role' className="fa-solid fa-trash icon-trash"></i>}
                                    </div>
                                </div>)
                        }

                    </div>
                    <div>
                        <button className='btn btn-warning mt-3'>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
