import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <main className="h-full">
      <div className="w-full">
        <h1 className="text-5xl  text-black-600 ">
          I am{" "}
          <span>
            <Typewriter
              words={["a Frontend developer", "a Backend developer", "a lifelong learner", "a Fullstack developer"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={10002}
            />
          </span>
        </h1>
    
      </div>

      <h2 className="m-16 text-md text-black-600">
      My name is{" "}
          <span>
            <Typewriter
              words={["Batbold"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={90}
              deleteSpeed={500}
              delaySpeed={10002}
            />
          </span>
       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
       </h2>

    <div className="flex-row m-16">
      <img className="h-52 w-52 justify-center m-16" src="https://img.icons8.com/clouds/100/000000/imac-settings.png" alt="imac-settings"></img>
     <div>Why I code reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
      </div>

      <img className="h-32 w-32 justify-center" src="https://img.icons8.com/clouds/100/000000/imac-settings.png" alt="imac-settings"></img>
    </main>
  );
}