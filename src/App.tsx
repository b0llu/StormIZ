import { Header, LandingContainer } from "components";
import { CategoryPage, LandingPage } from "pages";
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
      </Routes>
    </LandingContainer>
  );
}

export default App;
