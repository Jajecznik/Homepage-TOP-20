import GitHub from '../images/github.svg';
import OpenInNew from '../images/open-in-new.svg';

const cardComponent = (cardData) => {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add(
        'bg-slate-100',
        'rounded',
        'shadow-md'
    );

    // screenshot - container
    const screenshotContainer = document.createElement('div');
    screenshotContainer.classList.add(
        'overflow-hidden'
    );

    // screenshot link
    const screenshotLink = document.createElement('a');
    screenshotLink.href = cardData.page;
    screenshotLink.target = "_blank";
    screenshotLink.rel = 'noopener noreferrer';

    // image - screenshot 
    const cardScreenshot = document.createElement('img');
    cardScreenshot.classList.add();
    const imageName = cardData.name.toLowerCase();
    try {
        const imageSrc = require(`../images/card-screenshots/${imageName}.png`);
        cardScreenshot.src = imageSrc;
    } catch (error) {
        console.error('Image not found:', error);
    }
    cardScreenshot.alt = "image which opens project page in new tab";

    // Add hover event
    cardScreenshot.addEventListener('mouseover', () => {
        cardScreenshot.classList.add('animate-blurIn');
        cardScreenshot.classList.remove('animate-blurOut');
    });

    // Add mouseout event
    cardScreenshot.addEventListener('mouseout', () => {
        cardScreenshot.classList.add('animate-blurOut');
        cardScreenshot.classList.remove('animate-blurIn');
    });

    screenshotLink.appendChild(cardScreenshot);
    screenshotContainer.appendChild(screenshotLink);
    cardContainer.appendChild(screenshotContainer);

    // project info - container
    const projectInfoContainer = document.createElement('div');
    projectInfoContainer.classList.add(
        'p-3',
        'pb-9',
        'border-t-2'
    );
    const projectInfo = document.createElement('div');

    const projectName = document.createElement('h3');
    projectName.classList.add(
        'flex',
        'justify-between',
        'text-xl',
        'lg:text-2xl',
        'text-center',
        'sm:text-left',
        'font-bold',
        'mb-3',
        'ml-3',
        'sm:ml-0'
    );
    projectName.innerText = cardData.name;

    // github - link
    const gitHubLink = document.createElement('a');
    gitHubLink.href = cardData.repo;
    gitHubLink.target = '_blank';
    gitHubLink.rel = 'noopener noreferrer';

    // github - icon
    const gitHubIcon = document.createElement('img');
    gitHubIcon.src = GitHub;
    gitHubIcon.alt = "icon with link to project repository";
    gitHubIcon.classList.add(
        'w-7',
        'h-7',
        'lg:w-8',
        'lg:h-8',
        'ml-3',
        'transition',
        'duration-300',
        'transform',
        'hover:scale-125',
        'ease-out'
    );

    // open in new tab - link
    const openInNewLink = document.createElement('a');
    openInNewLink.href = cardData.page;
    openInNewLink.target = '_blank';
    openInNewLink.rel = 'noopener noreferrer';

    // open in new tab - icon
    const openInNewIcon = document.createElement('img');
    openInNewIcon.src = OpenInNew;
    openInNewIcon.alt = "icon which opens project page in new tab";
    openInNewIcon.classList.add(
        'w-7',
        'h-7',
        'lg:w-8',
        'lg:h-8',
        'ml-3',
        'transition',
        'duration-300',
        'transform',
        'hover:scale-125',
        'ease-out'
    );

    const projectIcons = document.createElement('span');
    projectIcons.classList.add(
        'flex'
    );
    gitHubLink.appendChild(gitHubIcon);
    openInNewLink.appendChild(openInNewIcon);
    projectIcons.appendChild(gitHubLink);
    projectIcons.appendChild(openInNewLink);

    projectName.appendChild(projectIcons);
    projectInfo.appendChild(projectName);

    projectInfoContainer.appendChild(projectInfo);

    const projectDescription = document.createElement('p');
    projectDescription.innerText = cardData.description;
    projectInfoContainer.appendChild(projectDescription);

    cardContainer.appendChild(projectInfoContainer);

    return cardContainer;
};

export default cardComponent;
