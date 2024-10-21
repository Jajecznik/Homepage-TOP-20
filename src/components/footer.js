import imageContainer from './footer-image';
import contactMeContainer from './footer-contact-me';

const footerComponent = () => {
    // footer
    const footerElement = document.createElement('footer');
    footerElement.classList.add(
        'bg-cyan-600'
    );

    // footer - content container
    const footerContent = document.createElement('div');
    footerContent.classList.add(
        'max-w-7xl',
        'mx-auto',
        'flex',
        'flex-col',
        'sm:flex-row',
        'sm:gap-6',
        'lg:gap-8',
        'sm:p-6',
        'lg:p-8'
    );

    // contact me section
    const contactMeSection = contactMeContainer();
    footerContent.appendChild(contactMeSection);

    // image section
    const footerImageContainer = imageContainer();
    footerContent.appendChild(footerImageContainer);

    footerElement.appendChild(footerContent);

    return footerElement;
};

export default footerComponent;
