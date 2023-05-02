import React, { useEffect, useState } from 'react'
import Header from './Header'
import Tours from './Tours'
import ViewInfo from './ViewInfo'
import Footer from './Footer'

const Home = () => {
  const locations = [
    {
        Id: 1,
        name: 'Petra',
        info: `Petra is a famous archaeological site in Jordan's southwestern desert. 
               Dating to around 300 B.C., it was the capital of the Nabatean Kingdom. Accessed 
               via a narrow canyon called Al Siq, it contains tombs and temples carved into pink 
               sandstone cliffs, earning its nickname, the "Rose City.`,
        image: "https://www.planetware.com/wpimages/2020/03/jordan-top-attractions-petra.jpg",
        price: 10
    
    },

    {
        Id: 2,
        name: 'Wadi Rum',
        info: `Wadi Rum (Arabic: وادي رم Wādī Ramm, also Wādī al-Ramm), 
        known also as the Valley of the Moon (Arabic: وادي القمر Wādī al-Qamar), 
        is a valley cut into the sandstone and granite rock in southern Jordan, 
        near the border to Saudi Arabia and about 60 km (37 mi) to the east of the city of Aqaba. 
        With an area of 720 km2 (280 sq mi) it is the largest wadi in Jordan.`,
        image: "https://jordantraveler.com/wp-content/uploads/2021/07/Wadi-Rum-from-Petra-5.png",
        price: 30
    
    },
    {
        Id: 3,
        name: 'The Dead Sea',
        info: `The Dead Sea (Hebrew: יַם הַמֶּלַח, Yam hamMelaḥ; Arabic: اَلْبَحْرُ الْمَيْتُ, Āl-Baḥrū l-Maytū), also known by other names, 
        is a salt lake bordered by Jordan to the east and the West Bank and Palestine to the west. 
        It lies in the Jordan Rift Valley, and its main tributary is the Jordan River.`,
        image: "https://www.planetware.com/wpimages/2020/03/jordan-top-attractions-dead-sea.jpg",
        price: 50
    
    },
    {
      Id: 4,
      name: 'Jerash Ruins',
      info: `It's one of the world's best-preserved ancient Roman cities and features spectacular places to visit, 
      from colonnaded avenues and temples to a massive sports arena that once had a seating capacity of 15,000 spectators.`,
      image: "https://www.planetware.com/wpimages/2020/03/jordan-top-attractions-jerash-ruins.jpg",
      price: 50
  
  },
    {
      Id: 5,
      name: 'Roman Ruins in Amman',
      info: `The Roman Amphitheatre is located in the eastern part of the Jordanian capital, Amman. 
      It is specifically at the foot of Jabal Al-Joufah, on a hill opposite the Amman Citadel. 
      A Greek inscription on one of the pillars indicates that this amphitheater was built in honour of 
      Emperor Antoninus Pius (138–161 CE).`,
      image: "https://www.planetware.com/wpimages/2020/03/jordan-top-attractions-roman-ruins-in-amman.jpg",
      price: 50
  
  },
    {
      Id: 6,
      name: 'Ajloun',
      info: `Situated just 20 kilometers northwest of Jerash, 
      Ajloun makes a worthwhile trip for tourists who want to see some of the best natural scenery in all of Jordan. 
      Plan to spend a day hiking around the Ajloun Forest Reserve, a 13-square-kilometer expanse of pristine, open woodlands. 
      In the spring, the area is blanketed by wildflowers, which makes for spectacular photo opportunities. 
      Keep your eyes peeled for the crested porcupines and striped hyenas that live in the area.`,
      image: "https://www.planetware.com/wpimages/2022/03/jordan-top-attractions-ajloun-wildflowers.jpg",
      price: 50
  
  },
    {
      Id: 7,
      name: 'Wadi Mujib',
      info: `Stretching from the Desert Highway around 70 kilometers to the Dead Sea, 
      Wadi Mujib is Jordan's answer to America's Grand Canyon. The river canyon, which is four 
      kilometers wide and one kilometer deep, offers nature lovers the chance to explore unique 
      scenery and see a plethora of wildlife, including Egyptian vultures, Nubian ibex, striped hyena, 
      and the Syrian wolf.`,
      image: "https://www.planetware.com/wpimages/2020/03/jordan-top-attractions-madi-mujib.jpg",
      price: 50
  
  },
    {
      Id: 8,
      name: 'Desert Castles',
      info: `Stretching from Amman to the border of Saudi Arabia, 
      the Zarqa Governorate is home to a series of archeological sites known as the Desert Castles. 
      These early Islamic buildings were erected by the Umayyads around the turn of the 7th century. 
      Not quite castles in the traditional sense, the collection of structures consists of hunting lodges, 
      forts, military citadels, bathhouses, and rest stops for caravans, among other types of buildings.`,
      image: "https://www.planetware.com/wpimages/2022/03/jordan-top-attractions-desert-castles.jpg",
      price: 50
  
  }

];

const [id, SetId] = useState();




  return (
    <>
        <Header />
        <Tours locations={locations} SetId={SetId}/>
        <ViewInfo id={id} locations={locations}/>
        <Footer/>
    </>
  )
}

export default Home