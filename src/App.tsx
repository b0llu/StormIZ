import { Header, LandingContainer, RuleRouting } from "components";
import { CategoryPage, LandingPage, QuestionPage } from "pages";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getAllQuizes, getCategories } from "Redux/Reducers/quizSlice";
import { useAppDispatch } from "Redux/Type";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getAllQuizes());
  }, []);

  return (
    <LandingContainer>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:category/:categoryId" element={<CategoryPage />} />
        <Route element={<RuleRouting />}>
          <Route path="/:quizId" element={<QuestionPage />} />
        </Route>
      </Routes>
    </LandingContainer>
  );
}

export default App;
