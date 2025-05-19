import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOSProvider from '@/components/AOSProvider';
import '@splidejs/react-splide/css';

export const metadata = {
  title: "Eustace Mbanefo",
  description: "talented Software Engineer open to software projects collaborations and jobs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link rel="icon" href="./icon.png" />
    </head>
      <body style={{fontFamily: "Arial, Helvetica, sans-serif; color:black;"}}>
      <AOSProvider />
        {children}
      </body>
    </html>
  );
}
