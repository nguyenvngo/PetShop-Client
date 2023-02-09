import DogCart from "./DogCart";
import "./Dogs.css";
const DogsPage = (props) => {
    const {allDogs} = props;
    return ( 
        <>
            <p className="title">Here's all my dogs</p>
            <div className="dog-container">
                {allDogs.map((dog) => {
                    return(
                        <div key={dog.id}>
                        <DogCart 
                            id={dog.id}
                            name={dog.name}
                            breed={dog.breed}
                            price={dog.price}
                            description={dog.description}
                            imageUrl={dog.imageUrl}
                        />
                        </div>
                    )
                })}
            </div>
        </>
     );
}
 
export default DogsPage;