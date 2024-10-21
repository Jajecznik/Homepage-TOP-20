import Phone from '../images/phone.svg';
import Email from '../images/email.svg';
import GitHub from '../images/github.svg';
import LinkedIn from '../images/linkedin.svg';
import X from '../images/x.svg';

const contactMeContainer = () => {
    // contact me - section
    const contactMeSection = document.createElement('section');
    contactMeSection.classList.add(
        'text-slate-200',
        'sm:basis-3/5',
        'px-3',
        'py-6',
        'sm:p-0'
    );

    // contact me - header
    const contactMeHeader = document.createElement('h2');
    contactMeHeader.classList.add(
        'font-bold',
        'text-2xl',
        'sm:text-3xl',
        'lg:text-4xl',
        'text-center',
        'sm:text-left'
    );
    contactMeHeader.innerText = "Contact me";
    contactMeSection.appendChild(contactMeHeader);

    // contact me - information
    const contactMeInfo = document.createElement('p');
    contactMeInfo.classList.add(
        'my-4',
        'sm:my-5',
        'lg:my-6'
    );
    contactMeInfo.innerText = "Please get in touch if you think our work could be mutually beneficial!";
    contactMeSection.appendChild(contactMeInfo);

    // contact me - address section
    const contactMeAddresSection = document.createElement('section');
    contactMeAddresSection.classList.add(
        'my-4',
        'sm:my-5',
        'lg:my-6',
        'text-sm',
        'sm:text-base'
    );

    const contactMeRoad = document.createElement('p');
    contactMeRoad.innerText = "1234 Random Road";
    contactMeAddresSection.appendChild(contactMeRoad);

    const contactMeTown = document.createElement('p');
    contactMeTown.innerText = "Random Town, California 12345";
    contactMeAddresSection.appendChild(contactMeTown);

    contactMeSection.appendChild(contactMeAddresSection);

    // contact me - contact information section
    const contactMeContactSection = document.createElement('section');
    contactMeContactSection.classList.add(
        'my-4',
        'sm:my-5',
        'lg:my-6',
        'text-sm',
        'sm:text-base'
    );

    // phone number
    const phoneNumber = document.createElement('p');
    phoneNumber.classList.add(
        'flex',
        'items-center',
        'my-1',
        'sm:my-2'
    );
    phoneNumber.innerHTML = `
        <img src="${Phone}" alt="" class="w-6 h-6 mr-2 hidden sm:inline-block" />
        555-555-5555
    `;
    contactMeContactSection.appendChild(phoneNumber);

    // email address
    const emailAddress = document.createElement('p');
    emailAddress.classList.add(
        'flex',
        'items-center',
        'my-1',
        'sm:my-2'
    );
    emailAddress.innerHTML = `
        <img src="${Email}" alt="" class="w-6 h-6 mr-2 hidden sm:inline-block" />
        i-am-not-real@random-email.com
    `;
    contactMeContactSection.appendChild(emailAddress);
    contactMeSection.appendChild(contactMeContactSection);

    // icon links
    const iconLinksSection = document.createElement('section');
    iconLinksSection.classList.add(
        'flex',
        'justify-center',
        'sm:justify-start',
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
    iconLinksSection.appendChild(gitHubLink);

    // linkedin - link
    const linkedInLink = document.createElement('a');
    linkedInLink.href = 'https://www.linkedin.com/';
    linkedInLink.target = '_blank';
    linkedInLink.rel = 'noopener noreferrer';
    linkedInLink.innerHTML = `
        <img src="${LinkedIn}" alt="LinkedIn icon, opens linkedin.com in new tab" class="w-8 h-8 mr-2 transition duration-300 transform hover:scale-125 ease-out" />
    `;
    iconLinksSection.appendChild(linkedInLink);

    // x - link
    const xLink = document.createElement('a');
    xLink.href = 'https://x.com/';
    xLink.target = '_blank';
    xLink.rel = 'noopener noreferrer';
    xLink.innerHTML = `
        <img src="${X}" alt="X icon, opens x.com in new tab" class="w-8 h-8 mr-2 transition duration-300 transform hover:scale-125 ease-out" />
    `;
    iconLinksSection.appendChild(xLink);
    contactMeSection.appendChild(iconLinksSection);

    return contactMeSection;
};

export default contactMeContainer;
