import React from 'react';

const ImageList = (props) =>{
                                    // destructure - instead of image.id image.urls etc...
    const images = props.images.map(({id, urls, alt_description, user, description}) =>{
        return (
            <div key={id}>
                <img src={urls.regular} alt={alt_description}/>
                <h1>{`by ${user.name}`}</h1>
                <h3>{description}</h3>
                <br />
                <hr />
            </div>
        )
    });

    return <div>{images}</div>

};

export default ImageList