import React, { useState } from 'react'
import { SideNavBar } from '../Util'
import '../../styles/Gallery.css'
import { useLocation } from 'react-router-dom';

const galleryData = require('../../jsons/gallery.json');

export function Gallery() {
    const match = useLocation();
    const pathName = match.pathname.replace('/', '');
    const [expandedSection, setExpandedSection] = useState('')
    const [selectedPhoto, setSelectedPhoto] = useState(null)

    const isGalleryOverview = pathName.toLowerCase() === 'gallery'

    const toggleSection = (sectionName) => {
        setExpandedSection((prev) => (prev === sectionName ? '' : sectionName))
    }

    const openPhoto = (photoPath) => {
        setSelectedPhoto(photoPath)
    }

    const closePhoto = () => {
        setSelectedPhoto(null)
    }

    const renderSectionCard = (section) => (
        <div key={section.name} className="gallery-overview-card" onClick={(e) => e.stopPropagation()}>
            <div className="gallery-overview-header">
                <button
                    type="button"
                    className="gallery-section-link"
                    onClick={() => toggleSection(section.name)}
                >
                    {section.name.replaceAll('_', ' ')}
                </button>
            </div>

            <div className="gallery-preview-grid">
                {section.photos.src.slice(0, 3).map((photo) => {
                    const imgPath = section.path + photo
                    return (
                        <img
                            key={imgPath}
                            className="gallery-preview-image"
                            src={require(`../../assets/photos/${imgPath}`)}
                            alt={photo}
                            loading="lazy"
                            onClick={() => openPhoto(imgPath)}
                        />
                    )
                })}
            </div>

            {expandedSection === section.name && section.photos.src.length > 3 && (
                <div className="gallery-expanded-grid">
                    {section.photos.src.slice(3).map((photo) => {
                        const imgPath = section.path + photo
                        return (
                            <img
                                key={imgPath}
                                className="gallery-expanded-image"
                                src={require(`../../assets/photos/${imgPath}`)}
                                alt={photo}
                                loading="lazy"
                                onClick={() => openPhoto(imgPath)}
                            />
                        )
                    })}
                </div>
            )}
        </div>
    )

    if (isGalleryOverview) {
        return (
            <div>
                {SideNavBar('Gallery', 'Taken on Nikon EM')}
                <div className="gallery-overview-container" onClick={() => setExpandedSection('')}>
                    <div className="gallery-group">
                        {galleryData.map(renderSectionCard)}
                    </div>
                </div>

                {selectedPhoto && (
                    <div className="gallery-photo-overlay" onClick={closePhoto}>
                        <div className="gallery-photo-modal" onClick={(e) => e.stopPropagation()}>
                            <img
                                src={require(`../../assets/photos/${selectedPhoto}`)}
                                alt="Expanded"
                                className="gallery-photo-expanded"
                                onClick={closePhoto}
                            />
                        </div>
                    </div>
                )}
            </div>
        )
    }
    console.log("render", galleryData);
}
