import { RootState } from "Redux/Store";
import { useAppSelector } from "Redux/Type";
import "./LandingPage.css";

export const LandingPage = () => {
  const categories = useAppSelector(
    (state: RootState) => state.quiz.categories
  );

  return (
    <section className="landing-page-container">
      <p className="title">Let's see how great of a Gamer you are!</p>
      <h2 className="category-subtitle">Select a Category</h2>
      <div className="category-selector">
        {categories?.map((category) => {
          return (
            <div key={category._id} className="category-title card-shadow">
              <h2>{category.categoryName}</h2>
              <p>{category.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
