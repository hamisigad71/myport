"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import Signin from "@/components/Auth/SignIn";
import SignUp from "@/components/Auth/SignUp";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react/dist/iconify.js";
import { SuccessfullLogin } from "@/components/Auth/AuthDialog/SuccessfulLogin";
import { FailedLogin } from "@/components/Auth/AuthDialog/FailedLogin";
import { UserRegistered } from "@/components/Auth/AuthDialog/UserRegistered";
import AuthDialogContext from "@/app/context/AuthDialogContext";

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const { theme, setTheme } = useTheme();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const signInRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLDivElement>(null);

  const isHomePage = pathUrl === "/";

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY >= 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        navbarOpen
      ) {
        setNavbarOpen(false);
      }
      if (signInRef.current && !signInRef.current.contains(e.target as Node))
        setIsSignInOpen(false);
      if (signUpRef.current && !signUpRef.current.contains(e.target as Node))
        setIsSignUpOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [navbarOpen]);

  useEffect(() => {
    document.body.style.overflow =
      isSignInOpen || isSignUpOpen || navbarOpen ? "hidden" : "";
  }, [isSignInOpen, isSignUpOpen, navbarOpen]);

  const authDialog = useContext(AuthDialogContext);

  return (
    <>
      {/* Fixed & Balanced Header */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
          sticky || !isHomePage
            ? "h-20 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-800/50"
            : "h-24 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 h-full grid grid-cols-[auto,1fr,auto] items-center gap-6">
          {/* Left: Logo */}
          <div className="shrink-0">
            <Logo />
          </div>

          {/* Center: Desktop Navigation – Perfectly Centered */}
          <nav className="hidden lg:flex flex-1 justify-center items-center px-2">
            <ul className="flex flex-wrap items-center justify-center gap-6 xl:gap-8">
              {headerData.map((item, i) => (
                <HeaderLink key={i} item={item} />
              ))}
            </ul>
          </nav>

          {/* Right: Theme + Auth Buttons – Perfectly Aligned */}
          <div className="flex items-center justify-end gap-3 pl-2 lg:pl-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              aria-label="Toggle theme"
            >
              <Icon
                icon="ph:sun-bold"
                className="h-5 w-5 hidden dark:block text-yellow-400"
              />
              <Icon
                icon="ph:moon-bold"
                className="h-5 w-5 block dark:hidden text-gray-700"
              />
            </button>

            {/* Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center gap-2">
              <button
                onClick={() => setIsSignInOpen(true)}
                className="px-5 py-2 text-sm font-medium border border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-all shadow-sm"
              >
                Sign In
              </button>
              <button
                onClick={() => setIsSignUpOpen(true)}
                className="px-5 py-2 text-sm font-semibold bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-md transition-all"
              >
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setNavbarOpen(true)}
              className="lg:hidden p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              aria-label="Open menu"
            >
              <Icon icon="ph:list-bold" className="h-7 w-7" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {navbarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setNavbarOpen(false)}
        />
      )}

      {/* Mobile Menu – Clean & Modern */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-950 shadow-2xl transform transition-transform duration-400 z-50 lg:hidden ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold">Menu</h2>
          <button
            onClick={() => setNavbarOpen(false)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
          >
            <Icon icon="ph:x-bold" className="h-7 w-7" />
          </button>
        </div>

        <nav className="p-6 space-y-5">
          {headerData.map((item, i) => (
            <MobileHeaderLink
              key={i}
              item={item}
              onClick={() => setNavbarOpen(false)}
            />
          ))}

          <div className="pt-8 space-y-4 border-t border-gray-200 dark:border-gray-800">
            <button
              onClick={() => {
                setIsSignInOpen(true);
                setNavbarOpen(false);
              }}
              className="w-full py-4 text-left text-lg font-medium hover:text-blue-600 transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setIsSignUpOpen(true);
                setNavbarOpen(false);
              }}
              className="w-full py-4 bg-blue-600 text-white text-lg font-semibold rounded-2xl hover:bg-blue-700 transition-all shadow-lg"
            >
              Sign Up
            </button>
          </div>
        </nav>
      </div>

      {/* Sign In Modal */}
      {isSignInOpen && (
        <div
          ref={signInRef}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
        >
          <div className="relative bg-white dark:bg-gray-950 rounded-3xl p-8 max-w-md w-full shadow-2xl">
            <button
              onClick={() => setIsSignInOpen(false)}
              className="absolute top-6 right-6 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all"
            >
              <Icon icon="ph:x" className="h-6 w-6" />
            </button>
            <Signin signInOpen={setIsSignInOpen} />
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {isSignUpOpen && (
        <div
          ref={signUpRef}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
        >
          <div className="relative bg-white dark:bg-gray-950 rounded-3xl p-8 max-w-md w-full shadow-2xl">
            <button
              onClick={() => setIsSignUpOpen(false)}
              className="absolute top-6 right-6 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all"
            >
              <Icon icon="ph:x" className="h-6 w-6" />
            </button>
            <SignUp signUpOpen={setIsSignUpOpen} />
          </div>
        </div>
      )}

      {/* Auth Feedback Toasts */}
      {authDialog?.isSuccessDialogOpen && <SuccessfullLogin />}
      {authDialog?.isFailedDialogOpen && <FailedLogin />}
      {authDialog?.isUserRegistered && <UserRegistered />}
    </>
  );
};

export default Header;
