import { Menu, Transition } from "@headlessui/react";
import { CircleStackIcon } from "@heroicons/react/20/solid";
import { Fragment, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BalanceContext } from "~/contexts/BalanceContext";
import { user as userDomain } from "~/globals/Domains";
import { useAuth } from "~/hooks/useAuth";

type MenuDropdownNavbarComponentProps = {
  children: React.ReactNode;
};

const MenuDropdownNavbarComponent: React.FC<MenuDropdownNavbarComponentProps> = ({ children }) => {
  const [user] = useAuth();
  const navigate = useNavigate();
  const [balance] = useContext(BalanceContext);

  const handleLogout = useCallback(() => {
    localStorage.removeItem(userDomain);
    navigate("/");
  }, []);

  return (
    <>
      <Menu as="div" className="relative inline-block text-left ml-14">
        <div>
          <Menu.Button>{children}</Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-white rounded-md bg-darkGrey shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {() => (
                  <div className="flex justify-center items-center mb-5 mt-2">
                    <h1 className="text-white">
                      Olá <span className="text-white font-bold">{user.name}</span>
                    </h1>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {() => (
                  <div className="flex justify-center items-center mb-1">
                    <CircleStackIcon className="h-5 fill-yellow-400 mr-2" aria-hidden="true" />
                    <h1 className="text-white">
                      {balance.gyc_amount ? balance.gyc_amount.toFixed(2) : 0}{" "}
                      <span className="text-xs">gyc</span>
                    </h1>
                  </div>
                )}
              </Menu.Item>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-black text-white" : "text-white"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Inventário
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-black text-white" : "text-white"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={handleLogout}
                    >
                      Sair
                    </button>
                  )}
                </Menu.Item>
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default MenuDropdownNavbarComponent;
