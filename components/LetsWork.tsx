import useMediaQuery from "../utils/hooks/useMediaQuery";

const LetsWork = () => {
  const isWindowSizeSmall = useMediaQuery("(max-width: 1075px)");

  return (
    <div>
      <div
        className={
          !isWindowSizeSmall
            ? "flex flex-col px-48 w-screen h-fit gap-10"
            : "flex flex-col px-20 w-screen h-fit gap-10"
        }
      >
        <p
          className={
            !isWindowSizeSmall
              ? "text-9xl font-bold text-blue-600"
              : "text-5xl font-bold text-blue-600 text-center"
          }
        >
          👨‍💼 Let&apos;s work
        </p>
        <p
          className={
            !isWindowSizeSmall ? "text-2xl font-light" : "font-light text-sg"
          }
        >
          I&apos;m available for all kinds of opportunities, whether it be a
          paid position (full/part-time or as a contractor) or joining forces to
          create paid positions. Also interested in joining FOSS/OSS projects
          that have potential, too. Besides that, I am also offering my services
          to individuals or companies just looking for someone to do a quick
          gig, below you can find a list of services I provide.
        </p>
        <div className="flex flex-col gap-3">
          <p
            className={
              !isWindowSizeSmall ? "text-2xl font-bold" : "font-bold text-sg"
            }
          >
            👨‍🔧 Services I offer:
          </p>
          <div className="flex flex-col gap-1">
            <p>- Designing logotypes and other visual content</p>
            <p>- Developing websites and web applications</p>
            <p>- Developing e-commerce websites (webshops)</p>
            <p>- Developing mobile and desktop applications</p>
          </div>
        </div>
        <p
          className={
            !isWindowSizeSmall ? "text-2xl font-light" : "font-light text-sg"
          }
        >
          If you have any kind of an opportunity and are looking for someone
          reliable, trustworthy, hard-working, ambitious and a
          do-whatever-it-takes person who is more than excited to learn, adapt
          and grow with you, please do not hesitate to contact me anywhere.
        </p>
      </div>
    </div>
  );
};

export default LetsWork;
