import { useState } from "react";
import { AddCategory, GifGrid } from "./components";



export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {

        //para que no puedan repetr el valor
        if(categories.includes(newCategory)) return

        setCategories([newCategory,...categories])
    }

  return (
        <>
            <h1>GifExpertApp</h1>


            <AddCategory 
                //evento creado para esta funcion
                onNewCategory={onAddCategory}
            />


            <ol>
                {categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>

        </>
    )
}

// const apiKey = 'w8BsV2KtuX8z3ZUKgtZZsvs62rFMBnwW'
