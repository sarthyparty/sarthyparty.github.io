export const projects = [
  {
    name: "EPHS Maps",
    description: 
    `Originally, we actually used DFS for pathfinding. However, as we incorporated more of the school into our app, we quickly ran into a speed issue with DFS and thus eventually switched to A star.
    
    Thanks to this, I was able to learn a lot about graph traversals and pathfinding algorithms including dijkstra's algorithm which we implemented as well in Swift before finally A star.
    
    Our heuristic model uses geographic distance to estimate the cost.`,
    image: "gps.png",
    link: "https://github.com/sarthyparty/Find-My-EP"
  },
  {
    name: "Attendance Tracker",
    description: `Built an attendance tracking site for clubs at my school.
    
    Being used by one clubs right now with 30+ members.
    
    
    




    
    `,
    image: "attender.png",
    link: "https://github.com/sarthyparty/attendance-tracker"
  },
  {
    name: "Soccer Match Predictions",
    description: `Used to TigerGraph to build a graph database trained with thousands of soccer matches. Then given a year, it is able to guess what the outcome of a match between two teams with a given year. 
    
    Used Jupyter Notebook to manipulate data with pandas and numpy. I also wrote tutorials on Medium for anyone to follow along.
    
    
    
    `,
    image: "tg.png",
    link: "https://sarthavader.medium.com/predict-who-will-win-a-soccer-match-using-tigergraph-pandas-and-gsql-part-1-3-65c2fef665e"
  },
  {
    name: "Fixword",
    description: `For a Minnehack (a hackathon), I built a tool to convert common words into unique usernames by randomly converting parts of the username to leetspeak.
    
    
    
    `,
    image: "fixword.png",
    link: "https://fixword.netlify.app/"
  }
]