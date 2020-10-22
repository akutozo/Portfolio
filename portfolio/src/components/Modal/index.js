import React from 'react';

function Modal({ onClose, currentPhoto }) {
    const {name, category, description, index, url, repo} = currentPhoto;
  
    return (
        <div className="modalBackdrop">
          <div className="modalContainer">
            <h3 className="modalTitle">{name}</h3>
            <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
            <p>{description}</p>
            <a target="_blank" rel="noopener noreferrer" href={url}>Visit this Website.</a>
            <p></p>
            <a target="_blank" rel="noopener noreferrer" href={repo}>Visit this Repository.</a>
            <p></p>

            <button onClick={onClose} type="button">Close this modal</button>
            
            </div>
        </div>
    );
}

export default Modal;