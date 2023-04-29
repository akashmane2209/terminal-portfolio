import { FaReact, FaAws, FaAngular, FaVuejs, FaNodeJs } from 'react-icons/fa';
import { BsStack, BsTerminalFill } from 'react-icons/bs';
import { DiMongodb } from 'react-icons/di';
import {
  SiSvelte,
  SiPlaywright,
  SiTestinglibrary,
  SiTypescript,
  SiNginx,
  SiSwagger,
  SiJasmine,
  SiJest,
  SiRedux
} from 'react-icons/si';

export const COMMANDS = [
  'help',
  'whoami',
  'experience',
  'education',
  'projects',
  'contact',
  'download',
  'gui'
] as const;
export const HELP_TEXT = {
  help: 'List of all commands that are available',
  whoami: 'Short introduction about me',
  experience: 'Breif about my work experience',
  education: 'Lists education details & certifications',
  projects: 'List some of my projects outside of professional work',
  contact:
    'Shows contact info such as email & other social media profiles of me',
  download: 'Download the latest copy of my resume',
  gui: 'Shows GUI view of my portfolio'
};

export const EXPERIENCES = [
  {
    title: 'Frontend Engineer',
    duration: {
      start: 'March 2023',
      end: 'Current'
    },
    company: 'Razorpay',
    description: () => (
      <div className="description">
        <p>
          Currently working with Magic Checkout team which is a one click
          checkout solution for ecommerce stores. Spending most of my time in
          refining the analytics workflow to make sure marketting funnels are
          tracked accurately.{' '}
        </p>
        <br />
        <p>
          Working on core checkout workflow of razorpay which handles over{' '}
          <a
            className="font-medium underline"
            href="https://razorpay.com/newsroom/office-box-office-bazaar-all-about-a-billion-razorpay-transactions-in-fy23/"
            target="_blank"
            rel="noreferrer"
          >
            a billion transactions annually
          </a>
        </p>
        <br />
        <p>
          Previously worked with Observability and RazorpayX Corporate Cards
          team. Helped o11y team build custom dashboards for{' '}
          <a
            className="font-medium underline"
            href="https://www.hypertrace.org/"
            target="_blank"
            rel="noreferrer"
          >
            Hypertrace
          </a>{' '}
          which is an open source o11y platform used by razorpay developers to
          monitor their services.
        </p>
        <br />
        <p>
          In the RazorpayX Corporate Cards team, helped in setting up E2E
          testing with Playwright, improved test coverage and helped built
          multiple features that helped in improving user experience.
        </p>
        <br />
        <p>
          Also contributed to frontend-universe project - razorpay&#39;s inhouse
          tool for scaffolding new projects with support for linting, error
          monitoring, out of box support for blade (design system) as well as
          infra setup for projects based on rendering stratgies
        </p>
        <br />
        <div className="my-2 flex items-center">
          <p className="mr-2 flex items-center font-semibold text-cyan-400">
            <BsStack className=" mr-1" />
            Tech Stack:{' '}
          </p>
          <p className="flex space-x-3 text-xl">
            <FaReact className="text-cyan-500" />
            <SiRedux className="text-purple-800" />
            <SiSvelte className="text-[#FF3E00]" />
            <FaAngular className="text-red-600" />
            <SiTypescript className="text-blue-500" />
            <SiPlaywright className="text-purple-300" />
            <SiTestinglibrary className="text-red-400" />
            <FaAws className="text-[#FF9900]" />
            <SiNginx className="text-green-500" />
          </p>
        </div>
        <p className="awards my-2 flex font-semibold text-[#f4b33b]">
          🏆 Awards
        </p>
        <div className="flex flex-col space-y-2">
          <p>
            <a
              className="font-medium underline"
              href="https://www.linkedin.com/posts/akash-anand-mane_upwardsandonwards-activity-6971464229123964928-PsQ6?utm_source=share&utm_medium=member_desktop"
              target="_blank"
              rel="noreferrer"
            >
              Recognised
            </a>{' '}
            for going above and beyond during the release of custom dashboards.
          </p>
          <p>
            {' '}
            <a
              className="font-medium underline"
              href="https://drive.google.com/file/d/1fWn22wCPyY6I_ToXZQw4aPLXQTbLTYqY/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Recognised
            </a>{' '}
            by core frontend team for contributing to frontend universe
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Software Development Engineer',
    duration: {
      start: 'Sept 2021',
      end: 'March 2022'
    },
    company: 'Fynd',
    description: () => (
      <div className="description">
        <p>
          Worked on migration of over 10 million users on Fynd Platform to
          create separate users for different channels.
        </p>
        <br />
        <p>
          Worked on refactoring FDK CLI codebase from JavaScript to TypeScript.
        </p>
        <br />
        <p>
          Lead a team of two developers while taking full ownership of
          authentication & theme microservice along with contributing to FDK CLI{' '}
        </p>
        <br />
        <div className="my-2 flex items-center">
          <p className="mr-2 flex items-center font-semibold text-cyan-400">
            <BsStack className=" mr-1" />
            Tech Stack:{' '}
          </p>
          <p className="flex space-x-3 text-xl">
            <FaVuejs className="text-green-500" />
            <FaNodeJs className="text-green-500" />
            <SiTypescript className="text-blue-500" />
            <BsTerminalFill />
            <FaAws className="text-[#FF9900]" />
            <SiNginx className="text-green-500" />
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Engineer',
    duration: {
      start: 'Sept 2020',
      end: 'Sept 2021'
    },
    company: 'Fynd',
    description: () => (
      <div className="description">
        <p>
          Worked closely with Reliance Jio to develop multiple ecommerce
          websites using Fynd Platform
        </p>
        <br />
        <p>
          Helped in building Jiomart Digital an assisted sales platfrom that was
          installed in Reliance Digital stores to help offline customers browse
          and buy their favourite electronics items. Also helped in developing
          new themes for{' '}
          <a
            className="font-medium underline"
            href="https://platform.fynd.com/"
            target="_blank"
            rel="noreferrer"
          >
            Fynd Platform
          </a>{' '}
        </p>
        <br />
        <p>
          Wrote unit test cases for backend and frontend projects to improve
          code coverage and quality. Wrote swagger spec for multiple
          microservices which helped in building easy to use{' '}
          <a
            className="font-medium underline"
            href="https://github.com/gofynd/fdk-client-javascript"
            target="_blank"
            rel="noreferrer"
          >
            SDKs
          </a>{' '}
          for Fynd Platform
        </p>
        <br />
        <p>
          Contributed in{' '}
          <a
            className="font-medium underline"
            href="https://github.com/gofynd/nitrozen-vue/tree/cea38f6a067d7d36bd8f1f2ac82b09dd9095a53e"
            target="_blank"
            rel="noreferrer"
          >
            Nitrozen
          </a>{' '}
          - a building design system for Fynd
        </p>
        <div className="my-2 flex items-center">
          <p className="mr-2 flex items-center font-semibold text-cyan-400">
            <BsStack className=" mr-1" />
            Tech Stack:{' '}
          </p>
          <p className="flex space-x-3 text-xl">
            <FaVuejs className="text-green-500" />
            <FaNodeJs className="text-green-500" />
            <SiJasmine className="text-pink-400" />
            <SiJest className="text-pink-800" />
            <SiSwagger className="text-green-500" />
            <DiMongodb className="text-green-400" />
          </p>
        </div>
        <p className="awards my-2 flex font-semibold text-[#f4b33b]">
          🏆 Awards
        </p>
        <div className="flex flex-col space-y-2">
          <p>
            Fynd Star for going beyond call of duty in releasing Jiomart Digital
            across 3200+ stores in India
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Junior Engineer',
    duration: {
      start: 'Nov 2019',
      end: 'Sept 2020'
    },
    company: 'Fynd',
    description: () => (
      <div className="description">
        <p>
          Among the first 30 engineers to work at Fynd and was part of the core
          team that built Fynd Platform - an ecommerce platform to help offline
          merchants setup their online stores with a few clicks
        </p>
        <br />
        <p>
          Worked on migrating fynd.com from 4 standalone project to a light
          weight highly customisable Fynd Platform theme.
        </p>
        <br />
        <p>
          Worked on building a realtime theme editor for Fynd Platform where
          merchants can drag and drop sections, update the look and feel of
          their ecommerce stores in realtime.
        </p>
        <br />
        <p>
          Built{' '}
          <a
            className="font-medium underline"
            href="https://github.com/gofynd/fdk-cli"
            target="_blank"
            rel="noreferrer"
          >
            Fynd Development Kit
          </a>{' '}
          a CLI tool which helps in building themes and extensions for Fynd
          Platform from scratch. Also maintained the project till the end of my
          tenure where I improved the code quality, migrated the codebase to
          TypeScript and improved the documentation.
        </p>
        <div className="my-2 flex items-center">
          <p className="mr-2 flex items-center font-semibold text-cyan-400">
            <BsStack className=" mr-1" />
            Tech Stack:{' '}
          </p>
          <p className="flex space-x-3 text-xl">
            <FaVuejs className="text-green-500" />
            <FaNodeJs className="text-green-500" />
            <SiTypescript className="text-blue-500" />
          </p>
        </div>
        <p className="awards my-2 flex font-semibold text-[#f4b33b]">
          🏆 Awards
        </p>
        <div className="flex flex-col space-y-2">
          <p>
            Fynd Star for taking full ownership and developing the CLI tool in
            record time
          </p>
        </div>
      </div>
    )
  }
];

export const EDUCATION = [
  {
    degree: `Bachelor's of Science - Information Technology`,
    college: `SIES College of Arts Commerce & Science`,
    duration: {
      start: 'Jun 2016',
      end: 'April 2019'
    },
    score: '9.53 / 10'
  },
  {
    degree: `HSC`,
    college: `Mumbai Junior College`,
    duration: {
      start: 'Jun 2014',
      end: 'Feb 2016'
    },
    score: '66%'
  },
  {
    degree: `SSC`,
    college: `OLGC High School`,
    duration: {
      end: 'March 2014'
    },
    score: '92.60%'
  }
];

export const CONTACTS = [
  {
    label: 'Email',
    link: 'mailto:m.akash2209@gmail.com',
    value: 'm.akash2209@gmail.com'
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/akash-anand-mane/'
  },
  {
    label: 'Github',
    link: 'https://github.com/akashmane2209'
  }
];

export const PROJECTS = [
  {
    label: 'Envest',
    link: 'https://envest.money',
    description:
      'Envest is a crypto trading platform that allows users to buy & sell baskets of cryptocurrencies.',
    stack: 'NextJS, Express, TypeScript, MongoDB, Docker, Cloudflare'
  },
  {
    label: 'Fynd Development Kit',
    link: 'https://github.com/gofynd/fdk-cli',
    description: 'CLI tool to build themes and extensions for Fynd platform.',
    stack: 'NodeJS, Commander, TypeScript, Webpack, Socket.io'
  },
  {
    label: 'Bombay Running Mobile App',
    link: 'https://github.com/akashmane2209/react-native-brapp',
    description:
      'Running club app to showcase upcoming events. Users could connect with GFit, Fitbit to view & track workout history',
    stack: 'React Native/Expo, Redux, Firebase'
  },
  {
    label: 'Motiff Square - Client Website',
    link: 'https://motiffsquare.com/',
    description: 'Showcase website for displaying recent contruction projects',
    stack: 'Wordpress, PHP, MySQL'
  }
];
