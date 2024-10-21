import HeaderImage from '../images/header-image.jpg';
import GitHub from '../images/github.svg';
import LinkedIn from '../images/linkedin.svg';
import X from '../images/x.svg';

const headerComponent = () => {
    // main header element
    const headerElement = document.createElement('header');
    headerElement.classList.add(
        'bg-cyan-600',
        'relative',
        'overflow-hidden'
    );

    headerElement.innerHTML = `
        <div class="absolute inset-0 bg-slate-100 clip-path-custom-slope sm:clip-path-custom-slope-sm lg:clip-path-custom-slope-lg"></div>
    `;

    // header - content container
    const headerContent = document.createElement('div');
    headerContent.classList.add(
        'max-w-7xl',
        'mx-auto',
        'flex',
        'flex-col',
        'sm:flex-row',
        'lg:items-center',
        'px-3',
        'pt-6',
        'pb-12',
        'sm:px-6',
        'sm:pt-8',
        'sm:pb-16',
        'relative',
        'z-10'
    );

    // image container
    const imageContainer = document.createElement('div');
    imageContainer.classList.add(
        'w-full',
        'sm:w-64',
        'sm:self-start',
        'lg:self-auto',
        'lg:w-2/5',
        'sm:mt-28',
        'lg:mt-0',
        'relative'
    );

    // image
    const image = document.createElement('img');
    image.src = HeaderImage;
    image.alt = "";
    image.classList.add(
        'w-full',
        'h-auto',
        'object-contain',
        'rounded',
        'sm:rounded-none',
        'sm:rounded-l',
        'lg:rounded'
    );

    // text overlay element
    const imageText = document.createElement('h1');
    imageText.innerText = "Giovanni Giorgio";
    imageText.classList.add(
        'absolute',
        'bottom-0',
        'sm:-top-28',
        'lg:top-auto',
        'left-0',
        'w-full',
        'sm:w-96',
        'lg:w-full',
        'bg-black',
        'bg-opacity-50',
        'sm:bg-transparent',
        'lg:bg-black',
        'lg:bg-opacity-50',
        'text-white',
        'text-center',
        'py-3',
        'rounded-b',
        'font-bold',
        'text-4xl',
        'sm:text-5xl'
    );

    imageContainer.appendChild(image);
    imageContainer.appendChild(imageText);
    headerContent.appendChild(imageContainer);

    // about me - section
    const aboutMeSection = document.createElement('section');
    aboutMeSection.classList.add(
        'w-full',
        'sm:w-3/5',
        'bg-slate-100',
        'sm:rounded',
        'lg:rounded-none',
        'lg:rounded-r',
        'sm:shadow-md',
        'sm:px-4',
        'sm:py-8',
        'sm:mt-20',
        'lg:mt-0'
    );

    const aboutMeHeader = document.createElement('h2');
    aboutMeHeader.classList.add(
        'text-2xl',
        'sm:text-3xl',
        'lg:text-4xl',
        'text-center',
        'lg:text-left',
        'font-bold',
        'mt-4',
        'sm:mt-0',
        'mb-6'
    );
    aboutMeHeader.innerText = "About me";
    aboutMeSection.appendChild(aboutMeHeader);

    const aboutMeText = document.createElement('p');
    aboutMeText.classList.add(
        'my-4',
        'text-gray-600'
    );
    aboutMeText.innerText = "My name is Giovanni Giorgio, and at  years old, I've lived a life full of experiences, stories, and memories. I've always been curious about the world, enjoying the beauty of simple moments and the wisdom that comes with time. Whether it's reminiscing about the past or embracing the present, I find joy in sharing experiences, learning something new, and appreciating the richness of life.";
    aboutMeSection.appendChild(aboutMeText);

    // links - section
    const linksSection = document.createElement('section');
    linksSection.classList.add(
        'flex',
        'justify-center',
        'lg:justify-end',
        'mb-3',
        'sm:mb-0'
    );

    // github - link
    const gitHubLink = document.createElement('a');
    gitHubLink.href = 'https://github.com/Jajecznik';
    gitHubLink.target = '_blank';
    gitHubLink.rel = 'noopener noreferrer';
    gitHubLink.innerHTML = `
        <img src="${GitHub}" alt="GitHub icon, opens github.com/Jajecznik in new tab" class="w-8 h-8 mr-2 transition duration-300 transform hover:scale-125 ease-out" />
    `;
    linksSection.appendChild(gitHubLink);

    // linkedin - link
    const linkedInLink = document.createElement('a');
    linkedInLink.href = 'https://www.linkedin.com/';
    linkedInLink.target = '_blank';
    linkedInLink.rel = 'noopener noreferrer';
    linkedInLink.innerHTML = `
        <img src="${LinkedIn}" alt="LinkedIn icon, opens linkedin.com in new tab" class="w-8 h-8 mr-2 transition duration-300 transform hover:scale-125 ease-out" />
    `;
    linksSection.appendChild(linkedInLink);

    // x - link
    const xLink = document.createElement('a');
    xLink.href = 'https://x.com/';
    xLink.target = '_blank';
    xLink.rel = 'noopener noreferrer';
    xLink.innerHTML = `
        <img src="${X}" alt="X icon, opens x.com in new tab" class="w-8 h-8 mr-2 transition duration-300 transform hover:scale-125 ease-out" />
    `;
    linksSection.appendChild(xLink);

    aboutMeSection.appendChild(linksSection);

    headerContent.appendChild(aboutMeSection);
    headerElement.appendChild(headerContent);

    return headerElement;
};

export default headerComponent;
