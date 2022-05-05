import React, { Dispatch, SetStateAction } from 'react';

interface IAppContext {
    selectedTags: string[];
    setSelectedTags: Dispatch<SetStateAction<string[]>>;
}

const AppContext = React.createContext<IAppContext>({} as IAppContext);

export default AppContext;
