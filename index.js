// function wakeDog() {
  // console.log("Wake Byron the poodle");
// }

  function wakeDog(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`
  }

  function leashDog(dogName, dogBreed) {
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return `Leash ${dogName} the ${dogBreed}`
  }

  function walkToPark(dogName, dogBreed) {
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return `Walk to the park with ${dogName} the ${dogBreed}`
  }

  function throwFrisbee(dogName, dogBreed) {
    console.log(`Throw frisbee ${dogName} the ${dogBreed}`);
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
  }

  function walkHome(dogName, dogBreed) {
    console.log(`Walk ${dogName} the ${dogBreed} home`);
    return `Walk home with ${dogName} the ${dogBreed}`
  }

  function unleashDog(dogName, dogBreed) {
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    return `Unleash ${dogName} the ${dogBreed}`
  }

  const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

  function exerciseDog(dog, breed) { 
    const exercises = []
    routine.forEach(fn => {
      const exercise = fn(dog, breed)
      exercises.push(exercise)
    })
    return exercises
  }