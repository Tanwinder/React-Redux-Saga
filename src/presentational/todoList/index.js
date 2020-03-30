import React from 'react';
import TodoItems from '../TodoItems'

export default function TodoList({items, loader}){
    return(
        <div className="loaderOuter" style={{position: 'relative'}}>
            {
                loader && <div className="loader">Loading...</div>
            }
            {
                items && items.map(ac => {
                    return <TodoItems key={ac} item={ac} />
                })
            }
        </div>
    )
}