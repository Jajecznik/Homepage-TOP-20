import FooterImage from '../images/footer-image.jpg';

const imageContainer = () => {
    // footer image - container
    const footerImageContainer = document.createElement('div');
    footerImageContainer.classList.add(
        'sm:basis-2/5'
    );

    // footer image
    footerImageContainer.innerHTML = `
        <img src="${FooterImage}" alt="" class="object-cover" />
    `;

    return footerImageContainer;
};

export default imageContainer;
