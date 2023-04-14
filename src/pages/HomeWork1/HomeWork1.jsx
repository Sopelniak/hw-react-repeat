import { Profile } from "./components/Profile/Profile";
import { Statistics } from "./components/Statistics/Statistics";
import { FriendList } from "./components/FriendList/FriendList";
import user from "../../resources/user.json";
import data from "../../resources/data.json";
import friends from "../../resources/friends.json";
import css from "./HomeWork1.module.css";

const title = "Upload stats";

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
      <Statistics title={title} stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
