import { UserButton } from "@clerk/nextjs";
const Head = ({ prop }) => {
  return (
    <>
      <div className="bar__item bar__item_user">
        <a href="" className="user_opener">
          <UserButton afterSignOutUrl="/sign-in" />
        </a>
      </div>
    </>
  );
};
export default Head;
