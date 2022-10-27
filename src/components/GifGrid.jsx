import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem, Loading } from "./index";

export const GifGrid = ({category}) => {

    //Custom hook llamado
    const {images, isLoading} = useFetchGifs(category)

    //MANERA ANTIGUA DE HACERLO

    // const [images, setImages] = useState([]);

    // const getImages = async() => {
    //     const newImages = await getGifs(category)
    //     setImages(newImages)
    // } 

    // useEffect(() => {
    //     getImages()
    // }, []);


  return (
    <>
            <h2>{category}</h2>

            <div className="card-grid">
                {
                isLoading ?
                <Loading/> :
                images.map(img => (
                        <GifItem 
                            key={img.id}
                            {...img}    
                        />
                        // otra manera de pasar solo lo q voy a usar
                        // <GifItem 
                        //     key={img.id}
                        //     title={img.title}
                        //     url={img.urle}    
                        // />
                    ))
                }
            </div>
    </>
  )
}
