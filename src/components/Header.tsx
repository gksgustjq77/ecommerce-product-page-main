import { Link } from "react-router-dom";
import { Headers } from "../const/header";
import UserMenu from "./UserMenu";

const Header: React.FC = () => {
  return (
    <header className="mx-auto flex min-w-[1000px] max-w-[1200px] items-center justify-between border-b px-6">
      {/* 좌측: 로고 */}

      {/* 중앙: 메뉴 영역 고정폭 */}
      <div className="flex w-[600px] items-center gap-8">
        <Link
          to="/"
          title="sneakers"
          className="mr-[30px] text-3xl font-bold text-gray-700"
        >
          sneakers
        </Link>
        {Headers.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex h-20 items-center border-b-4 border-transparent font-medium text-gray-700 transition-colors hover:border-orange-500 hover:text-orange-500"
          >
            {item.title}
          </Link>
        ))}
      </div>

      {/* 우측: UserMenu 영역 고정폭 */}
      <div className="flex w-[150px] justify-end">
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
