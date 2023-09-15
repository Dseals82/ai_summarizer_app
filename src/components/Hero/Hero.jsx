import { logo } from "../../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center  w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          className="black_btn"
          onClick={() => {
            window.open("https://github.com/Dseals82/ai_summarizer_app.git");
          }}
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        Simplify your reading with Sumz, our <strong>open-source</strong>{" "}
        article summarizer. Transform lengthy articles into clear concise
        summaries, and with the added bonus of{" "}
        <strong>text-to-speech functionality</strong>. Make your reading
        experience even more accessible and enjoyable!!!
      </h2>
    </header>
  );
};

export default Hero;
