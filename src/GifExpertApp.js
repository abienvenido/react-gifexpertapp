import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     setCategories(['HunterXHunter', ...categories ]);
    //     setCategories( cats => ['HunterXHunter', ...categories ]);
    // }


    return (
        <>
            <h2> Gif Expert App </h2>
            <AddCategory setCategories={ setCategories} />
            <hr></hr>

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key = { category }
                            category = { category }></GifGrid>
                    ))   
                }
            </ol>
        </>
    )
}
