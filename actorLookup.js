// Array to store the names of five different actors or actresses in an array.
const array = [
  {
    id: 1,
    movieName: "sita Ramam",
    actor: "Dulquer Salmaan",
    actress: "Mrunal Thakur",
    otherStars:
      "Rashmika Mandanna,Sumanth,Sachin Khedekar,Jisshu Sengupta,Murali Sharma",
  },
  {
    id: 2,
    movieName: "super 30",
    actor: "Hrithik Roshan",
    actress: "Mrunal Thakur",
    otherStars: "Nandish Singh Sandhu,Veerendra Saxena",
  },
  {
    id: 3,
    movieName: "Pushpa:The Rise",
    actor: "Allu Arjun",
    actress: "Rashmika Mandanna",
    otherStars: "Fahadh Faasil",
  },
  {
    id: 4,
    movieName: "Animal",
    actor: "Ranbir kapoor",
    actress: "Rashmika Mandanna",
    otherStars: "Anil Kapoor,Bobby Deol,and Triptii Dimri",
  },
  {
    id: 5,
    movieName: "Ala Vaikunthapurramuloo",
    actor: "Allu Arjun",
    actress: "Puja hegde",
    otherStars: "Tabu,S.Thaman,Trivikram Srinivas",
  },
];

const searchInfield = (actorName, stars) => {
  if (stars.match(new RegExp(actorName, "gi"))) return true;
};

const findActorByMoviesName = (movieName) => {
  try {
    // validation of input
    if (!movieName) {
      return console.log("please provide Movie Name");
      // throw new Error("Please provide a movie name");
    }
    const name = movieName.toLowerCase();
    const movieMap = new Map(); // Create hashmap to store the result in O(1) time complexity and in key and value pair
    array.filter((data) => {
      //filter out the data according to condition...
      if (searchInfield(name, data.movieName)) {
        if (movieMap.has(name)) {
          movieMap.get(name).push(data);
        } else {
          movieMap.set(name, data);
        }
      }
    });
    // Check if the movie exists in the map
    if (movieMap.has(name)) {
      let result = movieMap.get(name);
      return console.log(
         `In the movie ${result.movieName.toUpperCase()} the Actor is ${
          result.actor
        } and Actess is ${result.actress}, Other Stars are ${result.otherStars}`
      );
    } else {
      return console.log(`No such movie found`);
    }
  } catch (error) {
    return console.log(error);
  }
};

const findMoviesByActorName = (actorName) => {
  try {
    // Validation of input
    if (!actorName) {
      return console.log("Please provide an Actor/Actress Name");
      //  throw new Error("Please provide an Actor/Actress Name");
    }
    const name = actorName.toLowerCase(); //  Converting the user's input to lowercase for case-insensitive matching
    const actorMoviesMap = new Map(); //  Create hashmap to store the result in O(1) time complexity and actor/actress names as keys and movie titles as values
    array.filter((data) => {
      // use filter method to iterate over the data and check for matches in each field
      if (
        searchInfield(name, data.actor) || // searching in the actor field
        searchInfield(name, data.actress) || // searching in the actress field
        searchInfield(name, data.otherStars) // searching in the otherStar field
      ) {
        if (actorMoviesMap.has(name)) {
          //  if the actor name is present in the map
          actorMoviesMap.get(name).push(data.movieName);
        } else {
          //  If not present then add to the map with a new key value pair
          actorMoviesMap.set(name, [data.movieName]);
        }
      }
    });
    // Check if the actor exists in the map
    if (!actorMoviesMap.has(name)) {
      return console.log(`No movies found for actor/actress: ${actorName}`);
    }
    // Retrieve and print the movies for the actor
    console.log(
      `Movies featuring ${actorName}: ${actorMoviesMap.get(name).join(", ")}`
    );
  } catch (error) {
    return console.log(error);
  }
};

findMoviesByActorName("Allu arjun");//Calling function to get movie name by actor's / actress's or other stars name. you can type co-stars name to get movie name
// Some test cases from my side 
//1.rashmika
//2.rash
//Hrithik
findActorByMoviesName("animal");//  Calling function to get details by movie name
// Some test cases from my side 
//sita
//super 30
//Animal