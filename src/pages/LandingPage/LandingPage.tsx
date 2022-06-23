import { useDocTitle } from "Hooks/useTitle";
import { Link } from "react-router-dom";
import { RootState } from "Redux/Store";
import { useAppSelector } from "Redux/Type";
import "./LandingPage.css";

export const LandingPage = () => {

  useDocTitle('Home | StormQuiz')

  const categories = useAppSelector(
    (state: RootState) => state.quiz.categories
  );

  return (
    <section className="landing-page-container">
      <p className="title">Let's see how great of a <span>Gamer</span> you are!</p>
      <h2 className="category-subtitle">Select a Category</h2>
      <div className="category-selector">
        {categories?.map((category) => {
          return (
            <Link
              key={category._id}
              to={`/${category.categoryName}/${category._id}`}
            >
              <div className="category-title card-shadow">
                <h2>{category.categoryName}</h2>
                <p>{category.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
