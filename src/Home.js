import { useState, useEffect } from "react";
import BlogList from "./BlogList";

function Home(){    
    const [blogs, setBlogs] = useState([
        {
            id: "1",
            title: "Dune",
            author: "Frank Herbert",
            body: "Before The Matrix, before Star Wars, before Ender's Game and Neuromancer, there was Dune: winner of the prestigious Hugo and Nebula awards, and widely considered one of the greatest science fiction novels ever written. Melange, or 'spice', is the most valuable - and rarest - element in the universe; a drug that does everything from increasing a person's life-span to making intersteller travel possible. And it can only be found on a single planet: the inhospitable desert world Arrakis. Whoever controls Arrakis controls the spice. And whoever controls the spice controls the universe. When the Emperor transfers stewardship of Arrakis from the noble House Harkonnen to House Atreides, the Harkonnens fight back, murdering Duke Leto Atreides. Paul, his son, and Lady Jessica, his concubine, flee into the desert. On the point of death, they are rescued by a band for Fremen, the native people of Arrakis, who control Arrakis' second great resource: the giant worms that burrow beneath the burning desert sands. In order to avenge his father and retake Arrakis from the Harkonnens, Paul must earn the trust of the Fremen and lead a tiny army against the innumerable forces aligned against them. And his journey will change the universe."
          },
          {
            id: "2",
            title: "The Hunger Games",
            author: "Suzanne Collins",
            body: "Could you survive on your own in the wild, with every one out to make sure you don't live to see the morning?In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to dead before—and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weight survival against humanity and life against love."
          },
          {
            id: "3",
            title: "The third blog",
            author: "yaoying",
            body: "dsfsdfdsfjkfh kj ghfjkghfdgkfdfjj gndfjkgn, fdshfdsjflkjfnkjdfkjs,gkjfgfdhgdfkughliughw8i28487rywufhsdbjndsfjsd. dsfsdfdsfjkfh kj ghfjkghfdgkfdfjj gndfjkgn, fdshfdsjflkjfnkjdfkjs,gkjfgfdhgdfkughliughw8i28487rywufhsdbjndsfjsd."
          },
          {
            id: "4",
            title: "!!!!!!!",
            author: "yaoying",
            body: "dsfsdfdsfjkfh kj ghfjkghfdgkfdfjj gndfjkgn, fdshfdsjflkjfnkjdfkjs,gkjfgfdhgdfkughliughw8i28487rywufhsdbjndsfjsd. dsfsdfdsfjkfh kj ghfjkghfdgkfdfjj gndfjkgn, fdshfdsjflkjfnkjdfkjs,gkjfgfdhgdfkughliughw8i28487rywufhsdbjndsfjsd."
          }
    ])

    const handleDelte = (id) =>{
      const newBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(newBlogs);
    }

    return(
        <div className="home-container">
            <h1>All Blogs!</h1>
            <BlogList blogs={blogs} handleDelte={handleDelte}></BlogList>
        </div>
        
        
    )
}

export default Home;