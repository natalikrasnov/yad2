import React, { createContext, useReducer } from 'react';

import CrateItemReducer, { FormDataInitialState  } from '../reducers/CreateNewItem.reducer';

export const CreateNewItemContext = createContext();

const CreateNewItemContextProvider = (props) => {
    const [form, dispatchForm] = useReducer(CrateItemReducer,  FormDataInitialState);

    return (
        <CreateNewItemContext.Provider value={ { form, dispatchForm } }>
            {props.children }
        </CreateNewItemContext.Provider>
    );
}; 


export default CreateNewItemContextProvider;