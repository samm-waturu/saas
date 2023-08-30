import "@/app/global.css";
import { FontFetchHeebo } from "../fonts/fonts";
export default function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={FontFetchHeebo.className}>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if (!localStorage.mode) {
                localStorage.mode = 'dark';
              }
              if (!localStorage.custom_panel) {
                localStorage.custom_panel = '';
              }
              document.documentElement.setAttribute("data-style-skin", localStorage.mode);
              if(localStorage.custom_panel !== ''){
                document.documentElement.classList.add(localStorage.custom_panel);
              }} catch(_){}`
          }}
        />
        {children}
      </body>
    </html>
  );
}
