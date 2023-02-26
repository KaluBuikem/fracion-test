import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { useState } from "react";

import meta from "/public/MetaMask.png";
type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = () => {
  const [currentAccount, setCurrentAccount] = useState<string>("");
  const connectWalletHandler = async () => {
    const { ethereum }: any = window;

    if (!ethereum) {
      alert("Please install Metamask!");
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const disconnectWalletHandler = async () => {
    setCurrentAccount("");
  };

  return (
    <nav className="flex justify-end">
      <ConnectButton />
    </nav>
  );
};
export default NavBar;
