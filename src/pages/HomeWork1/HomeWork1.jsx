import { Profile } from "./components/Profile/Profile";
import { Statistics } from "./components/Statistics/Statistics";
import user from "../../resources/user.json";
import css from "./HomeWork1.module.css";

export const HomeWork1 = () => {
  return (
    <div className={css.hw1Box}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics />
    </div>
  );
};
