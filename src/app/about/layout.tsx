// app/about/layout.js
export const metadata = {
    title: "About Us | Rent Companion",
    description: "Learn more about our story, mission, and values.",
  };
  
  export default function AboutLayout({ children }) {
    return (
      <section>
        {children}
      </section>
    );
  }
  