import { Header, LandingContainer } from "components";
import { LandingPage } from "pages";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getCategories } from "Redux/Reducers/quizSlice";
import { useAppDispatch } from "Redux/Type";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }),
    [];

  return (
    <LandingContainer>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </LandingContainer>
  );
}

export default App;
