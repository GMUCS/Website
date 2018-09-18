
import TalkWithChairPic from "../Images/TalkWithChair.jpg"

export default [
    {
      id: 0,
      title: 'Club Days',
      //allDay: true,
      start: new Date(2018, 8, 20, 9),
      end: new Date(2018, 8, 20, 15),
    },
    {
      id: 0,
      title: 'Club Days',
      //allDay: true,
      start: new Date(2018, 8, 21, 9),
      end: new Date(2018, 8, 21, 15),
    },
    
   {
      //Calander stuff
      id: 2,
      title: 'Talk With the Chair',
      start: new Date(2018, 9, 2, 17),
      end: new Date(2018, 9, 2, 19),
      desc: 'Big conference for important people',
      

      //Card Stuff
      renderCard: true,
      Link: "ChairTalk",
      cardTitle: "Talk With The Chair",
      cardSubtitle: "Learn what the Macewan CS department can do for you!",
      cardOverlayTitle: "Coffee & Cam",
      cardOverlaySubtitle: "everyone welcome",
      cardImage: TalkWithChairPic,
    
    },

  ]