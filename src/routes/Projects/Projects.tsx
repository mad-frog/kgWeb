import React from "react";
import "./projects.scss";
import NailHammerAnimation from "../../components/NailHammerAnimation";
import { AnimatedLetters } from "../../components/AnimatedLetters";
import CloseButton from '../../components/CloseButton';
import { FlowerButton } from '../../components/FlowerButton';

interface IProps {
  darkMode: boolean;
}

export default class Projects extends React.Component<IProps> {
  componentDidMount () {
    // console.log('PROJECTS - did mount')
  }

  render () {

    const projects = [
      // {
      //   id: "anim-letters",
      //   name: "Animated letters",
      //   date: "12/05/2020",
      //   photos: [ ],
      //   description: "",
      //   type: "programming"
      // },
      {
        id: "anim-close-btn",
        name: "Animated close button",
        date: "02/05/2020",
        photos: [],
        description: "",
        type: "programming"
      },
      {
        id: "anim-hammer",
        name: "Animation - under construction",
        date: "02/05/2020",
        photos: [],
        description: "",
        type: "programming"
      },
      // {
      //   id: "vman-new-flyer",
      //   name: "Vman new flyer",
      //   date: "02/03/2019",
      //   photos: [
      //     "/projects/vman/newFlyerReadyFront.png",
      //     "/projects/vman/newFlyerReadyBack.png"
      //   ],
      //   description: "Some description Vman business card",
      //   type: "design"
      // },
      // {
      //   id: "vman-logo-new",
      //   name: "Vman logo updated",
      //   date: "02/02/2019",
      //   photos: [ "/projects/vman/logo/logoNEW.png" ],
      //   description: "Some description Vman NEW",
      //   type: "design"
      // },
      // {
      //   id: "vman-business-card",
      //   name: "Vman business card",
      //   date: "02/03/2015",
      //   photos: [ "/projects/vman/business-card.png" ],
      //   description: "Some description Vman business card",
      //   type: "design"
      // },
      // {
      //   id: "vman-old-flyer",
      //   name: "Vman old flyer",
      //   date: "02/03/2019",
      //   photos: [ "/projects/vman/flyerOldAdjusted.png" ],
      //   description: "Some description Vman business card",
      //   type: "design"
      // },
      // {
      //   id: 'vman-logo',
      //   name: "VMan logo",
      //   date: "02/02/2015",
      //   photos: [ "/projects/vman/logo/logoOLD.png" ],
      //   description: "Design project",
      //   type: "design"
      // },
      // {
      //   id: "flyer-com-app",
      //   name: "Flyer for comunication app",
      //   date: "02/02/2015",
      //   photos: [ "/projects/university/labots_oranzsfons.png" ],
      //   description: "",
      //   type: "design"
      // },
      // {
      //   id: "christmas-poster",
      //   name: "Poster for the Christmas concert",
      //   date: "02/02/2015",
      //   photos: [ "/projects/university/plakats.png" ],
      //   description: "Design project for local Christmas concert",
      //   type: "design"
      // },

      {
        id: "anim-flower-menu",
        name: "Animated flower menu (design & code) - my old website",
        date: "02/02/2015",
        photos: [],
        description: "",
        type: "programming"
        // animated flower
      },
      // {
      //   id: "makey-makey",
      //   name: "SAP Hanahaus makey makey project",
      //   date: "02/02/2015",
      //   photos: [ ],
      //   description: "",
      //   type: "programming"
      //   // add experience project post
      // },
      // {
      //   id: "trasportation-map",
      //   name: "Bachelors project - Interactive public trasportation map",
      //   date: "02/02/2015",
      //   photos: [ ],
      //   description: "",
      //   type: "programming"
      // },
      // {
      //   id: "immitation-research",
      //   name: "Imitation model and program development for nature resource use and sustainability evaluation in household protected landscape area",
      //   date: "02/02/2015",
      //   photos: [ ],
      //   description: "Research, analysis and prototype design on project. Research was concentrated on possible multi platform technologies and their possibilities for use outdoors with and without internet connection. Software aim was to gather different kind of map layers, show those and give possibility to add notes, mark areas and add points on map. Also had to get additional statistic data from multiple agencies about used resources.",
      //   type: "prototype, research"
      // },
      // {
      //   id: "vidzeme-tourism-game",
      //   name: "Tourism game for Latvia's District of Vidzeme",
      //   date: "2013",
      //   photos: [ "/projects/university/vidzsele.png" ],
      //   url: "http://www.vidzeme.com/spele/",
      //   description: "Game developed with JavaScript, JQuery, HTML, HTML5, CSS3, CSS, PHP. ",
      //   type: "programming"
      // },
      // {
      //   id: "cat-game",
      //   name: "Cat game",
      //   date: "02/02/2015",
      //   photos: [ "/projects/university/catgame.png" ],
      //   description: "",
      //   type: "programming"
      // },
      // {
      //   id: 'design-logo-vidzeme-culture-center',
      //   name: "Logo for Vidzemes Culture Heritage Research Center",
      //   date: "02/02/2014",
      //   photos: [ "/projects/university/VCHRC.png" ],
      //   description: "Some description"
      // },
      // {
      //   name: "Research and prototype design",
      //   date: "02/02/2014",
      //   photos: [
      //     "/projects/university/GIS/iosScreens/1.png",
      //     "/projects/university/GIS/iosScreens/2.png",
      //     "/projects/university/GIS/iosScreens/3.png",
      //     "/projects/university/GIS/iosScreens/4.png",
      //     "/projects/university/GIS/iosScreens/5.png",
      //     "/projects/university/GIS/iosScreens/6.png"
      //   ],
      //   description: "Some description"
      // }
    ];

    // TODO: replace this when props are managed properly
    const darkMode = true; //this.props.isDarkMode;

    return <>
      {projects.map(item => {
        return <div id={item.id} key={item.id} className="project-container">
          <h1>{item.name}</h1>
          {
            item.id === "anim-letters" && <AnimatedLetters label="under construction" />
          }
          {
            item.id === "anim-flower-menu" && <FlowerButton />
          }
          {
            item.id === "anim-close-btn"
              && <CloseButton onClick={() => {}} size={60} color={'red'} lineWidth={10} />
          }
          {
            item.id === "anim-hammer"
              && <NailHammerAnimation
                  label="under construction"
                  animate={true}
                  darkMode={darkMode}
                />
          }
          {item.photos.map(photo => <div  key={photo}>
            <img src={photo} alt="" />
            <div className="separator"></div>
          </div>)}
        </div>
      })
      }
    </>
  }
}