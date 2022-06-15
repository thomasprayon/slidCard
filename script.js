'use strict';

const peopleObj = [
    {
        id: 1,
        fullName: 'John Kid',
        job: 'Front-end Developer',
        img: 'https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg',
        description:
            'A Front-End Web Developer is a tech industry professional who builds the front portion of websites that customers, guests, or clients use on a daily basis.',
    },
    {
        id: 2,
        fullName: 'Samantha Jones',
        job: 'Back-end Developer',
        img: 'https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg',
        description:
            'Back-end developers create, code, and improve the server, server-side applications, and databases that, when combined with front-end codes, help create a functional, seamless experience for the end-user. ',
    },
    {
        id: 3,
        fullName: 'Andrea Cipolla',
        job: 'Software Developer',
        img: 'http://thispix.com/wp-content/uploads/2015/06/Copy-of-Edit-1798-1.jpg',
        description:
            'Software developers create the computer applications that allow users to do specific tasks and the underlying systems that run the devices or control networks. ',
    },
    {
        id: 4,
        fullName: 'James Loose Tooth',
        job: 'Computer Network Architects',
        img: 'https://www.ninjaonlinedating.com/blog/wp-content/uploads/2019/08/BestDatingProfilePhotosForMenKRAK.jpg',
        description:
            'Computer network architects design and build data communication networks, including local area networks (LANs), wide area networks (WANs), and Intranets.',
    },
    {
        id: 5,
        fullName: 'Hendrix Blackman',
        job: 'Computer Support Specialists',
        img: 'http://thispix.com/wp-content/uploads/2015/06/Edit-9898-1.jpg',
        description:
            'Computer support specialists assist computer users and organizations. These specialists either maintain computer networks or provide technical help directly to computer users.',
    },
    {
        id: 6,
        fullName: 'Dolly Jackson',
        job: 'IT Project managers',
        img: 'https://wemeancareer.com/wp-content/uploads/2020/04/Professional-LinkedIn-Headshot.png',
        description:
            'Plan, initiate, and manage information technology (IT) projects. Lead and guide the work of technical staff. Serve as liaison between business and technical aspects of projects. Plan project stages and assess business implications for each stage.',
    },
    {
        id: 7,
        fullName: 'Dusty Lichtenstein',
        job: 'Information Security Analysts ',
        img: 'https://i.pinimg.com/564x/01/6d/9a/016d9a3965faa96babe90649a3b590ec.jpg',
        description:
            'Information security analysts are heavily involved with creating their organization’s disaster recovery plan, a procedure that IT employees follow in case of emergency. These plans allow for the continued operation of an organization’s IT department.',
    },
    {
        id: 8,
        fullName: 'Tom Raj',
        job: 'Computer System Analysts',
        img: 'http://thispix.com/wp-content/uploads/2015/06/edited-TSP_3683-1.jpg',
        description:
            'Computer systems analysts, sometimes called systems architects, study an organization’s current computer systems and procedures and design improvements to them. In doing so, these analysts help the organization operate more efficiently',
    },
    {
        id: 9,
        fullName: 'Richard Atmen',
        job: 'Database Administrators',
        img: 'https://www.perfocal.com/blog/content/images/2020/07/Perfocal_Male_Dating_Profile_Portrait_Asian.jpg',
        description:
            'Database administrators and architects create or organize systems to store and secure a variety of data, such as financial information and customer shipping records. They also make sure that the data are available to authorized users.',
    },
    {
        id: 10,
        fullName: 'Gina Tonico',
        job: 'Network and Computer Systems Administrators',
        img: 'http://thispix.com/wp-content/uploads/2015/06/011.jpg',
        description:
            'Computer networks are critical parts of almost every organization. Network and computer systems administrators are responsible for the day-to-day operation of these networks. They organize, install, and support an organization’s computer systems.',
    },
];
const fullName = document.getElementById('personName');
const img = document.getElementById('personImg');
const job = document.getElementById('job');
const description = document.getElementById('jobDescription');
const prevButton = document.getElementById('previousBtn');
const randomButton = document.getElementById('randomBtn');
const nextButton = document.getElementById('nextBtn');
let currentPerson = 0;

const showPerson = person => {
    const item = peopleObj[person];
    fullName.textContent = item.fullName;
    img.src = item.img;
    job.textContent = item.job;
    description.textContent = item.description;
};

window.addEventListener('DOMContentLoaded', showPerson(currentPerson));

nextButton.addEventListener('click', () => {
    currentPerson++;
    if (currentPerson > peopleObj.length - 1) {
        currentPerson = 0;
        showPerson(currentPerson);
    } else {
        showPerson(currentPerson);
    }
});

prevButton.addEventListener('click', () => {
    currentPerson--;
    currentPerson < 0
        ? (currentPerson = peopleObj.length - 1)
        : showPerson(currentPerson);
});

randomButton.addEventListener('click', () => {
    const randomNumber = Math.trunc(Math.random() * peopleObj.length + 1);
    showPerson(randomNumber);
});
