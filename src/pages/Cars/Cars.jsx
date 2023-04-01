import { useState } from "react";
import { Header, Search } from "../../components";
import CarList from "./CarList";
import "./Cars.css";
const Cars = (props) => {
  const [searchFocus, setSearchFocus] = useState(false);

  return (
    <main>
      <Header isFiltered={props.isFiltered} />
      <Search {...props} setSearchFocus={setSearchFocus} />
      <CarList {...props} />
      {/* <div className={`${searchFocus ? "overlay" : ""}`}></div> */}
    </main>
  );
};
export default Cars;
