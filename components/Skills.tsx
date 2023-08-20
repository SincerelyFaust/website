const Skills = () => {
  return (
    <div>
      <div className="flex flex-col px-48 w-screen h-fit items-end justify-end gap-20 lg:justify-center lg:items-center lg:px-20">
        <p className="text-9xl font-bold text-blue-600 lg:text-5xl">
          💪 Skills
        </p>
        <div className="flex flex-row-reverse flex-wrap justify-between gap-20 w-full items-start lg:justify-center lg:gap-20">
          <div className="flex flex-col gap-x-10 gap-y-5 justify-start items-start lg:gap-2">
            <p className="text-3xl font-bold lg:text-2xl">Motion design</p>
            <p className="text-2xl text-left font-light lg:text-xl">
              Adobe After Effects
            </p>
            <p className="text-2xl text-left font-light lg:text-xl">Lottie</p>
          </div>
          <div className="flex flex-col gap-x-10 gap-y-5 justify-start items-start lg:gap-2">
            <p className="text-3xl font-bold lg:text-2xl">Tools</p>
            <p className="text-2xl text-left font-light lg:text-xl">Git</p>
            <p className="text-2xl text-left font-light lg:text-xl">
              Meta Business Suite
            </p>
            <p className="text-2xl text-left font-light lg:text-xl">Supabase</p>
            <p className="text-2xl text-left font-light lg:text-xl">CI/CD</p>
          </div>
          <div className="flex flex-col gap-x-10 gap-y-5 justify-start items-start lg:gap-2">
            <p className="text-3xl font-bold lg:text-2xl">Graphic design</p>
            <p className="text-2xl text-left font-light lg:text-xl">
              Adobe Photoshop
            </p>
            <p className="text-2xl text-left font-light lg:text-xl">Figma</p>
          </div>
          <div className="flex flex-col gap-x-10 gap-y-5 justify-start items-start lg:gap-2">
            <p className="text-3xl font-bold lg:text-2xl">Non-languages</p>
            <p className="text-2xl text-left font-light lg:text-xl">HTML</p>
            <p className="text-2xl text-left font-light lg:text-xl">CSS</p>
          </div>
          <div className="flex flex-col gap-x-10 gap-y-5 justify-start items-start lg:gap-2">
            <p className="text-3xl font-bold lg:text-2xl">Frameworks</p>
            <p className="text-2xl text-left font-light lg:text-xl">Flutter</p>
            <p className="text-2xl text-left font-light lg:text-xl">React</p>
            <p className="text-2xl text-left font-light lg:text-xl">Next.js</p>
            <p className="text-2xl text-left font-light lg:text-xl">Tauri</p>
            <p className="text-2xl text-left font-light lg:text-xl">
              React Native
            </p>
          </div>
          <div className="flex flex-col gap-x-10 gap-y-5 justify-start items-start lg:gap-2">
            <p className="text-3xl font-bold lg:text-2xl">Languages</p>
            <p className="text-2xl text-left font-light lg:text-xl">Dart</p>
            <p className="text-2xl text-left font-light lg:text-xl">
              TypeScript
            </p>
            <p className="text-2xl text-left font-light lg:text-xl">
              JavaScript
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
