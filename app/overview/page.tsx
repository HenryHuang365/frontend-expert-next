export default function GlobalOverview() {
  return (
    <div className="flex flex-col w-full mx-20 my-40 space-y-6">
      {/* Title Section */}
      <h1 className="text-4xl font-bold text-center animate-fade-in">
        Hey there!{' '}
        <span
          className="inline-block animate-wave"
          role="img"
          aria-label="waving hand"
        >
          👋🏼
        </span>
      </h1>

      {/* Introduction */}
      <p className="text-lg text-left leading-relaxed animate-fade-in">
        The <strong>Frontend Expert</strong> course covers the essential
        technologies and concepts of the frontend ecosystem. The course can be
        purchased through the{' '}
        <a
          href="https://www.algoexpert.io/frontend/product"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          AlgoExpert website
        </a>
        .
      </p>

      {/* Explanation */}
      <p className="text-lg text-left leading-relaxed animate-fade-in">
        I’ve created this simple website as a collection of all the questions
        and solutions for the course. You can browse through the list of
        questions in the sidebar and open any question to view its details.
      </p>

      {/* CORS and API Explanation */}
      <p className="text-lg text-left leading-relaxed animate-fade-in">
        For questions involving external APIs, I’ve explored free alternatives
        to implement the solutions. If you encounter any issues, feel free to
        check the browser console or network tab for more details.
      </p>

      {/* Call-to-Action */}
      <p className="justify-start text-lg text-left leading-relaxed animate-fade-in">
        Try{' '}
        <a
          href="/fe/exercise/1"
          className="text-blue-600 font-medium hover:underline"
        >
          Click here
        </a>{' '}
        to dive into the first question or select any question of your choice
        from the sidebar. Happy learning!
      </p>
    </div>
  );
}
