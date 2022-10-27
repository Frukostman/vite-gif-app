export const GifItem = ({title, urle, id}) => {

  return (  
                <div className="card" id={id}
                    title={title}
                >
                    <img src={urle} alt={title} />
                    <p>
                        {title}
                    </p>
                </div>
       )
}
