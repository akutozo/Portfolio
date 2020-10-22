  
import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [photos] = useState([
        {
            name: 'Horiseon Landing Page',
            category: 'projects',
            description: 'A basic website layout for a fictional company.',
            url: 'https://akutozo.github.io/Horiseon/#search-engine-optimization',
            repo: 'https://github.com/akutozo/Horiseon',
        },
        {
            name: 'Run Buddy Landing Page',
            category: 'projects',
            description: 'A basic website layout for a fictional company.',
            url: 'https://akutozo.github.io/run-buddy/',
            repo: 'https://github.com/akutozo/run-buddy',
        },
        {
            name: 'The Speakeasy',
            category: 'projects',
            description: 'A callaboration project building an online social club for those who wish to discuss their favorite drinks.',
            url: 'https://fierce-forest-64673.herokuapp.com/',
            repo: 'https://github.com/adamkeyser45/thespeakeasy',
        },
        {
            name: 'Weather Now',
            category: 'projects',
            description: 'A basic application for weather tracking.',
            url: 'https://akutozo.github.io/weather-now/',
            repo: 'https://github.com/akutozo/weather-now',
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