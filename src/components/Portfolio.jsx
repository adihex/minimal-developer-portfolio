import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
        {portfolio.map((project) => (
          <PortfolioItem
            key={project.title}
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}
export default Portfolio;
