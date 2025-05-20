import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AppBar from "./AppBar/AppBar";
import styles from "./Layout.module.css";

export const Layout = () => {
  return (
    <div className={styles.container}>
      <AppBar />
      <Suspense fallback={<p className={styles.loading}>Loading...</p>}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
