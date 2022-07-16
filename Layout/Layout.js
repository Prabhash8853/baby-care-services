import Footer from "./Footer";
import { Header } from "./Header";
import NotificationBar from "./NotificationBar";

export default function Layout({ header, footer, children, notification }) {
  return (
    <>
      {header && <Header currentRoute="/" notification />}
      <main className="main__wrapper">{children}</main>
      {footer && <Footer />}
    </>
  );
}
