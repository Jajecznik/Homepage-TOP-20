import cardComponent from "./card";

const mainComponent = (cardsData) => {
    // main element
    const mainElement = document.createElement('main');
    mainElement.classList.add(
        'flex-grow'
    );

    // main - content container
    const mainContent = document.createElement('div');
    mainContent.classList.add(
        'max-w-7xl',
        'mx-auto',
        'px-3',
        'pt-6',
        'pb-12',
        'sm:px-6',
        'sm:pt-8',
        'sm:pb-16'
    );

    // main - header
    const mainHeader = document.createElement('h2');
    mainHeader.classList.add(
        'font-bold',
        'text-2xl',
        'sm:text-3xl',
        'lg:text-4xl',
        'text-center',
        'sm:text-left',
        'mb-6'
    );
    mainHeader.innerText = "My work";

    mainContent.appendChild(mainHeader);

    // main - cards container
    const cardsContainer = document.createElement('section');
    cardsContainer.classList.add(
        'grid',
        'gap-x-6',
        'gap-y-12',
        'lg:gap-x-8',
        'lg:gap-y-16',
        'grid-cols-1',
        'sm:grid-cols-2',
        'lg:grid-cols-3'
    );

    for (let i = cardsData.length - 1; i >= 0; i--) {
        const card = cardComponent(cardsData[i]);
        cardsContainer.appendChild(card);
    }

    mainContent.appendChild(cardsContainer);
    mainElement.appendChild(mainContent);

    return mainElement;
};

export default mainComponent;
