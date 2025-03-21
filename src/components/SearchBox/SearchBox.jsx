import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";

export const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <label>
        <span>Find contact by name</span>
        <input
          name="find"
          type="text"
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
};
