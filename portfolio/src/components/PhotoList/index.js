  
import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [photos] = useState([
        {
            name: 'Horiseon Landing Page',
            category: 'projects',
            description: 'A basic website layout for a fictional company.',
        },
        {
            name: 'Run Buddy Landing Page',
            category: 'projects',
            description: 'A basic website layout for a fictional company.',
        },
    ]);

    const currentPhotos = photos.filter((photo) => photo.category === category);
    const [currentPhoto, setCurrentPhoto] = useState();

    const toggleModal = (image, i) => {
      setCurrentPhoto({...image, index: i});
      setIsModalOpen(!isModalOpen);
    }

    return (
      <div>
          <div className="flex-row">
              {isModalOpen && (
                  <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
              )}                {currentPhotos.map((image, i) => (
                  <img
                      src={require(`../../assets/small/${category}/${i}.jpg`)}
                      alt={image.name}
                      className="img-thumbnail mx-1"
                      onClick={() => toggleModal(image, i)}
                      key={image.name}
                  />
              ))}
          </div>
      </div>
  );
};

export default PhotoList;