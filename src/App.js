import Movielist from './Movielist'
import './App.css';
import Add from './Add'
import Search from './Search'
import  { useState } from 'react'


function App() {
 const movies=[
  {id:1,title:'The pursuit of happyness',description:'The Pursuit of Happyness is a film based on the life of the tycoon Christopher Gardner. This film demonstrates the battles that Chris Gardner faces while attempting to make a good life for himself and his child. The main themes of this film is survival, determination, and never giving up on your dreams.',posteURL:"https://miro.medium.com/max/548/1*Y8vXN1mJeEHyXWJtFICjiQ.jpeg",rating:5},
    {id:2,title:'The harder they fall',description:'When an outlaw discovers his enemy is being released from prison, he reunites his gang to seek revenge in this Western. When an outlaw discovers his enemy is being released from prison, he reunites his gang to seek revenge in this Western.',posteURL:'https://fr.web.img4.acsta.net/c_310_420/pictures/21/09/28/16/12/3226380.jpg',rating:4},
    {id:3,title:'Spirit',description:'The film follows Spirit, a Kiger Mustang stallion (voiced by Matt Damon through inner dialogue), who is captured during the American Indian Wars by the United States Cavalry; he is freed by a Native American man named Little Creek who attempts to lead him back into the Lakota village',posteURL:'https://imgsrc.cineserie.com/2016/05/1501736.jpg?ver=1',rating:2},
    {id:4,title:'Hush',description:'A deaf and mute writer who retreated into the woods to live a solitary life must fight for her life in silence when a masked killer appears at her window. A deaf and mute writer who retreated into the woods to live a solitary life must fight for her life in silence when a masked killer appears at her window.',posteURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5XGLepAncUi_lJnAe7p-wKvoJrtaos9WClw&usqp=CAU',rating:''},
    {id:5,title:'Unsolved',description:'A scripted True Crime series based on the murder investigations of Tupac Shakur and Biggie Smalls. It will chronicle the two major police investigations into the separate murders of rappers Tupac Shakur and Biggie Smalls.',posteURL:'https://i.pinimg.com/originals/ea/ff/85/eaff85d62c71b5399da92967cc18d10d.png',rating:3},
  {id:6,title:'Pelé',description:'In PELE, the career of the greatest soccer player of all time is examined. From the early age of 16, Pele hit the soccer world explosively. The only player to win 3 World Cups, Pele remains the leading all-time scorer for his club Santos and the Brazil national team.',posteURL:'https://imgsrc.cineserie.com/2016/08/1704319.jpg?ver=1',rating:3}
 ]
 const [newFilms,setNewFilms]=useState(movies)
 const handleAdd=(filmm)=>{
   setNewFilms([...newFilms,{...filmm,id:newFilms.length+1}])
 }

 const [searchTitle, setSearchTitle] = useState("")
 const [searchRating, setSearchRating] = useState(0)

 const handleSearchtit=(x)=>{
  setSearchTitle(x)
 }

 const SearchByRate=(rate)=>{
  setSearchRating(rate)
 }

  return (
    <div className="App">
     
      <div >
      <Search handleSearchtit={handleSearchtit} SearchByRate={SearchByRate} />
       <Movielist movies={newFilms.filter(el=>el.title.toLocaleLowerCase().includes(searchTitle.toLocaleLowerCase())&&el.rating>=searchRating)}  />
       <Add handleAdd={handleAdd}/>
      </div>
      
    </div>
  );
}

export default App;
